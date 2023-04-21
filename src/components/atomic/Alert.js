import React from "react";
import PropTypes from "prop-types";

const Alert = ({ message, handleAlertButton }) => {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="flex flex-col justify-center items-center w-fit h-fit px-8 py-5 border-2 border-black bg-white">
        <div className="flex justify-end items-center w-full h-fit">
          <AlertButton text="닫기" onClick={() => handleAlertButton()} />
        </div>
        <div>{message}</div>
        <AlertButton text="확인" onClick={() => handleAlertButton()} />
      </div>
    </div>
  );
};

Alert.propTypes = {
  message: PropTypes.string,
  handleAlertButton: PropTypes.func,
};

export default Alert;

export const AlertButton = ({ text, onClick }) => {
  return (
    <button
      className="px-4 py-2 m-3 border-2 border-black bg-red text-white"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

AlertButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};
