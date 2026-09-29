#!/usr/bin/env python3
"""Inline site/index.html into a single self-contained page.

The site/ folder is the source of truth and hosts anywhere as-is. This build
produces dist/artifact.html, the same page with every asset embedded as a
data: URI, for publishing as a Claude Artifact (which serves one file, and
whose CSP blocks external images, fonts and stylesheets other than Google Fonts).
"""

import base64
import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).parent
SITE = ROOT / "site"
DIST = ROOT / "dist"

MIME = {
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".svg": "image/svg+xml",
    ".otf": "font/otf",
}


def data_uri(path: pathlib.Path) -> str:
    mime = MIME.get(path.suffix.lower())
    if mime is None:
        sys.exit(f"unknown asset type: {path}")
    return f"data:{mime};base64," + base64.b64encode(path.read_bytes()).decode("ascii")


def main() -> None:
    html = (SITE / "index.html").read_text(encoding="utf-8")

    # The Artifact is the complete document; only the asset references change.
    page = html

    # Replace every reference to a bundled asset with its data: URI. Longest
    # paths first so no path is a prefix of another that is replaced later.
    assets = sorted(
        (p for p in SITE.rglob("*") if p.is_file() and p.name != "index.html"),
        key=lambda p: len(str(p)),
        reverse=True,
    )
    embedded = 0
    for asset in assets:
        ref = asset.relative_to(SITE).as_posix()
        if ref not in page:
            print(f"  unused, skipped: {ref}")
            continue
        page = page.replace(ref, data_uri(asset))
        embedded += 1

    leftover = re.findall(r'(?:src|href)="(assets/[^"]+)"', page)
    if leftover:
        sys.exit(f"unresolved asset references: {sorted(set(leftover))}")

    DIST.mkdir(exist_ok=True)
    out = DIST / "artifact.html"
    out.write_text(page, encoding="utf-8")
    print(f"embedded {embedded} assets -> {out} ({out.stat().st_size / 1e6:.2f} MB)")


if __name__ == "__main__":
    main()
