import React from "react";
import icon from '../../assets/LogoWhite.png';

const AboutTitle = () => {
  return (
    <div className=" text-white lg:px-16 px-6">
      <div className="lg:flex hidden items-center ">
        <h2 className="text-xl w-[30%]">About</h2>
        <hr className="border w-[70%] border-white" />
      </div>
      <div className="lg:hidden">
        <hr className="border border-white" />
      <h2 className="text-xl py-12">About</h2>
      </div>
      <h2 className="text-4xl lg:text-7xl pt-12 lg:w-3/4 leading-tight">
        We offer cutting-edge <span className=" text-[#15B1FE]">services </span> for anyone seeking <img className="w-[10%] inline" src={icon} alt="icon" /> reliable <span className=" text-[#15B1FE]">solutions</span>,
        empowering them to make informed <span className=" text-[#15B1FE]">choices.</span>
      </h2>
    </div>
  );
};

export default AboutTitle;
