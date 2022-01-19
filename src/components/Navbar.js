import { animate, timeline } from "motion";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
export const Navbar = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      timeline(
        [
          [".block1", { y: 7.5 }],
          [".block1", { rotate: "45deg" }],
        ],
        { duration: 0.5 }
      );
      animate(
        ".block2",
        {
          opacity: 0,
        },
        { duration: 0.5 }
      );
      timeline(
        [
          [".block3", { y: -7.5 }],
          [".block3", { rotate: "-45deg" }],
        ],
        { duration: 0.5 }
      );
      timeline(
        [
          [
            ".nav-menu",
            {
              transform: "translateX(0vw)",
              transformOrigin: "right",
              // borderRadius: "0%",
            },
            { duration: 0.5 },
          ],
        ],
        {}
      );
    } else {
      timeline(
        [
          [".block1", { rotate: "0deg" }],
          [".block1", { y: 0 }],
        ],
        { duration: 0.5 }
      );
      animate(
        ".block2",
        {
          opacity: 1,
        },
        { duration: 0.5 }
      );
      timeline(
        [
          [".block3", { rotate: "0deg" }],
          [".block3", { y: 0 }],
        ],
        {}
      );
      timeline(
        [
          [
            ".nav-menu",
            {
              transform: "translateX(100vw)",
              transformOrigin: "right",
            },
            { duration: 0.5 },
          ],
        ],
        {}
      );
    }
  }, [isOpen]);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 40) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <nav className={`${className} fixed z-30 h-auto py-0 w-screen`}>
      <div
        className={`${
          !color ? "bg-transparent" : "bg-blue-800 shadow-xl"
        } w-full flex items-center justify-center  text-white py-2 pb-4 ease-in-out`}
      >
        <div className="flex justify-center items-center w-fit">
          <img src={Logo} alt="logo" className="h-9 w-auto mx-3 " />
          <Link to="/">
            <p className="font-head font-bold text-2xl color">CC Labs</p>
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
          <button class="hidden mx-8 bg-gradient-to-r from-blue-300 to-blue-400 hover:bg-gradient-to-l text-white  rounded-2xl text-sm justify-center md:flex items-center px-5 py-2 shadow-xl hover:shadow-none transition-all transform hover:translate-y-1 font-body">
            <img src="github.png" alt="github logo" className="h-6 w-6 mr-2 " />
            <p className="hidden md:block">Sign in with Github</p>
          </button>
          <button
            className="z-50 space-y-1 mx-2 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="block1 w-7 h-1 bg-white"></div>
            <div className="block2 w-7 h-1 bg-white"></div>
            <div className="block3 w-7 h-1 bg-white"></div>
          </button>
          <div className="nav-menu h-screen w-full flex flex-col py-32 items-center space-y-6 fixed top-0 right-0 md:hidden font-semibold text-2xl bg-gradient-to-bl from-blue-800 to-blue-500">
            <div className="signin font-semibold py-8 px-6 text-white w-4/5 h-3 bg-blue-300 flex justify-center items-center rounded-full">
              <p className="mr-2">Sign in with Github</p>
              <img
                src="github.png"
                alt="github logo"
                className="h-8 w-8 "
              />
            </div>
            <NavbarMobileItem name={"Repo of the Day"} className="item-1" />
            <NavbarMobileItem name={"Hire Dev"} className="item-2" />
            <NavbarMobileItem name={"Our Projects"} className="item-3" />
          </div>
        </div>
      </div>
    </nav>
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
      <p
        className={`${
          isHover ? "text-white" : "text-gray-200"
        } mx-4 my-2 duration-300 font-body text-base md:text-sm`}
      >
        {name}
      </p>
      <div
        className={`${
          !isHover ? "w-1/2" : "w-1/5"
        } transition-all bg-white h-0.5 rounded-full`}
      ></div>
    </button>
  );
};

const NavbarMobileItem = ({ name, className }) => {
  return <div className={`${className}`}>{name}</div>;
};
