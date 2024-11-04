import React, { useState } from "react";
import { logo } from "../assets";

const NavBar = () => {
  const [toggle, setToggle]=useState(true)

  return (
    <div>
      <div className="flex justify-between">
        <img src={logo} className="h-5" />
        <div className="hidden md:flex">
          <ul className="flex flex-row">
            <li className="mr-4 transition-all east-in-out hover:scale-110 cursor-pointer">Home</li>
            <li className="mr-4 transition-all east-in-out hover:scale-110 cursor-pointer">About Me</li>
            <li className="mr-4 transition-all east-in-out hover:scale-110 cursor-pointer">Skills</li>
            <li className="mr-4 transition-all east-in-out hover:scale-110 cursor-pointer">Portfolio</li>
            <li className="mr-4 transition-all east-in-out hover:scale-110 cursor-pointer">Companies</li>
            <li className="mr-4 transition-all east-in-out hover:scale-110 cursor-pointer">Contact Me</li>
          </ul>
        </div>

        <div>
        {!toggle?"Toggle is Off":"Toggle is On"}
        </div>
        
      </div>
    </div>
  );
};

export default NavBar;
