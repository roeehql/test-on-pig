import React from "react";

const Button = (text, type, value, onClick, color) => {
  return (
    <button type={type} value={value} onClick={onClick} className={`${color}`}>
      {text}
    </button>
  );
};

export default Button;
