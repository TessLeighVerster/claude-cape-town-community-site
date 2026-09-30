#!/usr/bin/env bash
# QA check for claudecapetown.com. Prints PASS/FAIL per check, exits 1 on any failure.
#
#   scripts/qa.sh                 check the live site against site/index.html
#   scripts/qa.sh --retries 12    keep re-fetching (10s apart) until live matches local
#   BASE=https://example.com scripts/qa.sh   check a different host
set -u
BASE="${BASE:-https://claudecapetown.com}"
HOST="${BASE#https://}"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
LOCAL="$ROOT/site/index.html"
RETRIES=1
[ "${1:-}" = "--retries" ] && RETRIES="${2:-1}"
TMP="$(mktemp -d)"; trap 'rm -rf "$TMP"' EXIT
LIVE="$TMP/live.html"
fail=0; pass=0
ok()   { pass=$((pass+1)); printf 'PASS  %s\n' "$1"; }
bad()  { fail=$((fail+1)); printf 'FAIL  %s: %s\n' "$1" "$2"; }
skip() { printf 'SKIP  %s: %s\n' "$1" "$2"; }
get()  { curl -sS -o "$2" -w '%{http_code}' --max-time 20 -H 'Cache-Control: no-cache' "$1" 2>/dev/null; }

echo "QA: $BASE  ($(date '+%Y-%m-%d %H:%M %Z'))"
echo "----------------------------------------------"

# 1. DNS
if command -v dig >/dev/null; then
  a=$(dig +short A "$HOST" @1.1.1.1 | sort | tr '\n' ' ')
  want="185.199.108.153 185.199.109.153 185.199.110.153 185.199.111.153 "
  [ "$a" = "$want" ] && ok "DNS apex A records point at GitHub Pages" || bad "DNS apex A records" "got: $a"
  c=$(dig +short CNAME "www.$HOST" @1.1.1.1)
  [ "$c" = "tessleighverster.github.io." ] && ok "DNS www CNAME points at GitHub Pages" || bad "DNS www CNAME" "got: $c"
else
  skip "DNS" "dig not installed"
fi

# 2. Redirects
loc=$(curl -sSI --max-time 20 "http://$HOST/" 2>/dev/null | tr -d '\r' | awk 'tolower($1)=="location:"{print $2}')
[ "$loc" = "$BASE/" ] && ok "HTTP redirects to HTTPS" || bad "HTTP redirect" "Location: ${loc:-none}"
loc=$(curl -sSI --max-time 20 "https://www.$HOST/" 2>/dev/null | tr -d '\r' | awk 'tolower($1)=="location:"{print $2}')
[ "$loc" = "$BASE/" ] && ok "www redirects to apex" || bad "www redirect" "Location: ${loc:-none}"

# 3. Certificate
exp=$(echo | openssl s_client -servername "$HOST" -connect "$HOST:443" 2>/dev/null | openssl x509 -noout -enddate 2>/dev/null | cut -d= -f2)
if [ -n "$exp" ]; then
  if date -j >/dev/null 2>&1; then exp_s=$(date -j -f '%b %d %T %Y %Z' "$exp" +%s 2>/dev/null); else exp_s=$(date -d "$exp" +%s 2>/dev/null); fi
  days=$(( (exp_s - $(date +%s)) / 86400 ))
  [ "$days" -gt 14 ] && ok "TLS certificate valid for $days more days" || bad "TLS certificate" "expires in $days days ($exp)"
else
  bad "TLS certificate" "could not read certificate"
fi

# 4. Live page matches the source on disk (retry for edge propagation)
matched=0
for i in $(seq 1 "$RETRIES"); do
  code=$(get "$BASE/" "$LIVE")
  if [ "$code" = "200" ] && cmp -s "$LOCAL" "$LIVE"; then matched=1; break; fi
  [ "$i" -lt "$RETRIES" ] && sleep 10
done
if [ "$matched" = 1 ]; then ok "Live page is byte-identical to site/index.html"
elif [ "$code" != "200" ]; then bad "Live page" "HTTP $code"
else bad "Live page differs from site/index.html" "last deploy may not have landed, or local has unpushed edits"; fi
[ -s "$LIVE" ] || { echo "no page to check further"; exit 1; }

# 5. Every route is present
for v in home events gallery demos speak partner join; do
  grep -q "data-view=\"$v\"" "$LIVE" && ok "Route #/$v present" || bad "Route #/$v" "missing from page"
done

# 6. Forms and their key fields
chk_field() { grep -q "name=\"$2\"" "$LIVE" && ok "Form $1 has field $2" || bad "Form $1" "field $2 missing"; }
for f in nl-form speak-form partner-form join-form; do
  grep -q "id=\"$f\"" "$LIVE" && ok "Form $f present" || bad "Form $f" "missing"
done
chk_field join-form phone; chk_field join-form why; chk_field partner-form org; chk_field partner-form how
grep -q 'data-ev-tab="past"' "$LIVE" && ok "Events Upcoming/Past toggle present" || bad "Events toggle" "missing"

# 7. Every asset loads
n=0; broken=0
while IFS= read -r ref; do
  n=$((n+1)); code=$(get "$BASE/$ref" /dev/null)
  [ "$code" = "200" ] || { broken=$((broken+1)); echo "      $code  $ref"; }
done < <(grep -oE 'assets/[A-Za-z0-9_./-]+' "$LIVE" | sort -u)
[ "$broken" = 0 ] && ok "All $n assets load" || bad "Assets" "$broken of $n failed"

# 8. External links respond (LinkedIn and Luma block bots; any HTTP reply counts)
n=0; broken=0
while IFS= read -r url; do
  n=$((n+1)); code=$(curl -sS -o /dev/null -w '%{http_code}' -L --max-time 20 -A 'Mozilla/5.0 (qa-check)' "$url" 2>/dev/null)
  case "$url" in *linkedin.com*|*luma.com*) [ "$code" != "000" ] || { broken=$((broken+1)); echo "      $code  $url"; } ;;
    *) [ "$code" -ge 200 ] && [ "$code" -lt 400 ] || { broken=$((broken+1)); echo "      $code  $url"; } ;; esac
done < <(grep -oE 'href="https://[^"]+"' "$LIVE" | sed 's/href="//;s/"$//' | grep -v fonts.g | sort -u)
[ "$broken" = 0 ] && ok "All $n external links respond" || bad "External links" "$broken of $n failed"

echo "----------------------------------------------"
echo "$pass passed, $fail failed"
[ "$fail" = 0 ]
