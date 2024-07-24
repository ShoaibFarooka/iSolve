import React, { useEffect, useRef, useState } from "react";
import "./ContactCard.css";

const ContactCard = () => {

  const sectionRefs = useRef([]);
  const [card, setCard] = useState(false);

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setCard(true);
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
    <div className="min-h-[400px]">
      <div ref={(el) => (sectionRefs.current[0] = el)} className="py-24 bg-blue-300 mx-8 rounded-md box  lg:block hidden">
        {card && 
        <h2 className="text-center animate__animated animate__fadeInRight animate__slow text-[60px] font-size-md font-size-sm leading-none">
        <span className="">Why wait? </span>Unlock the door
      </h2>}
        {card && 
        <h2 className="text-center animate__animated animate__fadeInLeft animate__slow my-2 text-[60px] font-size-md font-size-sm leading-none  flex items-center justify-center">
        to success by <span className=""> </span>
        <span className="border-black mx-3 mt-4 border-2 text-black text-xl mb-2 hover:bg-[#15B1FE] px-4 py-2 rounded-full">
          ordering now
        </span>{" "}
        and letting
      </h2>}
        {card && 
        <h2 className="text-center animate__animated animate__fadeInRight animate__slow text-[60px] font-size-md font-size-sm leading-none">
        us exceed <span className="">your expectations. </span>
      </h2>}
      </div>
      <div className="lg:hidden box bg-blue-300 rounded-sm">
        <h2 className="text-xl text-center">
          Why wait? Unlock the door to success by ordering now and letting us
          exceed your expectations.
        </h2>
        <button className="border-black mx-auto text-center flex mt-4 border-2 text-black text-md mb-2 hover:bg-[#15B1FE] px-4 py-2 rounded-full">
            order now
          </button>
      </div>
    </div>
  );
};

export default ContactCard;
