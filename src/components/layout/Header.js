import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/home">PigONTrip</Link>
        </li>
        <li>profile</li>
        <li>
          <Link to="/setting">setting</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
