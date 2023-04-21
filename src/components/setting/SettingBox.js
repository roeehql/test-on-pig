import React from "react";
import SettingAuth from "./SettingAuth";

const SettingBox = () => {
  return (
    <div className="flex justify-center items-center h-fit w-fit border-2 border-black">
      <ul className="flex flex-col justify-start items-start">
        <SettingAuth />
      </ul>
    </div>
  );
};

export default SettingBox;
