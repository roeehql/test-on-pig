import React from "react";

const Input = (
  type,
  name,
  value,
  onChange,
  placeholder,
  required = true,
  labelText,
  readOnly = false
) => {
  return (
    <div>
      <label className="w-full text-left tracking-tight" htmlFor={name}>
        {labelText}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        readOnly={readOnly}
      />
    </div>
  );
};

export default Input;
