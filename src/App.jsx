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
    if (!showContent) return;
    gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-1",
      ease: "Expo.eaesInOut",
    });
    gsap.to(".sky", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.eaesInOut",
    });

    gsap.to(".bg", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-1",
      ease: "Expo.eaesInOut",
    });

    gsap.to(".character", {
      x: "-50%",
      scale: 1.4,
      rotate: 0,
      //bottom:"-25%",
      duration: 2,
      delay: "-1",
      ease: "Expo.eaesInOut",
    });
    gsap.to(".text", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-1",
      ease: "Expo.eaesInOut",
    });
    const main = document.querySelector(".main");
    main?.addEventListener("mousemove", function (e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".imagesdiv  .text", {
        x: `${xMove * 0.4}%`,
      });
      gsap.to(".sky", {
        x: xMove,
      });
      gsap.to(".bg", {
        x: xMove * 1.7,
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
        <div className="main w-full    rotate-[-10deg ] scale-[1.7]">
          <div className="landing overflow-hidden relative w-full h-screen  bg-black">
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
                className="  sky absolute top-0 left-0  scale-[1.5] rotate-[-20deg]  w-full h-full object-cover"
                src="./sky.png"
                alt=""
              />
              <img
                className=" bg scale-[1.8] rotate-[-3deg] absolute top-0 left-0   w-full h-full object-cover"
                src="./bg.png"
                alt=""
              />
              <div className="text text-white flex flex-col gap-4 absolute top-20 scale-[1.4] rotate-[-10deg] left-1/2 -translate-x-1/2">
                <h1 className="text-[22rem] leading-none -ml-40">grand</h1>
                <h1 className="text-[22rem] leading-none ml-20">theft</h1>
                <h1 className="text-[22rem] leading-none -ml-50">auto</h1>
              </div>
              <img
                className="absolute character -bottom-[24.5%] scale-[3] rotate-[-20deg] left-1/2 -translate-1/2 "
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
          <div className="w-full h-screen flex flex items-center justify-center  bg-black">
            <div className="cntnr flex text-white w-full h-[80%] ">
              <div className="limg relative w-1/2 h-full">
                <img
                  className=" absolute scale-[2] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  src="./imag.png"
                  alt=""
                />
              </div>
              <div className="rg w-[30%] py-30">
                <h1 className="text-9xl">Still Hunting, </h1>
                <h1 className="text-9xl">Not Running</h1>
                <p className="mt-10 text-3xl font-[Arial]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Soluta totam laboriosam aliquam, provident error non
                  laudantium temporibus maxime, dolorem odit id exercitationem
                  aperiam.
                </p>
                <p className="mt-5 text-3xl font-[Arial]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Molestiae voluptatum dolorum ex, magni optio id ratione
                  doloremque quas culpa eveniet eius quidem aliquam atque vero
                  repudiandae quod quis, saepe reiciendis ullam nulla
                  reprehenderit nihil inventore.
                </p>
                <p className="mt-10 text-3xl font-[Arial]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Molestiae voluptatum dolorum ex, magni optio id ratione
                  doloremque quas culpa eveniet eius quidem aliquam atque vero
                  repudiandae quod quis, saepe reiciendis ullam nulla
                  reprehenderit nihil inventore.
                </p>
                <button className="bg-yellow-500 px-10 py-10 text-black mt-15 text-6xl">
                  Download Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
