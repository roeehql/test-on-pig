import React from "react";
import PropTypes from "prop-types";

const SettingListView = ({ listText, onClick }) => {
  return (
    <li className="flex justify-center items-center w-full border-b-2 border-black last:border-0">
      <button
        className="px-4 py-2 bg-white tracking-tighter text-xl cursor-pointer hover:bg-green hover:text-white"
        onClick={onClick}
      >
        {listText}
      </button>
    </li>
  );
};

SettingListView.propTypes = {
  listText: PropTypes.string,
  onClick: PropTypes.func,
};

export default SettingListView;
