import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";

const AboutCard = () => {
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
    <div className="min-h-[400px] text-white">
      <div
        ref={(el) => (sectionRefs.current[0] = el)}
        className="py-32 bg-slate-900 mx-8 rounded-md box  lg:block hidden"
      >
        {card && (
          <h2 className="text-center animate__animated animate__fadeInRight animate__slow text-[60px] font-size-md font-size-sm leading-none">
            To learn more
          </h2>
        )}
        {card && (
          <h2 className="text-center animate__animated animate__fadeInLeft animate__slow my-2 text-[60px] font-size-md font-size-sm leading-none  flex items-center justify-center">
            about us, <span className=""> </span>
            <span className="border-white mx-3 mt-4 border-2 text-xl mb-2 hover:bg-[#15B1FE] px-4 py-2 rounded-full">
              <Link to="/contact">Get in touch</Link>
            </span>{" "}
            today and
          </h2>
        )}
        {card && (
          <h2 className="text-center animate__animated animate__fadeInRight animate__slow text-[60px] font-size-md font-size-sm leading-none">
            meet our experts.
          </h2>
        )}
      </div>
      <div className="lg:hidden box bg-slate-900 text-white rounded-sm">
        <h2 className="text-xl text-center">
          To learn more about us, Get in touch today and meet our experts.
        </h2>
        <button className="border-white mx-auto text-center flex mt-4 border-2 text-md mb-2 hover:bg-[#15B1FE] px-4 py-2 rounded-full">
          <Link to="/contact">Get in touch</Link>
        </button>
      </div>
    </div>
  );
};

export default AboutCard;
