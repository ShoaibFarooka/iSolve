import React from "react";
import quality from "../../assets/quality.svg";
import reality from "../../assets/reality.svg";
import creativity from "../../assets/creativity.svg";

const AboutThreeCard = () => {
  return (
    <div className="text-white px-6 lg:px-16 pt-24">
      <h2 className="text-3xl lg:text-6xl">We Offer You...</h2>
      <div className="lg:flex justify-between items-center gap-8 pt-12 lg:pt-24">
        <div className="pb-8 lg:pb-0">
          <img src={quality} alt="quality" />
          <h2 className="w-[80%] pt-8">
            We are committed to delivering the highest quality services to our
            clients, with attention to detail and a focus on exceeding
            expectations.
          </h2>
        </div>
        <div className="pb-8 lg:pb-0">
          <img src={reality} alt="reality" />
          <h2 className="w-[80%] pt-8">
            We pride ourselves on providing practical and realistic solutions
            that meet the needs of our clients and deliver measurable results.
          </h2>
        </div>
        <div className="">
          <img src={creativity} alt="creativity" />
          <h2 className="w-[90%] pt-8">
            Our team of experts is dedicated to thinking outside the box and
            pushing the boundaries of what's possible, to deliver innovative and
            creative solutions.
          </h2>
        </div>
      </div>
      <div className="lg:flex hidden flex-col items-end justify-end pt-16">
        <h2 className="text-4xl w-[60%]">
          <span className="text-slate-900">...</span> With the guidance of our
          seasoned professionals, we streamline the service experience by
        </h2>
        <h2 className="text-4xl w-[60%] ">
          crafting advanced, tailored solutions to assist our clients in making
          optimal decisions promptly.
        </h2>
      </div>
      <div className="text-2xl lg:hidden py-12">
        <span className="text-slate-900">...</span>With the guidance of our
        seasoned professionals, we streamline the service experience by crafting
        advanced, tailored solutions to assist our clients in making optimal
        decisions promptly.
      </div>
    </div>
  );
};

export default AboutThreeCard;
