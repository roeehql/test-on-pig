import React from "react";
import PropsTypes from "prop-types";

const Small = ({ message }) => {
  return <small className="w-full h-fit text-sm text-red">{message}</small>;
};

Small.propTypes = {
  message: PropsTypes.string,
};

export default Small;
