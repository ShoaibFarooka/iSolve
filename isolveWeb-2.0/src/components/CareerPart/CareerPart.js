import React from "react";
import { BsArrowRight } from "react-icons/bs";
import arrow from '../../assets/right-arrows.svg';

const CareerPart = () => {
  return (
    <div className=" lg:flex justify-between lg:mx-16 mx-6 mb-24">
      <div className="w-[30%] hidden lg:block">
      <h2 className="text-xl text-[#15B1FE]">Ignite your Career</h2>
      <div className="animate__animated animate__fadeInLeft animate__slow">
      <img src={arrow} className="w-[100%] pt-16 " alt="" />
      </div>
      </div>
      <div className="lg:w-[65%] w-[100%] pt-4">
        <hr className="border border-black" />
        <h2 className="text-xl text-[#15B1FE] pt-8 lg:hidden">Ignite your Career</h2>
        <h2 className="text-3xl lg:hidden pt-4 lg:text-8xl">Opportunities <span className="text-[#15B1FE]">awaiting!</span></h2>
        <h2 className="text-8xl hidden lg:block lg:pt-16">Opportunities </h2>
        <h2 className="text-8xl hidden lg:block font-[PolySans] text-[#15B1FE]">awaiting!</h2>
        <div className=" mx-2 flex justify-between items-center mb-4 mt-12 text-[#15B1FE]">
          <h2 className="text-xl lg:text-2xl col-span-2 w-[100%] lg:w-[55%]">Unlock your potential</h2>
          <h2 className="text-xl hidden lg:block w-[30%]">Start your journey</h2>
          <div className="w-[10%] ">
          <BsArrowRight className="hover:translate-x-3 float-right duration-300 text-[1.50rem]"></BsArrowRight>
          </div>
        </div>
          <hr className=" border-black"/>
        <div className=" mx-2 flex justify-between items-center mb-4 mt-8 text-[#15B1FE]">
          <h2 className="text-xl lg:text-2xl col-span-2 w-[100%] lg:w-[55%]">Join our Team</h2>
          <h2 className="text-xl hidden lg:block w-[30%]">Take the next step</h2>
          <div className="w-[10%] ">
          <BsArrowRight className="hover:translate-x-3 float-right duration-300 text-[1.50rem]"></BsArrowRight>
          </div>
        </div>
          <hr className=" border-black"/>
          <h2 className="mt-12 text-sm lg:text-xl mx-2">Nothing available? <a className="text-[#15B1FE] underline pb-0" href="/">Let's connect</a> anyway!</h2>
      </div>
    </div>
  );
};

export default CareerPart;
