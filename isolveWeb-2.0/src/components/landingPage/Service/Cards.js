import React from "react";
import { FaPlus } from "react-icons/fa";
import Lottie from "lottie-react";
import communication from "../../../assets/lottie/communication.json";
import securePayment from "../../../assets/lottie/secure-payment.json";
import defineServices from "../../../assets/lottie/define-services.json";

const Cards = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-around items-center w-[100%] h-min-[500px] my-[50px] md:my-[100px] px-0 lg:px-5 pt-10 gap-5 md:gap-0">
        <div className="rotate flex flex-col items-center w-[90%] md:w-[32.5%] border border-[#15B1FE] rounded-xl transition-transform hover:-translate-y-5 hover:bg-slate-800 ease-in-out duration-500 p-4 md:p-6 lg:p-10 md:py-10 lg:py-14">
          <div className="w-[100%] h-[100%] flex justify-center items-center py-3 lg:py-10 overflow-hidden max-h-[280px] max-w-[200px]">
            <Lottie animationData={defineServices} />
          </div>
          <div className="text-white s-font-size-md s-font-size-lg tracking-tight w-[100%]">
            <span className="font-serif font-light">Define</span> Services
          </div>
          <p className="min-h-[60px] sm:min-h-[70px] md:min-h-[110px] lg:min-h-[100px] text-xs lg:text-sm border-b border-[#15B1FE] mt-5 text-[#15B1FE]">
            Our team defines clear and actionable deliverables, ensuring that we
            deliver quality work on time, every time.
          </p>
          <span className="w-[100%]">
            <FaPlus className="plus mt-5" />
          </span>
        </div>
        <div className="rotate flex flex-col items-center w-[90%] md:w-[32.5%] border border-[#15B1FE] rounded-xl transition-transform hover:-translate-y-5 hover:bg-slate-800 ease-in-out duration-500 p-4 md:p-6 lg:p-10 md:py-10 lg:py-14">
          <div className="w-[100%] h-[100%] flex justify-center items-center py-3 lg:py-10 overflow-hidden max-h-[280px] max-w-[200px]">
            <Lottie animationData={communication} />
          </div>
          <div className="text-white s-font-size-md s-font-size-lg tracking-tight w-[100%]">
            <span className="font-serif font-light ">Clear</span> Communication
          </div>
          <p className="min-h-[70px] sm:min-h-[70px] md:min-h-[110px] lg:min-h-[100px] text-xs lg:text-sm border-b border-[#15B1FE] mt-5 pb-5 text-[#15B1FE]">
            We believe that communication is key to any successful project.
            That's why we keep you in the loop every step of the way, so you
            always know what's going on.
          </p>
          <span className="w-[100%]">
            <FaPlus className="plus mt-5" />
          </span>
        </div>
        <div className="rotate flex flex-col items-center w-[90%] md:w-[32.5%] border border-[#15B1FE] rounded-xl transition-transform hover:-translate-y-5 hover:bg-slate-800 ease-in-out duration-500 p-4 md:p-6 lg:p-10 md:py-10 lg:py-14 ">
          <div className="w-[100%] h-[100%] flex justify-center items-center  py-3 lg:py-10 overflow-hidden max-h-[280px] max-w-[200px]">
            <Lottie
              animationData={securePayment}
              style={{ transform: "scale(1.6)" }}
            />
          </div>
          <div className="text-white text-left s-font-size-md s-font-size-lg tracking-tight w-[100%]">
            <span className="font-serif font-light ">Payment</span> Protection
          </div>
          <p className="min-h-[70px] sm:min-h-[70px] md:min-h-[110px] lg:min-h-[100px] text-xs lg:text-sm border-b border-[#15B1FE] mt-5 pb-5 text-[#15B1FE]">
            We provide secure and reliable payment options. Your satisfaction is
            our top priority, and we are committed to providing fair and
            transparent pricing.
          </p>
          <span className="w-[100%]">
            <FaPlus className="plus mt-5" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Cards;
