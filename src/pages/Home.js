import React, { useState } from "react";
import { useEffect, useRef } from "react";
import pslogo from "../assets/powershell.png";
import { init } from "ityped";
import '../styles/slider.css';

/*{import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import "../styles/styles.css";

// import Swiper core and required modules
import SwiperCore, { Grid, Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([Grid, Pagination]);}*/
const Home = () => {
  return (
    <React.Fragment>
      <Banner />
      <Terminal />
      <Collaborator />
      <Slider />
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
      <svg width={"0"} height={"0"}>
        <defs>
          <clipPath id="panelClip2">
            <rect width={"100vw"} height={"500"} />
            <ellipse
              cx={"50vw"}
              cy={"500"}
              rx={"calc(50vw + 50px)"}
              ry={"max(5vh, 50px)"}
            />
          </clipPath>
        </defs>
      </svg>
      <section className="w-screen h-screen md:h-[600px] lg:h-screen overflow-x-hidden">
        <div className="w-full h-full shadow-panel">
          <div className="w-full h-full flex bg-blue-300 bg-panel md:bg-cover ">
            <div className="w-full h-full flex flex-col font-extrabold items-start justify-center px-4 lg:px-12 -mt-8 lg:-mt-12">
              <h1 className=" font-head text-white text-5xl lg:text-8xl text-center ">
                Lets Code
              </h1>
              <h1 className=" font-head text-blue-300 text-4xl lg:text-7xl text-center ">
                Together.
              </h1>
              <div className=" w-full lg:w-1/3 h-30 flex-row font-normal text-base lg:text-lg  py-3 top-80 left-10 ">
                <p className="text-white ">
                  Surf here at your own Contributors' Hub. Work on exciting
                  projects and imrpove your skill, idk some Lorem Ipsum shit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

const Terminal = () => {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      strings: ["CCLabs init"],
      typeSpeed: 200,
      backSpeed: 100,
      backDelay: 2000,
    });
  }, []);
  return (
    <section className="w-screen my-16 md:mt-0 lg:my-16 h-full md:flex justify-center md:px-12 md:space-x-12">
      <div className="w-full md:w-1/3 flex flex-col">
        <h1 className="text-center md:text-left text-5xl lg:text-6xl text-blue-700 font-extrabold font-head">
          Create your
          <span className="mx-2 text-blue-400 hover:underline cursor-pointer">
            First Project
          </span>
          with us
        </h1>
        <p className="pt-4 font-semibold font-body text-center md:text-left text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          tellus felis, congue at eleifend vel, maximus a arcu. Proin consequat
          nisi quis enim malesuada, ac pretium leo convallis. Donec dictum.
        </p>
      </div>

      <div className="hidden md:flex flex-col w-2/3 bg-blue-900 h-[400px] rounded-2xl shadow-lg">
        <div className="bg-blue-600 w-full h-10 rounded-t-2xl flex items-center">
          <img src={pslogo} alt="" className="h-7 w-7 mx-3" />
          <h1 className="text-white font-semibold font-console text-xl">
            Terminal
          </h1>
        </div>
        <p className="text-white ml-3 font-console mt-3">
          Terminal
          <br /> Copyright (C) CC Labs. All rights reserved.
          <br />
          <br />
          Install the latest Terminal for new features and improvements!
          <br />
          <br />
          <span>(base) PS C:\Users\mypc&gt; </span>
          <span className="text-[#B1FF96] font-semibold" ref={textRef}></span>
        </p>
      </div>
    </section>
  );
};

const Collaborator = () => {
  return (
    <section className="shadow-lg w-11/12 h-screen bg-blue-800 my-32 rounded-2xl relative mx-auto">
      <div className="h-1/4  absolute top-5 right-5 font-head font-extrabold text-4xl md:text-5xl text-right">
        <span className="text-white">Find your </span>
        <span className="text-blue-100 hover:underline cursor-pointer">
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
    </section>
  );
};

const Slider = () => {
  return (
    <section className="w-screen h-screen md:h-screen lg:h-screen overflow-x-hidden pt-10">
      <div className="w-full flex flex-col text-center">
        <h1 className="text-center md:text-left text-5xl lg:text-6xl text-blue-700 font-extrabold font-head">
          Make your
          <span className="mx-2 text-blue-400 hover:underline cursor-pointer">
            contributions
          </span>
          here
        </h1>
        <p className="pt-4 font-semibold font-body text-center md:text-left text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          tellus felis, congue at eleifend vel, maximus a arcu. Proin consequat
          nisi quis enim malesuada, ac pretium leo convallis. Donec dictum.
        </p>
      </div>
      <Carousel>
        <CarouselItem>Item 1</CarouselItem>
        <CarouselItem>Item 2</CarouselItem>
        <CarouselItem>Item 3</CarouselItem>
        <CarouselItem>Item 4</CarouselItem>
        <CarouselItem>Item 5</CarouselItem>
      </Carousel>
    </section>
  );
};

const CarouselItem = ({ children, classNames }) => {
  return (
    <div className={`${classNames}`}>
      {children}
    </div>
  )
}

const Carousel = ({ children }) => {

  const [activeIndex, setActiveIndex] = useState(0);
  const halfLength = Math.floor(children.length / 2);

  const incIndex = () => {

    if (activeIndex < Math.floor(children.length / 2)) {
      setActiveIndex(activeIndex + 1);
    }

  }

  const decIndex = () => {

    if (activeIndex > -(Math.floor(children.length / 2))) {
      setActiveIndex(activeIndex - 1);
    }

  }

  return (
    <React.Fragment>
      <div className="carousel">
        <div className="inner" style={{ transform: `translateX(${activeIndex * -200}px)` }}>
          {React.Children.map(children, (child, index) => {
            const shiftedIndex = index - halfLength;
            if(shiftedIndex === activeIndex){
              return React.cloneElement(child, {classNames : `carousel-item carousel-item__active`});
            } else if ((shiftedIndex === activeIndex - 1) || (shiftedIndex === activeIndex + 1)) {
              return React.cloneElement(child, {classNames : `carousel-item carousel-item__nearby`});
            } else {
              return React.cloneElement(child, {classNames : `carousel-item carousel-item__hidden`});
            }
          })}
        </div>
      </div>
      <div>
        <button onClick={decIndex}>Left</button>
        <button onClick={incIndex}>Right</button>
      </div>
    </React.Fragment>
  )
}

export default Home;
