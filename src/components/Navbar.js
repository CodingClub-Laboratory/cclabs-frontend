import React from "react";

export const Navbar = () => {
  return (
    <div className="fixed bg-transparent h-10 w-full flex text-white py-3">
      <div className="flex my-2">
        <img src="console.png" alt="logo" className=" h-7 w-7 mx-3 " />
        <a href="" className="font-heading text-xl color ">
          CC Labs
        </a>
      </div>
      {/* <a href="" classname="h-5 w-20 bg-blue-100 rounded ">
        Sign in with Github
      </a> */}
      <div className="flex absolute right-2 align-middle items-center font-body font-thin">
        <div className="hidden md:flex items-center space-x-3 text-lg ">
          <a
            href=""
            className="py-4 px-2 text-green-500 border-b-4 border-green-500 font-body "
          >
            Repo of the day
          </a>
          <a
            href=""
            className="py-4 px-2 text-gray-500 hover:text-green-500 transition duration-300 font-body"
          >
            Projects
          </a>
          <a
            href=""
            className="py-4 px-2 text-gray-500 hover:text-green-500 transition duration-300 font-body"
          >
            Hire Devs
          </a>
        </div>
        <div className="px-3">
          <button class="bg-blue-200 hover:bg-blue-700 text-white  rounded-2xl text-sm justify-center align-middle h-9 flex items-center px-3 shadow-xl font-body">
            <img src="github.png" alt="github logo" className="h-6 w-6 mx-2" />
            Sign in with Github
          </button>
        </div>
      </div>
    </div>
  );
};
