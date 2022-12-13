import React from "react";

import "./Input.scss";

const Input = ({
  id,
  label,
  placeHolder,
  error,
  helperText,
  disabled,
  startIcon,
  endIcon,
  size,
  fullWidth,
  multiline,
  color,
  ...props
}) => {
  const className = `input ${error && "error-input"} ${
    startIcon && "start-icon-input"
  } ${endIcon && "end-icon-input"}
  size-${multiline ? "multiline" : size || "md"} ${fullWidth && "full-width"}`;
  let element;
  let styles = {
    borderColor: color
  }

  if (multiline) {
    element = (
      <textarea
        disabled={disabled}
        className={className}
        placeholder={placeHolder}
        rows={multiline}
        style={styles}
        {...props}
      />
    );
  } else {
    element = (
      <input
        disabled={disabled}
        className={className}
        placeholder={placeHolder}
        style={styles}
        {...props}
      />
    );
  }

  return (
    <div className={`input-container ${fullWidth && "full-width"}`}>
      <label className={`label ${error && "error-label"}`} htmlFor={id}>
        {label}
      </label>
      {(startIcon || endIcon) && (
        <div className={`icon-${startIcon ? "start" : "end"}`}>
          {startIcon || endIcon}
        </div>
      )}
      {element}
      <p className={`helper-text ${error && "error-helper-text"}`}>
        {helperText}
      </p>
    </div>
  );
};

export default Input;
