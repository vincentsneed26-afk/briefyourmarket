/* @ds-bundle: {"format":4,"namespace":"BriefYourMarketDesignSystem_3fccbf","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"IconButton","sourcePath":"components/actions/IconButton.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"DataTable","sourcePath":"components/display/DataTable.jsx"},{"name":"StatTile","sourcePath":"components/display/StatTile.jsx"},{"name":"Tag","sourcePath":"components/display/Tag.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Spinner","sourcePath":"components/feedback/Spinner.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"RadioGroup","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"a7543a28ad70","components/actions/IconButton.jsx":"efb83b9c04e2","components/display/Badge.jsx":"46e19f29d084","components/display/Card.jsx":"b4295f69334c","components/display/DataTable.jsx":"bcfe5c704ccf","components/display/StatTile.jsx":"96f0b30a4b11","components/display/Tag.jsx":"6d4d5b1d4739","components/feedback/Alert.jsx":"d4eeef3b4cb1","components/feedback/Spinner.jsx":"514a4be6bd28","components/forms/Checkbox.jsx":"9474b47aa4c0","components/forms/Field.jsx":"967379423b10","components/forms/Input.jsx":"12b0f9f00d66","components/forms/Radio.jsx":"ba23b8d9fe53","components/forms/Select.jsx":"dc74e73a75bc","components/forms/Switch.jsx":"79ac84f70270","components/forms/Textarea.jsx":"83b438302bc7","components/navigation/NavBar.jsx":"8b94ab6345f3","components/navigation/Tabs.jsx":"eaf1ed0ec421","ui_kits/marketing-site/EmailMarketingScreen.jsx":"a12658560dfa","ui_kits/marketing-site/HomeScreen.jsx":"a2792d6f94bc","ui_kits/marketing-site/QuoteScreen.jsx":"4f62c1622f8a","ui_kits/marketing-site/SiteChrome.jsx":"179a69277b41"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.BriefYourMarketDesignSystem_3fccbf = window.BriefYourMarketDesignSystem_3fccbf || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cx = (...a) => a.filter(Boolean).join(' ');
function Button({
  variant = 'primary',
  size = 'md',
  block = false,
  loading = false,
  disabled = false,
  iconLeft,
  iconRight,
  as,
  href,
  className,
  children,
  ...rest
}) {
  const Tag = as || (href ? 'a' : 'button');
  const isDisabled = disabled || loading;
  const cls = cx('bym-btn', 'bym-btn--' + variant, size !== 'md' && 'bym-btn--' + size, block && 'bym-btn--block', loading && 'bym-btn--loading', className);
  const extra = Tag === 'button' ? {
    type: rest.type || 'button',
    disabled: isDisabled
  } : {
    href: isDisabled ? undefined : href,
    'aria-disabled': isDisabled || undefined,
    role: 'button'
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls
  }, extra, rest), loading && /*#__PURE__*/React.createElement("span", {
    className: "bym-btn__spinner"
  }, /*#__PURE__*/React.createElement(Spinner, {
    size: size === 'sm' ? 12 : 16,
    onBrand: variant === 'primary' || variant === 'secondary' || variant === 'danger'
  })), iconLeft && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'inline-flex'
    }
  }, iconLeft), /*#__PURE__*/React.createElement("span", {
    className: "bym-btn__label"
  }, children), iconRight && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'inline-flex'
    }
  }, iconRight));
}
function Spinner({
  size = 16,
  onBrand
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: cx('bym-spinner', onBrand && 'bym-spinner--on-brand'),
    style: {
      width: size,
      height: size
    },
    "aria-hidden": "true"
  });
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cx = (...a) => a.filter(Boolean).join(' ');
function IconButton({
  label,
  variant = 'plain',
  size = 'md',
  disabled = false,
  className,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    className: cx('bym-iconbtn', variant !== 'plain' && 'bym-iconbtn--' + variant, size !== 'md' && 'bym-iconbtn--' + size, className)
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'inline-flex'
    }
  }, children));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cx = (...a) => a.filter(Boolean).join(' ');
function Badge({
  tone = 'neutral',
  dot = false,
  className,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cx('bym-badge', 'bym-badge--' + tone, className)
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    className: "bym-badge__dot",
    "aria-hidden": "true"
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cx = (...a) => a.filter(Boolean).join(' ');
function Card({
  variant = 'default',
  interactive = false,
  title,
  eyebrow,
  media,
  footer,
  as,
  className,
  children,
  ...rest
}) {
  const Tag = as || (interactive ? 'button' : 'div');
  return /*#__PURE__*/React.createElement(Tag, _extends({
    type: Tag === 'button' ? 'button' : undefined,
    className: cx('bym-card', variant !== 'default' && 'bym-card--' + variant, interactive && 'bym-card--interactive', className)
  }, rest), media && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 'var(--space-4)',
      borderRadius: 'var(--radius-media)',
      overflow: 'hidden'
    }
  }, media), eyebrow && /*#__PURE__*/React.createElement("p", {
    className: "bym-eyebrow"
  }, eyebrow), title && /*#__PURE__*/React.createElement("h3", {
    className: "bym-card__title",
    style: {
      marginBottom: children ? 'var(--space-2)' : 0
    }
  }, title), children, footer && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-4)',
      paddingTop: 'var(--space-4)',
      borderTop: '1px solid var(--border-muted)'
    }
  }, footer));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/DataTable.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cx = (...a) => a.filter(Boolean).join(' ');
function DataTable({
  columns = [],
  rows = [],
  caption,
  emptyMessage = 'No results yet.',
  numeric = false,
  className,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "bym-table__wrap"
  }, /*#__PURE__*/React.createElement("table", _extends({
    className: cx('bym-table', numeric && 'bym-table--numeric', className)
  }, rest), caption && /*#__PURE__*/React.createElement("caption", {
    className: "bym-visually-hidden"
  }, caption), /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map(c => /*#__PURE__*/React.createElement("th", {
    key: c.key || c,
    scope: "col"
  }, c.label || c)))), /*#__PURE__*/React.createElement("tbody", null, rows.length === 0 ? /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "bym-table__empty",
    colSpan: columns.length || 1
  }, emptyMessage)) : rows.map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: r.id || i
  }, columns.map((c, j) => /*#__PURE__*/React.createElement("td", {
    key: j
  }, r[c.key || c])))))));
}
Object.assign(__ds_scope, { DataTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/DataTable.jsx", error: String((e && e.message) || e) }); }

// components/display/StatTile.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cx = (...a) => a.filter(Boolean).join(' ');
function StatTile({
  value,
  label,
  delta,
  direction = 'up',
  inverse = false,
  className,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cx('bym-stat', inverse && 'bym-stat--inverse', className)
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "bym-stat__value"
  }, value), label && /*#__PURE__*/React.createElement("span", {
    className: "bym-stat__label"
  }, label), delta && /*#__PURE__*/React.createElement("span", {
    className: cx('bym-stat__delta', 'bym-stat__delta--' + direction)
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, direction === 'up' ? '\u2191' : '\u2193'), delta));
}
Object.assign(__ds_scope, { StatTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/StatTile.jsx", error: String((e && e.message) || e) }); }

// components/display/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cx = (...a) => a.filter(Boolean).join(' ');
function Tag({
  selected = false,
  onRemove,
  onClick,
  className,
  children,
  ...rest
}) {
  const Tag2 = onClick ? 'button' : 'span';
  return /*#__PURE__*/React.createElement(Tag2, _extends({
    type: onClick ? 'button' : undefined,
    onClick: onClick,
    className: cx('bym-tag', selected && 'bym-tag--selected', className),
    "aria-pressed": onClick ? selected : undefined
  }, rest), children, onRemove && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "bym-tag__remove",
    "aria-label": 'Remove ' + (typeof children === 'string' ? children : 'item'),
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cx = (...a) => a.filter(Boolean).join(' ');
const GLYPH = {
  info: 'i',
  success: '\u2713',
  warning: '!',
  danger: '!'
};
function Alert({
  tone = 'info',
  title,
  children,
  icon,
  onDismiss,
  className,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: tone === 'danger' ? 'alert' : 'status',
    className: cx('bym-alert', 'bym-alert--' + tone, className)
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "bym-alert__icon",
    "aria-hidden": "true"
  }, icon || GLYPH[tone]), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 auto'
    }
  }, title && /*#__PURE__*/React.createElement("p", {
    className: "bym-alert__title"
  }, title), children && /*#__PURE__*/React.createElement("p", {
    className: "bym-alert__body"
  }, children)), onDismiss && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "bym-iconbtn bym-iconbtn--sm",
    "aria-label": "Dismiss",
    onClick: onDismiss
  }, "\xD7"));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Spinner.jsx
try { (() => {
const cx = (...a) => a.filter(Boolean).join(' ');
function Spinner({
  size = 20,
  onBrand = false,
  label = 'Loading',
  className,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    role: "status",
    "aria-label": label,
    className: cx('bym-spinner', onBrand && 'bym-spinner--on-brand', className),
    style: {
      width: size,
      height: size,
      ...style
    }
  });
}
Object.assign(__ds_scope, { Spinner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Spinner.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cx = (...a) => a.filter(Boolean).join(' ');
function Checkbox({
  label,
  checked,
  defaultChecked,
  disabled = false,
  invalid = false,
  onChange,
  className,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: cx('bym-choice', disabled && 'bym-choice--disabled', invalid && 'bym-choice--error', className)
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: checked,
    defaultChecked: defaultChecked,
    disabled: disabled,
    onChange: onChange,
    "aria-invalid": invalid || undefined
  }, rest)), /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cx = (...a) => a.filter(Boolean).join(' ');
let seq = 0;
function Field({
  label,
  htmlFor,
  required = false,
  hint,
  error,
  children,
  className,
  ...rest
}) {
  const auto = React.useMemo(() => 'bym-f' + ++seq, []);
  const id = htmlFor || auto;
  const hintId = hint ? id + '-hint' : undefined;
  const errId = error ? id + '-err' : undefined;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cx('bym-field', className)
  }, rest), label && /*#__PURE__*/React.createElement("label", {
    className: "bym-field__label",
    htmlFor: id
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "bym-field__req",
    "aria-hidden": "true"
  }, "*")), typeof children === 'function' ? children({
    id,
    'aria-describedby': [hintId, errId].filter(Boolean).join(' ') || undefined,
    'aria-invalid': error ? true : undefined,
    required
  }) : children, hint && !error && /*#__PURE__*/React.createElement("span", {
    className: "bym-field__hint",
    id: hintId
  }, hint), error && /*#__PURE__*/React.createElement("span", {
    className: "bym-field__error",
    id: errId
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "!"), error));
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cx = (...a) => a.filter(Boolean).join(' ');
function Input({
  type = 'text',
  size = 'md',
  invalid = false,
  className,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    className: cx('bym-input', className),
    "aria-invalid": invalid || rest['aria-invalid'] || undefined,
    style: size === 'lg' ? {
      minHeight: 'var(--control-height-lg)'
    } : size === 'sm' ? {
      minHeight: 'var(--control-height-sm)'
    } : undefined
  }, rest));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cx = (...a) => a.filter(Boolean).join(' ');
function Radio({
  label,
  name,
  value,
  checked,
  defaultChecked,
  disabled = false,
  onChange,
  className,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: cx('bym-choice', disabled && 'bym-choice--disabled', className)
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    defaultChecked: defaultChecked,
    disabled: disabled,
    onChange: onChange
  }, rest)), /*#__PURE__*/React.createElement("span", null, label));
}
function RadioGroup({
  legend,
  children,
  inline = false,
  className
}) {
  return /*#__PURE__*/React.createElement("fieldset", {
    className: className,
    style: {
      border: 0,
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-1)'
    }
  }, legend && /*#__PURE__*/React.createElement("legend", {
    className: "bym-field__label",
    style: {
      padding: 0,
      marginBottom: 'var(--space-1)'
    }
  }, legend), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: inline ? 'row' : 'column',
      gap: inline ? 'var(--space-6)' : '0',
      flexWrap: 'wrap'
    }
  }, children));
}
Object.assign(__ds_scope, { Radio, RadioGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cx = (...a) => a.filter(Boolean).join(' ');
function Select({
  options = [],
  placeholder,
  invalid = false,
  className,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("select", _extends({
    className: cx('bym-input', 'bym-select', className),
    "aria-invalid": invalid || rest['aria-invalid'] || undefined
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder), children || options.map(o => typeof o === 'string' ? /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o) : /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value,
    disabled: o.disabled
  }, o.label)));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cx = (...a) => a.filter(Boolean).join(' ');
function Switch({
  label,
  checked = false,
  disabled = false,
  onChange,
  className,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: cx('bym-switch', className),
    "data-checked": checked,
    "data-disabled": disabled
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch",
    checked: checked,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.checked, e),
    className: "bym-visually-hidden"
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "bym-switch__track",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bym-switch__thumb"
  })), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cx = (...a) => a.filter(Boolean).join(' ');
function Textarea({
  rows = 4,
  invalid = false,
  className,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows,
    className: cx('bym-input', 'bym-input--textarea', className),
    "aria-invalid": invalid || rest['aria-invalid'] || undefined
  }, rest));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cx = (...a) => a.filter(Boolean).join(' ');
function NavBar({
  brand,
  items = [],
  current,
  actions,
  className,
  ...rest
}) {
  const [open, setOpen] = React.useState(null);
  return /*#__PURE__*/React.createElement("nav", _extends({
    className: cx('bym-nav', className),
    "aria-label": "Primary"
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "bym-nav__brand"
  }, brand), /*#__PURE__*/React.createElement("ul", {
    className: "bym-nav__links"
  }, items.map(it => /*#__PURE__*/React.createElement("li", {
    key: it.label,
    style: {
      position: 'relative'
    },
    onMouseEnter: () => it.children && setOpen(it.label),
    onMouseLeave: () => it.children && setOpen(null)
  }, it.children ? /*#__PURE__*/React.createElement("button", {
    className: "bym-nav__link",
    "aria-expanded": open === it.label,
    "aria-haspopup": "true",
    onClick: () => setOpen(open === it.label ? null : it.label)
  }, it.label, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontSize: 9
    }
  }, "\u25BC")) : /*#__PURE__*/React.createElement("a", {
    className: "bym-nav__link",
    href: it.href || '#',
    "aria-current": current === it.label ? 'page' : undefined
  }, it.label), it.children && open === it.label && /*#__PURE__*/React.createElement("ul", {
    className: "bym-nav__menu"
  }, it.children.map(c => /*#__PURE__*/React.createElement("li", {
    key: c.label
  }, /*#__PURE__*/React.createElement("a", {
    href: c.href || '#'
  }, c.label))))))), /*#__PURE__*/React.createElement("div", {
    className: "bym-nav__actions"
  }, actions));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cx = (...a) => a.filter(Boolean).join(' ');
function Tabs({
  tabs = [],
  value,
  onChange,
  className,
  ...rest
}) {
  const refs = React.useRef([]);
  const onKey = (e, i) => {
    const d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
    if (!d) return;
    e.preventDefault();
    const next = (i + d + tabs.length) % tabs.length;
    onChange && onChange(tabs[next].value || tabs[next]);
    const el = refs.current[next];
    el && el.focus();
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cx('bym-tabs', className),
    role: "tablist"
  }, rest), tabs.map((t, i) => {
    const v = t.value || t,
      label = t.label || t,
      sel = v === value;
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      ref: el => refs.current[i] = el,
      role: "tab",
      className: "bym-tab",
      "aria-selected": sel,
      tabIndex: sel ? 0 : -1,
      disabled: t.disabled,
      onKeyDown: e => onKey(e, i),
      onClick: () => onChange && onChange(v)
    }, label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/EmailMarketingScreen.jsx
try { (() => {
const {
  Button,
  Card,
  Badge,
  Tabs,
  Alert
} = window.BriefYourMarketDesignSystem_3fccbf;
const FEATURE_BLOCKS = [{
  eyebrow: 'Automation',
  title: 'Automated and personalised email campaigns',
  body: 'Send targeted, personalised email campaigns to your database, or use automated email journeys to stay relevant, nurture your contacts, and generate more valuation opportunities.',
  cta: 'Start Automating My Campaigns',
  image: 'overview',
  points: [['Automate your emails', 'Set up newsletters, follow-ups and prospecting campaigns easily.'], ['Personalise every campaign', 'Send tailored and localised messages to each audience segment.'], ['Time your promotions', 'Schedule content around key pipeline moments.'], ['Turn your CRM into a lead engine', 'Segment contacts and trigger emails through our powerful CRM integrations.']]
}, {
  eyebrow: 'AI builder',
  title: 'AI-driven and seamless email creation in minutes',
  body: 'Build high-performing campaigns in minutes with a streamlined, AI-powered experience designed for estate agents.',
  cta: 'Try the new AI Builder',
  image: 'iphone',
  points: [['AI driven campaign building', 'Generate and structure campaigns faster with built-in AI tools.'], ['Mobile optimised design', 'Ensure your emails look great on mobile.'], ['Improved multi branding', 'Manage campaigns across multiple brands and offices with ease.'], ['Postcode specific content', 'Deliver emails that feel local, relevant, and drive action.']]
}];
const BENEFITS = ['Unlimited sends.', 'Mobile responsive.', 'Drag-and-drop editors.', 'Subscription preferences and dynamic filters.', 'RSS Feeds.', 'Include contact snippets, including dates and client details.', 'Test sending functionality with A/B testing.', 'Automation and scheduling.', 'Supports video and PDF downloads.'];
function EmailMarketingScreen({
  onNavigate
}) {
  const [tab, setTab] = React.useState('Automation');
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.1fr .9fr',
      gap: 'var(--space-12)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    tone: "brand"
  }, "Email Marketing"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--font-size-5xl)',
      fontWeight: 700,
      letterSpacing: 'var(--letter-spacing-tight)',
      lineHeight: 1.12,
      marginTop: 'var(--space-4)'
    }
  }, "Email Campaigns That Win More Instructions \u2014 Built for Estate Agents."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--font-size-lg)',
      color: 'var(--text-secondary)',
      maxWidth: '54ch'
    }
  }, "BriefYourMarket combines AI-powered campaign creation, personalised email marketing, automation and localised content to generate more valuations, strengthen customer relationships and win more instructions."), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => onNavigate('quote')
  }, "Book a Demo")), /*#__PURE__*/React.createElement(Card, {
    variant: "floating",
    style: {
      padding: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--font-size-xl)'
    }
  }, "Get My Free Quote"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--font-size-xs)',
      color: 'var(--text-tertiary)'
    }
  }, "\u201C*\u201D indicates required fields"), /*#__PURE__*/React.createElement(Button, {
    block: true,
    onClick: () => onNavigate('quote')
  }, "Start my quote"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--font-size-xs)',
      color: 'var(--text-tertiary)',
      margin: 'var(--space-25) 0 0'
    }
  }, "No spam. Unsubscribe anytime.")))), FEATURE_BLOCKS.map((b, i) => /*#__PURE__*/React.createElement(Section, {
    key: b.title,
    tone: i % 2 === 0 ? 'subtle' : 'base'
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: i % 2 === 0 ? '.9fr 1.1fr' : '1.1fr .9fr',
      gap: 'var(--space-12)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: ASSETS[b.image],
    alt: "",
    style: {
      width: '100%',
      maxWidth: 440,
      justifySelf: 'center',
      order: i % 2 === 0 ? 0 : 1
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "bym-eyebrow"
  }, b.eyebrow), /*#__PURE__*/React.createElement("h2", null, b.title), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-secondary)'
    }
  }, b.body), /*#__PURE__*/React.createElement("dl", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-4)',
      margin: '0 0 var(--space-6)'
    }
  }, b.points.map(([t, d]) => /*#__PURE__*/React.createElement("div", {
    key: t
  }, /*#__PURE__*/React.createElement("dt", {
    style: {
      fontWeight: 600,
      fontSize: 'var(--font-size-base)'
    }
  }, t), /*#__PURE__*/React.createElement("dd", {
    style: {
      margin: 0,
      fontSize: 'var(--font-size-sm)',
      color: 'var(--text-secondary)'
    }
  }, d)))), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => onNavigate('quote')
  }, b.cta))))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-12)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Promote your products and services with ease"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-secondary)'
    }
  }, "With unlimited sends, BriefYourMarket.com provides one of the most cost-effective email marketing solutions available. Combined with our in-depth reporting suite, we make it simple to track, analyse and follow-up on every campaign."), /*#__PURE__*/React.createElement(Tabs, {
    tabs: ['Automation', 'Reporting', 'Deliverability'],
    value: tab,
    onChange: setTab
  }), /*#__PURE__*/React.createElement(Alert, {
    tone: "info",
    title: tab + ' is included on every plan.',
    style: {
      marginTop: 'var(--space-4)'
    }
  }, "Marketing and transactional sending are standard, with dynamic filtering and preferencing built in.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Key benefits"), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
      display: 'grid',
      gap: 'var(--space-2)'
    }
  }, BENEFITS.map(b => /*#__PURE__*/React.createElement("li", {
    key: b,
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      fontSize: 'var(--font-size-base)',
      color: 'var(--text-secondary)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      color: 'var(--status-success-fg)',
      fontWeight: 700
    }
  }, "\u2713"), b)))))));
}
Object.assign(window, {
  EmailMarketingScreen,
  FEATURE_BLOCKS,
  BENEFITS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/EmailMarketingScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/HomeScreen.jsx
try { (() => {
const {
  Button,
  Card,
  StatTile,
  Badge
} = window.BriefYourMarketDesignSystem_3fccbf;
const TESTIMONIALS = [{
  logo: 'reeds',
  name: 'Reeds Rains Hebburn',
  quote: 'Since introducing BriefYourMarket, we\u2019ve seen really strong engagement from our audience. Our campaigns are achieving an average open rate of 39% and a 2% click through rate, almost doubling the typical industry averages of around 20% opens and 1% clicks.'
}, {
  logo: 'balgore',
  name: 'Balgores',
  quote: 'In the last 6 months Nurtur have helped influence 15 instructions through the emails created and sent through BriefYourMarket along with over 31,000 website leads.'
}, {
  logo: 'jordon',
  name: 'Jordon',
  quote: 'The BriefYourMarket platform, combined with the fully managed service, influenced over \u00a3100,000 in instruction fees in a single quarter through email marketing alone.'
}, {
  logo: 'oulsnam',
  name: 'Oulsnam',
  quote: 'Our campaigns generated 15 physical valuations, 11 instructions and 12,842 website visits. These results highlight the impact of targeted, consistent email marketing.'
}];
function HomeScreen({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.05fr .95fr',
      gap: 'var(--space-12)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--font-size-5xl)',
      fontWeight: 700,
      letterSpacing: 'var(--letter-spacing-tight)',
      lineHeight: 1.12
    }
  }, "Email marketing built for estate agent lead generation"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--font-size-lg)',
      color: 'var(--text-secondary)',
      maxWidth: '52ch'
    }
  }, "Using your historic data to power targeted, localised email marketing that keeps you connected with your audience and drives new opportunities."), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => onNavigate('quote')
  }, "Book a Demo")), /*#__PURE__*/React.createElement("img", {
    src: ASSETS.iphone,
    alt: "BriefYourMarket campaign on a mobile phone",
    style: {
      width: '100%',
      maxWidth: 460,
      justifySelf: 'center'
    }
  }))), /*#__PURE__*/React.createElement(Section, {
    tone: "subtle"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-12)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "An email marketing platform that drives leads and revenue from your data"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-secondary)'
    }
  }, "With all your marketing tools in one platform, BriefYourMarket helps estate agents unlock the full potential of their data to deliver smarter, more targeted communication that generates measurable returns."), /*#__PURE__*/React.createElement(Button, {
    onClick: () => onNavigate('quote')
  }, "Book a Demo")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "raised",
    media: /*#__PURE__*/React.createElement("img", {
      src: ASSETS.mapPin,
      alt: "",
      height: "48"
    }),
    title: "Localised Campaigns"
  }, /*#__PURE__*/React.createElement("p", {
    className: "bym-card__body"
  }, "Connect with homeowners in your area through hyper-relevant, community-focused messaging.")), /*#__PURE__*/React.createElement(Card, {
    variant: "raised",
    media: /*#__PURE__*/React.createElement("img", {
      src: ASSETS.graph,
      alt: "",
      height: "48"
    }),
    title: "Historic Data"
  }, /*#__PURE__*/React.createElement("p", {
    className: "bym-card__body"
  }, "Re-engage past clients and uncover new valuations hidden within your existing database."))))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '.9fr 1.1fr',
      gap: 'var(--space-12)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "bym-eyebrow"
  }, "Historic data"), /*#__PURE__*/React.createElement("h2", null, "Unlock the power of historic data"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-secondary)'
    }
  }, "Turn past interactions into future instructions with targeted, data-driven campaigns that re-engage archived contacts and uncover new opportunities in your database."), /*#__PURE__*/React.createElement(Button, {
    onClick: () => onNavigate('quote')
  }, "Book a Demo")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 'var(--space-4)',
      alignItems: 'end'
    }
  }, ASSETS.screens.map((src, i) => /*#__PURE__*/React.createElement("img", {
    key: i,
    src: src,
    alt: "",
    style: {
      width: '100%',
      borderRadius: 'var(--radius-lg)'
    }
  }))))), /*#__PURE__*/React.createElement(Section, {
    tone: "ink"
  }, /*#__PURE__*/React.createElement("p", {
    className: "bym-eyebrow",
    style: {
      color: 'var(--sky-300)'
    }
  }, "Client Testimonials"), /*#__PURE__*/React.createElement("h2", {
    style: {
      color: 'var(--text-inverse)'
    }
  }, "Real results from estate agencies winning more instructions"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 'var(--space-6)',
      marginTop: 'var(--space-8)'
    }
  }, TESTIMONIALS.map(t => /*#__PURE__*/React.createElement("div", {
    key: t.logo,
    className: "bym-card",
    style: {
      background: 'var(--navy-700)',
      border: 0,
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: 'var(--radius-sm)',
      padding: 'var(--space-2)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: 56
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: ASSETS.clients[t.logo],
    alt: t.name,
    style: {
      maxHeight: 40,
      maxWidth: '80%'
    }
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--font-size-sm)',
      lineHeight: 1.6,
      color: 'var(--navy-100)'
    }
  }, "\u201C", t.quote, "\u201D")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-16)',
      marginTop: 'var(--space-12)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(StatTile, {
    inverse: true,
    value: "39%",
    label: "Average open rate",
    delta: "2x industry average"
  }), /*#__PURE__*/React.createElement(StatTile, {
    inverse: true,
    value: "\\u00a3100,000",
    label: "Instruction fees in one quarter"
  }), /*#__PURE__*/React.createElement(StatTile, {
    inverse: true,
    value: "31,000+",
    label: "Website leads influenced"
  }), /*#__PURE__*/React.createElement(StatTile, {
    inverse: true,
    value: "25+",
    label: "Integrated property CRMs"
  }))), /*#__PURE__*/React.createElement(Section, {
    tone: "subtle"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-12)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Our integration partners"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-secondary)'
    }
  }, "Our email platform integrates effortlessly with 25+ trusted property CRMs."), /*#__PURE__*/React.createElement("dl", {
    style: {
      margin: '0 0 var(--space-6)',
      display: 'grid',
      gap: 'var(--space-4)'
    }
  }, [['Fully integrated with your CRM', 'Using the data you are already collecting every day.'], ['Automatically segments your audience', 'Identifying patterns and contact segments.'], ['Feeds campaigns based on real behaviour', 'Reflecting real audience behaviour, not assumptions.']].map(([t, d]) => /*#__PURE__*/React.createElement("div", {
    key: t
  }, /*#__PURE__*/React.createElement("dt", {
    style: {
      fontWeight: 600,
      fontSize: 'var(--font-size-md)'
    }
  }, t), /*#__PURE__*/React.createElement("dd", {
    style: {
      margin: 0,
      color: 'var(--text-secondary)',
      fontSize: 'var(--font-size-base)'
    }
  }, d)))), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => onNavigate('quote')
  }, "Check My CRM Compatibility")), /*#__PURE__*/React.createElement("img", {
    src: ASSETS.integrations,
    alt: "Integration partner logos",
    style: {
      width: '100%'
    }
  }))));
}
Object.assign(window, {
  HomeScreen,
  TESTIMONIALS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/QuoteScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Button,
  Card,
  Field,
  Input,
  Textarea,
  Select,
  Checkbox,
  Alert,
  Badge
} = window.BriefYourMarketDesignSystem_3fccbf;
function QuoteScreen() {
  const [values, setValues] = React.useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    crm: '',
    message: ''
  });
  const [errors, setErrors] = React.useState({});
  const [state, setState] = React.useState('idle');
  const set = k => e => setValues(v => ({
    ...v,
    [k]: e.target.value
  }));
  function submit(e) {
    e.preventDefault();
    const next = {};
    if (!values.name.trim()) next.name = 'Enter your full name.';
    if (!/.+@.+\..+/.test(values.email)) next.email = 'Enter a valid email address, e.g. jane@agency.co.uk.';
    if (!values.phone.trim()) next.phone = 'Enter a phone number we can reach you on.';
    if (!values.message.trim()) next.message = 'Tell us what you want to achieve.';
    setErrors(next);
    if (Object.keys(next).length) return;
    setState('sending');
    setTimeout(() => setState('sent'), 900);
  }
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Section, {
    tone: "subtle"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '.85fr 1.15fr',
      gap: 'var(--space-12)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    tone: "brand"
  }, "Book a Demo"), /*#__PURE__*/React.createElement("h1", {
    style: {
      marginTop: 'var(--space-4)'
    }
  }, "See what your data could be earning you"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-secondary)'
    }
  }, "Tell us about your agency and we will show you the campaigns, automations and reporting that win more instructions."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--font-size-sm)',
      color: 'var(--text-tertiary)'
    }
  }, "Or call us on ", /*#__PURE__*/React.createElement("a", {
    href: "tel:03448008424"
  }, "0344 800 84 24"), ".")), /*#__PURE__*/React.createElement(Card, {
    variant: "floating",
    style: {
      padding: 'var(--space-8)'
    }
  }, state === 'sent' ? /*#__PURE__*/React.createElement(Alert, {
    tone: "success",
    title: "Thanks \u2014 your quote request is on its way"
  }, "A BriefYourMarket consultant will call you within one working day.") : /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    noValidate: true,
    style: {
      display: 'grid',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 'var(--font-size-xl)'
    }
  }, "Get My Free Quote"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-1) 0 0',
      fontSize: 'var(--font-size-xs)',
      color: 'var(--text-tertiary)'
    }
  }, "\u201C*\u201D indicates required fields")), Object.keys(errors).length > 0 && /*#__PURE__*/React.createElement(Alert, {
    tone: "danger",
    title: "Check the highlighted fields"
  }, "Four details let us prepare an accurate quote."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Full Name",
    required: true,
    error: errors.name
  }, a => /*#__PURE__*/React.createElement(Input, _extends({
    value: values.name,
    onChange: set('name'),
    placeholder: "Jane Goodrich"
  }, a))), /*#__PURE__*/React.createElement(Field, {
    label: "Email",
    required: true,
    error: errors.email
  }, a => /*#__PURE__*/React.createElement(Input, _extends({
    type: "email",
    value: values.email,
    onChange: set('email'),
    placeholder: "jane@agency.co.uk"
  }, a))), /*#__PURE__*/React.createElement(Field, {
    label: "Phone",
    required: true,
    error: errors.phone
  }, a => /*#__PURE__*/React.createElement(Input, _extends({
    type: "tel",
    value: values.phone,
    onChange: set('phone'),
    placeholder: "0344 800 84 24"
  }, a))), /*#__PURE__*/React.createElement(Field, {
    label: "Company Name"
  }, a => /*#__PURE__*/React.createElement(Input, _extends({
    value: values.company,
    onChange: set('company')
  }, a)))), /*#__PURE__*/React.createElement(Field, {
    label: "Your CRM",
    hint: "25+ property CRMs supported."
  }, a => /*#__PURE__*/React.createElement(Select, _extends({
    placeholder: "Choose a CRM",
    value: values.crm,
    onChange: set('crm'),
    options: ['Reapit', 'Alto', 'Jupix', 'Vebra Alto', 'Other / not sure']
  }, a))), /*#__PURE__*/React.createElement(Field, {
    label: "Message",
    required: true,
    error: errors.message
  }, a => /*#__PURE__*/React.createElement(Textarea, _extends({
    rows: 4,
    value: values.message,
    onChange: set('message'),
    placeholder: "We want to re-engage 8,000 archived contacts."
  }, a))), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Email me estate agency marketing insights"
  }), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    size: "lg",
    block: true,
    loading: state === 'sending'
  }, "Submit"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--font-size-xs)',
      color: 'var(--text-tertiary)'
    }
  }, "No spam. Unsubscribe anytime."))))));
}
Object.assign(window, {
  QuoteScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/QuoteScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/SiteChrome.jsx
try { (() => {
const {
  NavBar,
  Button,
  IconButton
} = window.BriefYourMarketDesignSystem_3fccbf;
const ASSETS = {
  logo: '../../assets/logo.svg',
  logoReversed: '../../assets/logo-reversed.svg',
  mapPin: 'https://www.briefyourmarket.com/wp-content/uploads/2023/10/icon-map-pin.svg',
  graph: 'https://www.briefyourmarket.com/wp-content/uploads/2023/10/icon-graph.svg',
  iphone: 'https://www.briefyourmarket.com/wp-content/uploads/2023/10/homepage-iphone-goodrich.png',
  overview: 'https://www.briefyourmarket.com/wp-content/uploads/2026/06/Email-Marketing-Overview-1536x1536.png',
  integrations: 'https://www.briefyourmarket.com/wp-content/uploads/2023/10/Integration-Logos_Dark-1024x733.png',
  screens: ['https://www.briefyourmarket.com/wp-content/uploads/2023/10/goodrich-1.png', 'https://www.briefyourmarket.com/wp-content/uploads/2023/10/goodrich-2.png', 'https://www.briefyourmarket.com/wp-content/uploads/2023/10/goodrich-3new.png', 'https://www.briefyourmarket.com/wp-content/uploads/2023/10/goodrich-4.png'],
  clients: {
    reeds: 'https://www.briefyourmarket.com/wp-content/uploads/2026/04/Reeds-Rains-Hebburn_logo_trans-blue.png',
    balgore: 'https://www.briefyourmarket.com/wp-content/uploads/2026/02/balgore.png',
    farrell: 'https://www.briefyourmarket.com/wp-content/uploads/2026/02/farrell.png',
    jordon: 'https://www.briefyourmarket.com/wp-content/uploads/2026/02/jordon.png',
    ellis: 'https://www.briefyourmarket.com/wp-content/uploads/2026/02/robert-ellis.png',
    oulsnam: 'https://www.briefyourmarket.com/wp-content/uploads/2026/02/oulsnam-logo.png'
  }
};
const NAV_ITEMS = [{
  label: 'Discover',
  href: '#'
}, {
  label: 'Case Studies',
  href: '#'
}, {
  label: 'Features',
  children: [{
    label: 'On Market Data'
  }, {
    label: 'Email Marketing'
  }, {
    label: 'Surveys'
  }, {
    label: 'Automation'
  }, {
    label: 'Print Marketing'
  }, {
    label: 'Campaign Library'
  }, {
    label: 'Reporting'
  }, {
    label: 'Communications Managed'
  }, {
    label: 'SMS'
  }]
}, {
  label: 'Contact us',
  href: '#'
}, {
  label: 'About us',
  href: '#'
}, {
  label: 'Blog',
  href: '#'
}];
function SiteHeader({
  route,
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 30,
      background: 'var(--surface-base)',
      boxShadow: 'var(--shadow-1)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "bym-container",
    style: {
      padding: '0 var(--container-pad)'
    }
  }, /*#__PURE__*/React.createElement(NavBar, {
    brand: /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNavigate('home');
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: ASSETS.logo,
      alt: "BriefYourMarket",
      height: "46"
    })),
    current: route === 'email' ? 'Features' : undefined,
    items: NAV_ITEMS.map(i => i.label === 'Features' ? {
      ...i,
      children: i.children.map(c => ({
        ...c,
        href: '#',
        onClick: () => onNavigate('email')
      }))
    } : i),
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("a", {
      href: "tel:03448008424",
      style: {
        fontSize: 'var(--font-size-base)',
        fontWeight: 600,
        color: 'var(--text-primary)'
      }
    }, "0344 800 84 24"), /*#__PURE__*/React.createElement(Button, {
      onClick: () => onNavigate('quote')
    }, "Book a Demo"))
  })));
}
function Section({
  tone = 'base',
  children,
  style
}) {
  const bg = tone === 'subtle' ? 'var(--surface-subtle)' : tone === 'ink' ? 'var(--surface-ink)' : 'var(--surface-base)';
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: bg,
      padding: 'var(--space-20) 0',
      color: tone === 'ink' ? 'var(--text-inverse)' : undefined,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "bym-container"
  }, children));
}
function SiteFooter({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--surface-ink)',
      color: 'var(--navy-100)',
      paddingTop: 'var(--space-16)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "bym-container",
    style: {
      textAlign: 'center',
      paddingBottom: 'var(--space-16)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: ASSETS.logoReversed,
    alt: "BriefYourMarket",
    style: {
      width: '100%',
      maxWidth: 260,
      marginBottom: 'var(--space-6)'
    }
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      color: 'var(--text-inverse)',
      fontSize: 'var(--font-size-2xl)'
    }
  }, "Get Started"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-25)',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    size: "lg",
    onClick: () => onNavigate('quote')
  }, "Book a Demo Today"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "lg",
    style: {
      color: '#fff'
    },
    onClick: () => onNavigate('quote')
  }, "Book a Free Quote"))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--navy-700)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "bym-container",
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-4)',
      justifyContent: 'space-between',
      padding: 'var(--space-6) var(--container-pad)',
      fontSize: 'var(--font-size-xs)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: '62ch',
      lineHeight: 1.6
    }
  }, "\xA9 2026 BriefYourMarket All Rights Reserved. Registered Office: Brindley House, Little Eaton, Derby DE21 5EL, United Kingdom. Registered in England and Wales under Co. No. 06503130"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'var(--navy-100)'
    }
  }, "Privacy Policy"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'var(--navy-100)'
    }
  }, "Cookie Policy"), /*#__PURE__*/React.createElement(IconButton, {
    label: "YouTube",
    style: {
      color: 'var(--navy-100)'
    }
  }, "\u25B6"), /*#__PURE__*/React.createElement(IconButton, {
    label: "LinkedIn",
    style: {
      color: 'var(--navy-100)'
    }
  }, "in")))));
}
Object.assign(window, {
  ASSETS,
  NAV_ITEMS,
  SiteHeader,
  SiteFooter,
  Section
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/SiteChrome.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.DataTable = __ds_scope.DataTable;

__ds_ns.StatTile = __ds_scope.StatTile;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Spinner = __ds_scope.Spinner;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.RadioGroup = __ds_scope.RadioGroup;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
