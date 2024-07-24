import React, { useEffect, useState } from "react";
import ClientChat from "../../../assets/ClientChat.png";
import logo from "../../../assets/LogoWhite.png";
import "../style/transitions.css";
import BgLineAnimation from "./BgLineAnimation";

const Stats = () => {
  const [sizeX, setSizeX] = useState(332);
  const [sizeY, setSizeY] = useState(512);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const width = window.innerWidth;
      if (scrollPosition > 500 && scrollPosition < 950 && width - 400 > sizeY) {
        const newSizeX = sizeX + (scrollPosition - 500) * 0.832;
        const newSizeY = sizeY + (scrollPosition - 500) * 1.28;

        setSizeX(newSizeX);
        setSizeY(newSizeY);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const scroll = () => {
      const item = document.querySelector(".main-div");
      const scrollPosition = window.scrollY;

      if (scrollPosition < 1800) {
        item.style.transform = `translateY(${scrollPosition * 0.4}px)`;
      }

      if (scrollPosition > 800) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", scroll);
    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, []);

  return (
    <div className="relative container-fluid flex justify-center lg:h-[1450px] z-20">
      <div className="relative w-[95%] mt-18 mt-8 flex justify-center">
        <p className="slogan absolute left-0 top-0 block w-[95%] md:w-[28%] font-sans text-sm ms:text-md text-[#15B1FE] text-center md:text-left">
          At itsolve safety is our top priority, delivering services with utmost
          quality. Our commitment shines through, day and night. Ensuring a
          better & reliable system, leaving competitors out of sight.
        </p>
        <div
          className="relative main-div flex flex-col hidden lg:block p-10 border border-[#15B1FE] rounded-xl bg-slate-900 overflow-hidden"
          style={{ width: sizeY, height: sizeX }}
        >
          <div className="absolute top-0 -left-48 w-[150%]">
            <BgLineAnimation />
          </div>
          <div className="w-[100%] h-[10%]">
            <img className="h-[100%]" src={logo} alt="" />
          </div>
          <div
            className={
              show
                ? "flex fade-in gap-10 block py-10 h-[100%]"
                : "hidden fade-out py-5"
            }
          >
            <div className="w-[20%]">
              <h2 className="text-5xl text-[#15B1FE] font-sans font-semibold">
                How it works
              </h2>
              <p className="text-white text-sm pt-5">
                It is very simple to order with our easy to use user interface
                and ordering system, just create a ticket and follow the steps.
              </p>
            </div>
            <div className="w-[80%] h-[100%] overflow-hidden rounded-xl">
              <img
                src={ClientChat}
                alt="cient chat"
                className="object-cover w-[100%]"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col block lg:hidden p-5 md:p-10 border border-[#15B1FE] rounded-xl mt-36 lg:mt-0 h-auto">
          <img className="w-[15%]" src={logo} alt="" />
          <div className="flex fade-in gap-5 md:gap-10 block py-5 sm:py-10 h-auto">
            <div className="w-[20%]">
              <h2 className="text-lg sm:text-3xl md:text-5xl  text-[#15B1FE] font-sans font-semibold">
                How it works
              </h2>
            </div>
            <div className="w-[80%] h-[100%] overflow-hidden rounded-xl">
              <img
                src={ClientChat}
                alt="cient chat"
                className="object-cover w-[100%]"
              />
              <p className="text-white text-xs sm:text-sm md:text-md pt-5 pl-1">
                It is very simple to order with our easy to use user interface
                and ordering system, just create a ticket and follow the steps.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
