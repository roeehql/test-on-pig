import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/layout/Home";
import Setting from "../components/layout/Setting";
import App from "../components/layout/App";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/setting" element={<Setting />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
