import React from "react";
import PropTypes from "prop-types";

const Button = ({ type, text, onClick }) => {
  return (
    <div className="flex flex-row justify-center items-center w-full">
      <button
        type={type}
        onClick={onClick}
        className="w-24 h-fit py-2 px-3 m-3 bg-green rounded-md text-lg text-white"
      >
        {text}
      </button>
    </div>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
