import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useRef } from 'react';

const CareerCard = () => {
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
        Seeking a different 
      </h2>}
        {card && 
        <h2 className="text-center animate__animated animate__fadeInLeft animate__slow my-2 text-[60px] font-size-md font-size-sm leading-none  flex items-center justify-center">
         career path? <span className=""> </span>
        <span className="border-black mx-3 mt-4 border-2 text-black text-xl mb-2 hover:bg-[#15B1FE] px-4 py-2 rounded-full">
        Let's connect
        </span>{" "}
        Success
      </h2>}
        {card && 
        <h2 className="text-center animate__animated animate__fadeInRight animate__slow text-[60px] font-size-md font-size-sm leading-none">
         starts with talent.
      </h2>}
      </div>
      <div className="lg:hidden box bg-blue-300 rounded-sm">
        <h2 className="text-xl text-center">
        Seeking a different
career path?
Success
starts with talent.
        </h2>
        <button className="border-black mx-auto text-center flex mt-4 border-2 text-black text-md mb-2 hover:bg-[#15B1FE] px-4 py-2 rounded-full">
        Let's connect
          </button>
      </div>
    </div>
    );
};

export default CareerCard;