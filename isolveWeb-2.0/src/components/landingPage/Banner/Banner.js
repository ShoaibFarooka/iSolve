import React, { useState } from "react";
import "../style/fontsize.css";
import { Typewriter } from "react-simple-typewriter";
import Stats from "./Stats";
import "../style/transitions.css";
import { BsSearch } from "react-icons/bs";
import BgLineAnimation from "./BgLineAnimation";

const Banner = () => {
  const [service, setService] = useState();

  return (
    <div className="relative bg-slate-900">
      <div className="absolute top-[500px] md:top-[400px] w-[100%]">
        <BgLineAnimation />
      </div>
      <div className="relative container-fluid flex flex-col items-center text-white h-[100%] w-[100%] pt-32 md:pt-40 z-20">
        <h2 className="text-center fade-out-from-left lg-font-size-lg lg-font-size-md lg-font-size-sm leading-none z-0 tracking-tight">
          <span className="text-[#15B1FE] font-serif font-light">
            Together,
          </span>{" "}
          <span className="font-sans">we </span>
        </h2>
        <h2 className="text-center fade-out-from-right font-serif lg-font-size-lg lg-font-size-md lg-font-size-sm leading-none z-0 tracking-tight">
          {" "}
          <span className="font-sans font-normal">make dreams come</span>{" "}
          <span className="text-[#15B1FE] font-serif font-light">true.</span>
        </h2>
        <form className="w-[90%] md:w-[50%] lg:w-[30%] w-max-[400px]">
          <div className="text-2xl text-center mt-5">
            <span>Looking for a</span>
            <span className="inline-block text-white mt-1 ml-2">
              <Typewriter
                words={[
                  "website?",
                  "logo?",
                  "graphic design?",
                  "digital service?",
                  "marketing expert?",
                  "writer?",
                  "photography?",
                  "video?",
                  "animation?",
                  "motion design?",
                  "promo video?",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </div>
          <div className="flex justify-center bg-white rounded-full mt-5 px-2 sm:w-min-[300px] md:min-w-[350px]">
            <input
              type="search"
              value={service}
              className="text-black px-5 py-3  w-[100%] text-slate-900 outline-none rounded-full"
              placeholder="What service are you looking for?"
              onChange={(e) => setService(e.target.value)}
            />
            <button>
              <BsSearch className="text-slate-900 hover:scale-125 duration-300 ease-in-out mr-5" />
            </button>
          </div>
        </form>
        <button className="text-center text-black text-lg mx-auto mt-12 flex bg-slate-900 px-6 py-3 rounded-full text-white border-2 border-white hover:scale-105 hover:duration-500">
          <span className="font-sans font-normal">Let's work together</span>
        </button>
      </div>
      <Stats />
    </div>
  );
};

export default Banner;
