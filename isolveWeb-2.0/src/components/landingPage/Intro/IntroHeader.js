import React, { useState, useEffect, useRef } from "react";
import "../style/transitions.css";
import Slider from "./Slider";
import Lottie from "lottie-react";
import Checklist from "../../../assets/lottie/Checklist.json";

const IntroHeader = () => {
  const sectionRefs = useRef([]);
  const [service, setService] = useState(false);

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setService(true);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection);

    sectionRefs.current.forEach((ref) => {
      observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div className="flex justify-center items-center container-fluid flex flex-col items-center text-white bg-slate-100 h-[100%] w-[100%] pt-28 md:py-28 rounded-xl">
        <div
          className="container-fluid w-[95%] md:w-[90%]  border-b border-b-slate-900 pb-16"
          ref={(el) => (sectionRefs.current[0] = el)}
        >
          {service && (
            <h2 className="text-center fade-out-from-right md-font-size-lg md-font-size-md md-font-size-sm leading-none z-0 tracking-tight">
              <span className="font-sans text-slate-900">
                Ready to level up your{" "}
              </span>
              <span className="text-[#15B1FE] font-serif font-light underline underline-offset-8">
                idea
              </span>
            </h2>
          )}
          {service && (
            <h2 className="text-center fade-out-from-left font-serif md-font-size-lg md-font-size-md md-font-size-sm leading-none z-0 tracking-tight">
              {" "}
              <span className="font-sans font-normal text-slate-900">
                and make them a{" "}
              </span>{" "}
              <span className="text-[#15B1FE] font-serif font-light  underline underline-offset-8">
                reality
              </span>
            </h2>
          )}
          <h3 className="text-xl md:text-2xl lg:text-3xl text-slate-900 text-center mt-10">
            We are humans collaborating with humans
          </h3>
        </div>
        <div className="flex flex-col md:flex-row justify-start w-100 py-5 md:py-20 px-5 md:px-20 max-w-[1500px]">
          <div className="w-[95%] md:w-[50%]">
            <ul className="flex flex-col gap-5 justify-start items-start">
              <li className="flex gap-5 items-center">
                <div className="w-[40px] ">
                  <Lottie animationData={Checklist} />
                </div>
                <p className="text-md text-slate-900">
                  Collaborative approach to fully realize your vision.
                </p>
              </li>
              <li className="flex gap-5 items-center">
                <div className="w-[40px]">
                  <Lottie animationData={Checklist} />
                </div>
                <p className="text-md text-slate-900">
                  Innovative and practical solutions using the latest
                  technology.
                </p>
              </li>
              <li className="flex gap-5 items-center">
                <div className="w-[40px]">
                  <Lottie animationData={Checklist} />
                </div>
                <p className="text-md text-slate-900">
                  Clear communication and transparency throughout project.
                </p>
              </li>
            </ul>
          </div>
          <div className="w-[95%] md:w-[60%] px-3 md:px-10">
            <h4 className="text-md md:text-xl lg:text-3xl text-slate-900 leading-none mt-10 md:mt-0 font-sans">
              Whether you have a new business venture or an existing project
              that needs a fresh perspective, we have the expertise and
              resources to take your ideas to the next level.
            </h4>
          </div>
        </div>
      </div>
      <Slider />
    </>
  );
};

export default IntroHeader;
