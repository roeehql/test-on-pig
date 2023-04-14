import React from "react";
import PropTypes from "prop-types";

const Input = ({
  type,
  name,
  value,
  onChange,
  placeholder,
  required = true,
  labelText,
  readOnly = false,
}) => {
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
        className="w-full py-2 px-2 border-2 border-black rounded-2xl"
        placeholder={placeholder}
        required={required}
        readOnly={readOnly}
      />
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  labelText: PropTypes.string,
  readOnly: PropTypes.bool,
};

export default Input;
