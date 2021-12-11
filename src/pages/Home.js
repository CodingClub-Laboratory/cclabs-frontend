import React from "react";

const Home = () => {
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
      <div className="w-screen h-screen">
        <div className="w-full h-full shadow-panel">
          <div className=" w-full h-full flex font-extrabold text-5xl bg-blue-300 bg-panel md:bg-cover "></div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
