import React from "react";

const Home = () => {
  return (
    <React.Fragment>
      <Banner />
      <Terminal />
      <Collaborator />
    </React.Fragment>
  );
};
const Banner = () => {
  return (
    <React.Fragment>
      <svg width={"0"} height={"0"}>
        <defs>
          <clipPath id="panelClip">
            <rect width={"100vw"} height={"85vh"} />
            <ellipse
              cx={"50vw"}
              cy={"85vh"}
              rx={"calc(50vw + 50px)"}
              ry={"max(5vh, 50px)"}
            />
          </clipPath>
        </defs>
      </svg>
      <div className="w-screen h-screen overflow-x-hidden">
        <div className="w-full h-full shadow-panel">
          <div className="w-full h-full flex bg-blue-300 bg-panel md:bg-cover ">
            <div className="w-full h-full flex font-extrabold">
              <h1 className=" font-head text-white text-6xl text-center md: fixed top-48 left-10">
                Lets Code
              </h1>
              <h1 className=" font-head text-blue-300 text-5xl text-center md: fixed left-10 top-64">
                Together.
              </h1>
              <div className="w-80 h-30 flex-row font-normal text-sm py-3 md: fixed top-80 left-10 ">
                <p className="text-white text-center">
                  Surf here at your own Contributors' Hub. Work on exciting
                  projects and imrpove your skill, idk some Lorem Ipsum shit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

const Terminal = () => {
  return (
    <div className="w-screen h-full md:grid justify-center">
      <div className="w-3/4 flex-row m-auto md:m-1 text-center md:w-1/4 md:mt-4">
        <h1 className="text-6xl text-blue-700  font-extrabold font-head">
          Create your
        </h1>
        <h1 className="text-6xl text-blue-400  font-extrabold font-head">
          First Project
        </h1>
        <h1 className="text-6xl text-blue-700  font-extrabold font-head">
          with us
        </h1>
        <p className="pt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          tellus felis, congue at eleifend vel, maximus a arcu. Proin consequat
          nisi quis enim malesuada, ac pretium leo convallis. Donec dictum.
        </p>
      </div>

      <div className=" w-11/12 md:w-1/2 h-1/2 bg-blue-900 rounded-2xl m-auto md:rounded-l-2xl md:absolute md:right-0 mt-5">
        <div className="w-full h-10 bg-blue-600 rounded-t-2xl md:rounded-tl-2xl flex align-center">
          <img src="powershell.png" className="h-7 w-7 mx-3 my-auto" />
          <h1 className="text-2xl text-white font-medium font-body my-auto mx-1">
            Terminal
          </h1>
        </div>
        <p className="text-white ml-3 mt-2 font-console text-lg">
          Terminal
          <br /> Copyright (C) CC Labs. All rights reserved.
          <br />
          Install the latest Terminal for new features and improvements!
          <br />
          <span>(base) PS C:\Users\mypc&gt;</span>
          <span className="text-console-green font-semibold"> CCLabs </span>
          <span className="text-console-yellow font-semibold">init</span>
        </p>
      </div>
    </div>
  );
};

const Collaborator = () => {
  return (
    <div className=" w-11/12 h-screen bg-blue-800 mt-32 rounded-xl md:mt-64 relative mx-auto">
      <div className="h-1/4  absolute top-5 right-5 font-head font-extrabold text-4xl md:text-5xl text-right">
        <span className="text-white">Find your </span>
        <span className="text-blue-100">
          <br />
          dream
          <br /> collaborators
        </span>
        <span className="text-white">
          <br /> here
        </span>
      </div>

      <div className="chat w-full md:w-1/2 flex flex-col px-4 pt-44 md:pt-5 md:text-lg font-body font-normal">
        <div className="yours messages">
          <div className="message last">Hello, how's it going?</div>
        </div>
        <div className="mine messages">
          <div className="message">Great thanks!</div>
          <div className="message last">How about you?</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
