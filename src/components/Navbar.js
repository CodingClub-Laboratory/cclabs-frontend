import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = ({ className }) => {
  return (
    <React.Fragment>
      <div
        className={`${className} z-30 fixed bg-transparent w-full flex items-center justify-center text-white py-2`}
      >
        <div className="flex justify-center items-center">
          <img src="console.png" alt="logo" className="h-9 w-auto mx-3 " />
          <Link to="/">
            <p className="font-head font-bold text-2xl color ">CC Labs</p>
          </Link>
        </div>
        <div className="flex-1"></div>
        <div className="flex justify-center items-center">
          <div className="hidden md:flex items-center space-x-3 text-lg ">
            <Link to="/">
              <NavItem name="Repo of the Day" />
            </Link>
            <Link to="/">
              <NavItem name="Hire Dev" />
            </Link>
            <Link to="/">
              <NavItem name="Our Projects" />
            </Link>
          </div>
          <div className="px-3">
            <button class="bg-gradient-to-r from-blue-300 to-blue-400 hover:bg-gradient-to-l text-white  rounded-2xl text-sm justify-center align-middle flex items-center px-5 py-2 shadow-xl hover:shadow-none transition-all transform hover:translate-y-1 font-body">
              <img
                src="github.png"
                alt="github logo"
                className="h-6 w-6 mr-2"
              />
              Sign in with Github
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

const NavItem = ({ name }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <button
      className="md:visible invisible flex flex-col items-center"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <p className={`${isHover ? "text-white": "text-gray-200"} mx-4 my-2 duration-300 font-body text-base`}>
        {name}
      </p>
      <div className={`${!isHover ? "w-1/2" : "w-0"} transition-all bg-white h-0.5`}></div>
    </button>
  );
};
