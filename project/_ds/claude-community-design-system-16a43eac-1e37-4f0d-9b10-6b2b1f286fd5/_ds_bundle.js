/* @ds-bundle: {"format":4,"namespace":"ClaudeCommunityDesignSystem_16a43e","components":[{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"Sticker","sourcePath":"components/display/Sticker.jsx"},{"name":"Wordmark","sourcePath":"components/display/Wordmark.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/display/Badge.jsx":"0c1b41e2722e","components/display/Card.jsx":"f498a8967f07","components/display/Sticker.jsx":"fe85995562c4","components/display/Wordmark.jsx":"9c580454b77d","components/feedback/Dialog.jsx":"8f533297f35b","components/feedback/Toast.jsx":"fdb7fd4d5256","components/feedback/Tooltip.jsx":"014f872da102","components/forms/Button.jsx":"97e76889be47","components/forms/Checkbox.jsx":"cd5f7aeb091f","components/forms/Input.jsx":"1173e5463e0d","components/forms/Radio.jsx":"c889a0202624","components/forms/Select.jsx":"bfe9acda89c5","components/forms/Switch.jsx":"5f9cabc202b2","components/navigation/Tabs.jsx":"d1cee75d6679"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ClaudeCommunityDesignSystem_16a43e = window.ClaudeCommunityDesignSystem_16a43e || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/display/Badge.jsx
try { (() => {
const ensure = (id, css) => {
  if (!document.getElementById(id)) {
    const s = document.createElement("style");
    s.id = id;
    s.textContent = css;
    document.head.appendChild(s);
  }
};
const css = `
.ccbg{display:inline-flex;align-items:center;gap:6px;border-radius:var(--radius-pill);font-family:var(--font-sans-display);font-weight:600;font-size:11px;letter-spacing:var(--tracking-caps);text-transform:uppercase;padding:5px 12px}
.ccbg-coral{background:var(--accent);color:var(--ivory)}
.ccbg-ink{background:transparent;color:var(--ink);box-shadow:inset 0 0 0 1.5px var(--ink)}
.ccbg-subtle{background:var(--surface-alt);color:var(--ink-70)}
.ccbg-tint{background:var(--coral-tint);color:var(--accent-hover)}
`;
function Badge({
  tone = "coral",
  style,
  children
}) {
  ensure("cc-badge-css", css);
  return /*#__PURE__*/React.createElement("span", {
    className: `ccbg ccbg-${tone}`,
    style: style
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
const ensure = (id, css) => {
  if (!document.getElementById(id)) {
    const s = document.createElement("style");
    s.id = id;
    s.textContent = css;
    document.head.appendChild(s);
  }
};
const css = `
.ccc{border-radius:var(--radius-lg);padding:var(--space-5)}
.ccc-white{background:var(--surface-card);box-shadow:var(--shadow-card)}
.ccc-ivory{background:var(--surface-alt)}
.ccc-coral{background:var(--bg-brand);color:var(--text-on-brand)}
.ccc-kicker{font-family:var(--font-sans-display);font-weight:600;font-size:var(--text-label);letter-spacing:var(--tracking-caps);text-transform:uppercase;color:var(--ink-55);margin:0 0 8px}
.ccc-coral .ccc-kicker{color:var(--ivory-70)}
.ccc-title{font-family:var(--font-serif-display);font-weight:300;font-size:26px;line-height:1.15;margin:0 0 10px;color:var(--ink)}
.ccc-coral .ccc-title{color:var(--ink)}
.ccc-body{font:400 15px/1.55 var(--font-sans);color:var(--ink-70)}
.ccc-coral .ccc-body{color:var(--ivory)}
`;
function Card({
  tone = "white",
  kicker,
  title,
  style,
  children
}) {
  ensure("cc-card-css", css);
  return /*#__PURE__*/React.createElement("div", {
    className: `ccc ccc-${tone}`,
    style: style
  }, kicker && /*#__PURE__*/React.createElement("div", {
    className: "ccc-kicker"
  }, kicker), title && /*#__PURE__*/React.createElement("div", {
    className: "ccc-title"
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "ccc-body"
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/Sticker.jsx
try { (() => {
function Sticker({
  src,
  alt = "",
  rotate = -3,
  width = 180,
  pad = 10,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      background: "var(--white)",
      padding: pad,
      borderRadius: "var(--radius-sticker)",
      boxShadow: "var(--shadow-sticker)",
      transform: `rotate(${rotate}deg)`,
      lineHeight: 0,
      ...style
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width,
      display: "block",
      borderRadius: "calc(var(--radius-sticker) - 6px)"
    }
  }));
}
Object.assign(__ds_scope, { Sticker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Sticker.jsx", error: String((e && e.message) || e) }); }

// components/display/Wordmark.jsx
try { (() => {
function Wordmark({
  tone = "ink",
  size = 11,
  style
}) {
  const colors = {
    ink: "var(--ink)",
    ivory: "var(--ivory)",
    muted: "var(--ink-55)"
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans-display)",
      fontWeight: 600,
      fontSize: size,
      letterSpacing: "var(--tracking-caps)",
      textTransform: "uppercase",
      color: colors[tone] || tone,
      ...style
    }
  }, "Claude Community");
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
const ensure = (id, css) => {
  if (!document.getElementById(id)) {
    const s = document.createElement("style");
    s.id = id;
    s.textContent = css;
    document.head.appendChild(s);
  }
};
const css = `
.ccd-ov{position:fixed;inset:0;background:rgba(20,20,19,.45);display:flex;align-items:center;justify-content:center;z-index:100}
.ccd{background:var(--surface-card);border-radius:var(--radius-lg);box-shadow:var(--shadow-pop);padding:var(--space-6);max-width:460px;width:calc(100% - 48px)}
.ccd-kicker{font-family:var(--font-sans-display);font-weight:600;font-size:var(--text-label);letter-spacing:var(--tracking-caps);text-transform:uppercase;color:var(--ink-55);margin:0 0 8px}
.ccd-title{font-family:var(--font-serif-display);font-weight:300;font-size:30px;line-height:1.1;margin:0 0 12px;color:var(--ink)}
.ccd-body{font:400 15px/1.55 var(--font-sans);color:var(--ink-70)}
.ccd-actions{display:flex;gap:10px;justify-content:flex-end;margin-top:var(--space-5)}
`;
function Dialog({
  open,
  kicker,
  title,
  actions,
  onClose,
  style,
  children
}) {
  ensure("cc-dialog-css", css);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "ccd-ov",
    onClick: e => {
      if (e.target === e.currentTarget && onClose) onClose();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ccd",
    role: "dialog",
    "aria-modal": "true",
    style: style
  }, kicker && /*#__PURE__*/React.createElement("div", {
    className: "ccd-kicker"
  }, kicker), title && /*#__PURE__*/React.createElement("div", {
    className: "ccd-title"
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "ccd-body"
  }, children), actions && /*#__PURE__*/React.createElement("div", {
    className: "ccd-actions"
  }, actions)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const ensure = (id, css) => {
  if (!document.getElementById(id)) {
    const s = document.createElement("style");
    s.id = id;
    s.textContent = css;
    document.head.appendChild(s);
  }
};
const css = `
.ccto{display:inline-flex;align-items:center;gap:12px;background:var(--ink);color:var(--ivory);border-radius:var(--radius-md);padding:12px 18px;font:400 14px var(--font-sans);box-shadow:var(--shadow-pop)}
.ccto b{font-family:var(--font-sans-display);font-weight:600}
.ccto-coral{background:var(--accent)}
.ccto-x{appearance:none;border:none;background:none;color:inherit;opacity:.6;cursor:pointer;font-size:15px;padding:0;line-height:1}
.ccto-x:hover{opacity:1}
`;
function Toast({
  tone = "ink",
  onClose,
  style,
  children
}) {
  ensure("cc-toast-css", css);
  return /*#__PURE__*/React.createElement("div", {
    className: `ccto${tone === "coral" ? " ccto-coral" : ""}`,
    style: style,
    role: "status"
  }, /*#__PURE__*/React.createElement("span", null, children), onClose && /*#__PURE__*/React.createElement("button", {
    className: "ccto-x",
    onClick: onClose,
    "aria-label": "Dismiss"
  }, "\u2715"));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
const ensure = (id, css) => {
  if (!document.getElementById(id)) {
    const s = document.createElement("style");
    s.id = id;
    s.textContent = css;
    document.head.appendChild(s);
  }
};
const css = `
.cctp{position:relative;display:inline-flex}
.cctp-tip{position:absolute;bottom:calc(100% + 8px);left:50%;transform:translateX(-50%) translateY(2px);background:var(--ink);color:var(--ivory);font:400 12.5px var(--font-sans);padding:6px 10px;border-radius:var(--radius-sm);white-space:nowrap;opacity:0;pointer-events:none;transition:opacity var(--speed-quick),transform var(--speed-quick) var(--ease-out)}
.cctp:hover .cctp-tip,.cctp:focus-within .cctp-tip{opacity:1;transform:translateX(-50%) translateY(0)}
`;
function Tooltip({
  label,
  style,
  children
}) {
  ensure("cc-tooltip-css", css);
  return /*#__PURE__*/React.createElement("span", {
    className: "cctp",
    style: style
  }, children, /*#__PURE__*/React.createElement("span", {
    className: "cctp-tip",
    role: "tooltip"
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
const ensure = (id, css) => {
  if (!document.getElementById(id)) {
    const s = document.createElement("style");
    s.id = id;
    s.textContent = css;
    document.head.appendChild(s);
  }
};
const css = `
.ccb{font-family:var(--font-sans-display);font-weight:600;border:none;border-radius:var(--radius-pill);cursor:pointer;display:inline-flex;align-items:center;justify-content:center;gap:8px;letter-spacing:.01em;transition:background var(--speed-quick) var(--ease-out),color var(--speed-quick),transform var(--speed-quick),opacity var(--speed-quick)}
.ccb:active{transform:translateY(1px)}
.ccb:focus-visible{outline:none;box-shadow:var(--focus-ring)}
.ccb[disabled]{opacity:.4;cursor:default;pointer-events:none}
.ccb-sm{height:34px;padding:0 16px;font-size:13px}
.ccb-md{height:42px;padding:0 22px;font-size:15px}
.ccb-lg{height:52px;padding:0 28px;font-size:17px}
.ccb-primary{background:var(--accent);color:var(--ivory)}
.ccb-primary:hover{background:var(--accent-hover)}
.ccb-outline{background:transparent;color:var(--ink);box-shadow:inset 0 0 0 1.5px var(--ink)}
.ccb-outline:hover{background:rgba(20,20,19,.06)}
.ccb-ghost{background:transparent;color:var(--accent)}
.ccb-ghost:hover{background:rgba(217,119,87,.12)}
.ccb-inverse{background:var(--ivory);color:var(--ink)}
.ccb-inverse:hover{background:var(--white)}
`;
function Button({
  variant = "primary",
  size = "md",
  disabled,
  onClick,
  type = "button",
  style,
  children
}) {
  ensure("cc-btn-css", css);
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    disabled: disabled,
    onClick: onClick,
    style: style,
    className: `ccb ccb-${size} ccb-${variant}`
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
const ensure = (id, css) => {
  if (!document.getElementById(id)) {
    const s = document.createElement("style");
    s.id = id;
    s.textContent = css;
    document.head.appendChild(s);
  }
};
const css = `
.cck{display:inline-flex;align-items:center;gap:10px;cursor:pointer;font:400 15px var(--font-sans);color:var(--ink);user-select:none}
.cck input{position:absolute;opacity:0;width:0;height:0}
.cck-box{width:20px;height:20px;border-radius:6px;border:1.5px solid rgba(20,20,19,.45);background:var(--white);display:inline-flex;align-items:center;justify-content:center;transition:background var(--speed-quick),border-color var(--speed-quick);flex:none}
.cck-box::after{content:"";width:10px;height:6px;border-left:2px solid var(--ivory);border-bottom:2px solid var(--ivory);transform:rotate(-45deg) translate(1px,-1px);opacity:0;transition:opacity var(--speed-quick)}
.cck input:checked+.cck-box{background:var(--accent);border-color:var(--accent)}
.cck input:checked+.cck-box::after{opacity:1}
.cck input:focus-visible+.cck-box{box-shadow:var(--focus-ring)}
.cck-dis{opacity:.4;cursor:default;pointer-events:none}
`;
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled,
  style
}) {
  ensure("cc-check-css", css);
  return /*#__PURE__*/React.createElement("label", {
    className: `cck${disabled ? " cck-dis" : ""}`,
    style: style
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: checked,
    defaultChecked: defaultChecked,
    onChange: onChange,
    disabled: disabled
  }), /*#__PURE__*/React.createElement("span", {
    className: "cck-box"
  }), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const ensure = (id, css) => {
  if (!document.getElementById(id)) {
    const s = document.createElement("style");
    s.id = id;
    s.textContent = css;
    document.head.appendChild(s);
  }
};
const css = `
.cci{display:flex;flex-direction:column;gap:6px;font-family:var(--font-sans)}
.cci-label{font-size:13px;font-weight:500;color:var(--ink)}
.cci-field{height:42px;padding:0 14px;border-radius:var(--radius-md);border:1px solid var(--ink-12);background:var(--white);font:400 15px var(--font-sans);color:var(--ink);transition:border-color var(--speed-quick),box-shadow var(--speed-quick)}
.cci-field::placeholder{color:var(--ink-55)}
.cci-field:focus{outline:none;border-color:var(--accent);box-shadow:0 0 0 3px rgba(217,119,87,.22)}
.cci-invalid .cci-field{border-color:var(--accent-hover);box-shadow:0 0 0 3px rgba(197,99,63,.18)}
.cci-hint{font-size:12px;color:var(--ink-55)}
.cci-invalid .cci-hint{color:var(--accent-hover)}
`;
function Input({
  label,
  hint,
  invalid,
  style,
  ...rest
}) {
  ensure("cc-input-css", css);
  return /*#__PURE__*/React.createElement("label", {
    className: `cci${invalid ? " cci-invalid" : ""}`,
    style: style
  }, label && /*#__PURE__*/React.createElement("span", {
    className: "cci-label"
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    className: "cci-field"
  }, rest)), hint && /*#__PURE__*/React.createElement("span", {
    className: "cci-hint"
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
const ensure = (id, css) => {
  if (!document.getElementById(id)) {
    const s = document.createElement("style");
    s.id = id;
    s.textContent = css;
    document.head.appendChild(s);
  }
};
const css = `
.ccr{display:inline-flex;align-items:center;gap:10px;cursor:pointer;font:400 15px var(--font-sans);color:var(--ink);user-select:none}
.ccr input{position:absolute;opacity:0;width:0;height:0}
.ccr-dot{width:20px;height:20px;border-radius:50%;border:1.5px solid rgba(20,20,19,.45);background:var(--white);display:inline-flex;align-items:center;justify-content:center;transition:border-color var(--speed-quick);flex:none}
.ccr-dot::after{content:"";width:10px;height:10px;border-radius:50%;background:var(--accent);transform:scale(0);transition:transform var(--speed-quick) var(--ease-out)}
.ccr input:checked+.ccr-dot{border-color:var(--accent)}
.ccr input:checked+.ccr-dot::after{transform:scale(1)}
.ccr input:focus-visible+.ccr-dot{box-shadow:var(--focus-ring)}
`;
function Radio({
  label,
  name,
  value,
  checked,
  defaultChecked,
  onChange,
  style
}) {
  ensure("cc-radio-css", css);
  return /*#__PURE__*/React.createElement("label", {
    className: "ccr",
    style: style
  }, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    defaultChecked: defaultChecked,
    onChange: onChange
  }), /*#__PURE__*/React.createElement("span", {
    className: "ccr-dot"
  }), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const ensure = (id, css) => {
  if (!document.getElementById(id)) {
    const s = document.createElement("style");
    s.id = id;
    s.textContent = css;
    document.head.appendChild(s);
  }
};
const css = `
.ccs{display:flex;flex-direction:column;gap:6px;font-family:var(--font-sans)}
.ccs-label{font-size:13px;font-weight:500;color:var(--ink)}
.ccs-wrap{position:relative;display:flex}
.ccs-field{appearance:none;-webkit-appearance:none;width:100%;height:42px;padding:0 36px 0 14px;border-radius:var(--radius-md);border:1px solid var(--ink-12);background:var(--white);font:400 15px var(--font-sans);color:var(--ink);cursor:pointer;transition:border-color var(--speed-quick),box-shadow var(--speed-quick)}
.ccs-field:focus{outline:none;border-color:var(--accent);box-shadow:0 0 0 3px rgba(217,119,87,.22)}
.ccs-chev{position:absolute;right:14px;top:50%;transform:translateY(-52%);pointer-events:none;color:var(--ink-55);font-size:13px}
`;
function Select({
  label,
  options = [],
  style,
  ...rest
}) {
  ensure("cc-select-css", css);
  return /*#__PURE__*/React.createElement("label", {
    className: "ccs",
    style: style
  }, label && /*#__PURE__*/React.createElement("span", {
    className: "ccs-label"
  }, label), /*#__PURE__*/React.createElement("span", {
    className: "ccs-wrap"
  }, /*#__PURE__*/React.createElement("select", _extends({
    className: "ccs-field"
  }, rest), options.map(o => typeof o === "string" ? /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o) : /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement("span", {
    className: "ccs-chev"
  }, "\u25BE")));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
const ensure = (id, css) => {
  if (!document.getElementById(id)) {
    const s = document.createElement("style");
    s.id = id;
    s.textContent = css;
    document.head.appendChild(s);
  }
};
const css = `
.ccw{display:inline-flex;align-items:center;gap:10px;cursor:pointer;font:400 15px var(--font-sans);color:var(--ink);user-select:none}
.ccw input{position:absolute;opacity:0;width:0;height:0}
.ccw-track{width:44px;height:25px;border-radius:var(--radius-pill);background:var(--ivory-2);border:1px solid var(--ink-12);position:relative;transition:background var(--speed-quick),border-color var(--speed-quick);flex:none}
.ccw-track::after{content:"";position:absolute;top:2px;left:2px;width:19px;height:19px;border-radius:50%;background:var(--white);box-shadow:0 1px 3px rgba(20,20,19,.25);transition:left var(--speed-quick) var(--ease-out)}
.ccw input:checked+.ccw-track{background:var(--accent);border-color:var(--accent)}
.ccw input:checked+.ccw-track::after{left:21px}
.ccw input:focus-visible+.ccw-track{box-shadow:var(--focus-ring)}
`;
function Switch({
  label,
  checked,
  defaultChecked,
  onChange,
  style
}) {
  ensure("cc-switch-css", css);
  return /*#__PURE__*/React.createElement("label", {
    className: "ccw",
    style: style
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    role: "switch",
    checked: checked,
    defaultChecked: defaultChecked,
    onChange: onChange
  }), /*#__PURE__*/React.createElement("span", {
    className: "ccw-track"
  }), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
const ensure = (id, css) => {
  if (!document.getElementById(id)) {
    const s = document.createElement("style");
    s.id = id;
    s.textContent = css;
    document.head.appendChild(s);
  }
};
const css = `
.cct{display:flex;gap:4px;border-bottom:1px solid var(--ink-12)}
.cct-tab{appearance:none;background:none;border:none;cursor:pointer;font-family:var(--font-sans-display);font-weight:600;font-size:14px;color:var(--ink-55);padding:10px 14px 12px;position:relative;transition:color var(--speed-quick)}
.cct-tab:hover{color:var(--ink)}
.cct-tab:focus-visible{outline:none;box-shadow:var(--focus-ring);border-radius:var(--radius-sm)}
.cct-on{color:var(--ink)}
.cct-on::after{content:"";position:absolute;left:10px;right:10px;bottom:-1px;height:2.5px;background:var(--accent);border-radius:2px}
`;
function Tabs({
  items = [],
  active,
  onChange,
  style
}) {
  ensure("cc-tabs-css", css);
  const [inner, setInner] = React.useState(items[0] && (items[0].id ?? items[0]));
  const cur = active ?? inner;
  return /*#__PURE__*/React.createElement("div", {
    className: "cct",
    style: style,
    role: "tablist"
  }, items.map(it => {
    const id = it.id ?? it,
      label = it.label ?? it;
    return /*#__PURE__*/React.createElement("button", {
      key: id,
      role: "tab",
      "aria-selected": cur === id,
      className: `cct-tab${cur === id ? " cct-on" : ""}`,
      onClick: () => {
        setInner(id);
        onChange && onChange(id);
      }
    }, label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Sticker = __ds_scope.Sticker;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
