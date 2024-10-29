import React from "react";
import { logo } from "../assets";

const NavBar = () => {
  return (
    <div>
      <div>
        <img src={logo} className="h-5" />
        <div>
          <ul>
            <li>Home</li>
            <li>About Me</li>
            <li>Skills</li>
            <li>Portfolio</li>
            <li>Companies</li>
            <li>Contact Me</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
