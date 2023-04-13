import React from "react";

const Loading = (message = "잠시만 기다려주세요...") => {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="w-80 h-80 rounded-full border-4 border-red-light animate-spin">
        <span className="absolute w-4 h-4 rounded-full bg-yellow"></span>
      </div>
      <h1>{message}</h1>
    </div>
  );
};

export default Loading;
