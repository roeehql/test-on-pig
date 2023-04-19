import React from "react";
import { Link } from "react-router-dom";
import ProfileList from "../profile/ProfileList";
import mascot from "../../data/image/pig.png";

const Header = () => {
  return (
    <nav className="fixed top-0 flex flex-row justify-center items-center w-screen h-20 bg-black text-white">
      <ul className="flex flex-row justify-between items-center w-full h-20">
        <li className="flex flex-row justify-center items-center w-fit h-full text-base tracking-tight cursor-pointer">
          <Link
            className="flex flex-row justify-center items-center"
            to="/home"
          >
            <div className="mr-2">
              <img src={mascot} alt="mascot pig" width={"45px"} />
            </div>
            PigONTrip
          </Link>
        </li>
        <div className="flex flex-row justify-end items-center">
          <li className="flex flex-row justify-center items-center w-fit h-full text-base tracking-tight cursor-pointer">
            <ProfileList />
          </li>
          <li className="flex flex-row justify-center items-center w-fit h-full px-2 text-base tracking-tight cursor-pointer">
            <Link to="/setting">설정</Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Header;
