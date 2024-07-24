import React from "react";
import   './ContactBanner.css';

const ContactBanner = () => {
  return (
    <div className="lg:min-h-[700px] bg-[#c6deff] ">
      <div className="mx-auto hidden lg:block pt-44 lg:w-[90%]">
        <h2 className="lg:ml-40 fade-out-from-right animate__slow text-md lg-font-size-lg lg-font-size-md lg-font-size-sm font-size-md font-size-sm leading-none">
        Get in <span className="font-[PolySans] text-[#15B1FE]">touch </span> today and let's 
        </h2>
        <h2 className=" fade-out-from-right animate__slow lg-font-size-lg lg-font-size-md lg-font-size-sm font-size-md font-size-sm leading-none">
        bring your vision to <span className="font-[PolySans] text-[#15B1FE]">life! </span>
        </h2>
      </div>
      <div className="lg:hidden pt-24 w-[80%]">
        <h2 className="text-3xl ml-6">Get in <span className=" text-[#15B1FE]">touch </span> today and let's
bring your vision to <span className=" text-[#15B1FE]">life! </span></h2>
      </div>
      <div className="lg:flex justify-between w-[90%] ml-6 lg:mx-auto mt-6 lg:mt-[100px]">
        <div className="w-[50%]">
          <h2 className="lg:text-2xl text-xl">Contact form</h2>
          <h2 className="lg:text-3xl hidden lg:block mt-8 ">
          Partner with us to leverage collective expertise, resources, and achieve remarkable results.
          </h2>
          <h2 className="lg:hidden text-md mt-6">
            Partner with us to leverage collective expertise,
resources, and achieve remarkable results.
          </h2>
        </div>
        <div>
          <h2 className="text-2xl"> </h2>
          <h2 className="lg:text-3xl underline hover:no-underline text-2xl mt-8 hover-underline-animation"><a href="mailto:info@itsolve.be">info@itsolve.be</a> </h2><br />
          <h2 className="lg:text-3xl underline hover:no-underline text-2xl hover-underline-animation mt-0"><a href="tel:+32468242285">+32 468 24 22 85</a></h2>
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;
