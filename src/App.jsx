import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
const App = () => {
  let [showContent, setShowContent] = useState(false);
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      ease: "Expo.easeInOut",
      opacity: 0,
      delay: -1.8,
      transformOrigin: "50% 50%",
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  });

  useGSAP(() => {
    const main = document.querySelector(".main");
    main?.addEventListener("mousemove", function (e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".imagesdiv  .text", {
        x: `${xMove * 0.4}%`,
      });
      gsap.to(".sky", {
        x: xMove,
      });
    });
  }, [showContent]);
  return (
    <>
      <div>
        <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
          <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
            <defs>
              <mask id="viMask">
                <rect width="100%" height="100%" fill="black" />
                <g className="vi-mask-group">
                  <text
                    x="50%"
                    y="50%"
                    fontSize="250"
                    textAnchor="middle"
                    fill="white"
                    dominantBaseline="middle"
                    fontFamily="Arial Black"
                  >
                    VI
                  </text>
                </g>
              </mask>
            </defs>
            <image
              href="./bg.png"
              width="100%"
              height="100%"
              preserveAspectRatio="xMidYMid slice"
              mask="url(#viMask)"
            />
          </svg>
        </div>
      </div>
      {showContent && (
        <div className="main w-full">
          <div className="landing  w-full h-screen  bg-black">
            <div className="navbar w-full px-10 py-10 text-white absolute top-0 left-0 z-[10]">
              <div className="logo flex gap-7">
                <div className="lines flex flex-col gap-[10px]">
                  <div className="lines w-20 h-2 bg-white"></div>
                  <div className="lines w-10 h-2 bg-white"></div>
                  <div className="lines w-5 h-2 bg-white"></div>
                  <h3 className="text-9xl -mt-[-8px] leading-none">Rockstar</h3>
                </div>
              </div>
            </div>
            <div className=" imagesdiv overflow-hidden relative h-screen w-full">
              <img
                className="  absolute top-0 left-0   w-full h-full object-cover"
                src="./sky.png"
                alt=""
              />
              <img
                className="  absolute top-0 left-0   w-full h-full object-cover"
                src="./bg.png"
                alt=""
              />
              <div className="text text-white flex flex-col gap-4 absolute top-20 left-1/2 -translate-x-1/2">
                <h1 className="text-[22rem] leading-none -ml-40">grand</h1>
                <h1 className="text-[22rem] leading-none ml-20">theft</h1>
                <h1 className="text-[22rem] leading-none -ml-50">auto</h1>
              </div>
              <img
                className="absolute -bottom-[25%] scale-[1.4] left-1/2 -translate-1/2 "
                src="./girlbg.png"
                alt=""
              />
            </div>
            <div className="btmbar text-white w-full py-15 px-10  bg-gradient-to-t from-black to-transparent absolute bottom-0 left-0">
              <div className="flex gap-4 items-center ">
                <i className=" text-6xl ri-arrow-down-line"></i>
                <h3 className=" text-6xl font-[arial]">Scroll Down</h3>
              </div>
              <img
                className="   absolute top-1/2 left-1/2 -translate-x-1/2 h-[85px] -translate-y-1/2"
                src="./ps5.png"
                alt=""
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
