import React from "react";
import SettingBox from "../setting/SettingBox";
import Header from "./Header";

const Setting = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen">
      <Header />
      <SettingBox />
    </div>
  );
};

export default Setting;
