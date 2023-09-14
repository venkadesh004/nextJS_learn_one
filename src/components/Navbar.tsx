import React from "react";

import Logo from "../images/logo.svg";

function Navbar() {
  return (
    <div className="flex items-center justify-between">
      <div className="w-40">
        <Logo />
      </div>
      <div className="hidden md:text-white md:flex items-center justify-evenly md:w-1/2">
        <a href="">About</a>
        <a href="">Services</a>
        <a href="">Projects</a>
        <button className="bg-white text-black h-10 w-32 rounded-3xl font-secondary font-semibold text-xs">
          <p className="text-xs">CONTACT</p>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
