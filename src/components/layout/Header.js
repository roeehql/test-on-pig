import React from "react";
import { Link } from "react-router-dom";
import ProfileList from "../profile/ProfileList";
import mascot from "../../data/image/pig.png";
import PropTypes from "prop-types";

const Header = () => {
  return (
    <nav className="fixed top-0 flex flex-row justify-center items-center w-screen h-20 bg-black text-white">
      <ul className="flex flex-row justify-between items-center w-full h-20">
        <Li>
          <Link
            className="flex flex-row justify-center items-center"
            to="/home"
          >
            <div className="mr-2">
              <img src={mascot} alt="mascot pig" width={"45px"} />
            </div>
            PigONTrip
          </Link>
        </Li>
        <div className="flex flex-row justify-end items-center">
          <Li>
            <ProfileList />
          </Li>
          <Li>
            <Link to="/setting">설정</Link>
          </Li>
        </div>
      </ul>
    </nav>
  );
};

export default Header;

export const Li = ({ children }) => {
  return (
    <li className="flex flex-row justify-center items-center w-fit h-full px-2 text-base tracking-tight cursor-pointer">
      {children}
    </li>
  );
};

Li.propTypes = {
  children: PropTypes.node,
};
