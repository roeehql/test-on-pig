import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Toast = ({ title, message }) => {
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    setShowToast(true);
    const showToast = setTimeout(() => {
      setShowToast(false);
    }, 3000);
    return () => clearTimeout(showToast);
  }, []);

  return (
    <>
      {showToast && (
        <div className="absolute top-0 right-0 flex flex-col justify-center items-center w-64 h-24 px-6 py-2 m-6 shadow bg-white rounded-2xl">
          <p className="w-full tracking-tight text-base">{title}</p>
          <p className="w-full tracking-tight text-base">{message}</p>
        </div>
      )}
    </>
  );
};

Toast.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
};

export default Toast;
