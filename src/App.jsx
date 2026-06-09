import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

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
            <div className="navbar w-full px-10 py-10 bg-amber-700 absolute top-0 left-0 z-[10]"></div>
            <div className=" imagesdiv relative h-screen w-full">
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
              <img
                className="absolute -bottom-[25%] scale-[1.4] left-1/2 -translate-1/2 "
                src="./girlbg.png"
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
