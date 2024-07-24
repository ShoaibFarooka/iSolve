import React, { useState, useEffect } from "react";
import { FaAngleDown } from "react-icons/fa";

const HamMenu = ({ icon, set_icon, toggle1, toggle2,isclosed }) => {
  const [services, setServices] = useState(false);
  const [itsolve, setITsolve] = useState(false);
  useEffect(() => {
    if(isclosed)
    {
      setServices(false);
      setITsolve(false);
    }
  });

  const toggleServices = () => {
    console.log("Toggle Services, current value is: ", services);
    if (!services) {
      set_icon(true);
      toggle1(true);
      toggle2(false);
    } else {
      toggle1(false);
    }
    setServices(!services);
    setITsolve(false);
  };

  const toggleITSolve = () => {
    if (!itsolve) {
      set_icon(true);
      toggle2(true);
      toggle1(false);
    } else {
      toggle2(false);
    }
    setITsolve(!itsolve);
    setServices(false);
  };

  return (
    <>
      <div
        className={
          icon
            ? "conatiner-fluid z-30 absolute top-0 left-0 w-[100%] h-[100vh] bg-slate-950 transition-transform ease-in-out duration-1000 -translate-y-full"
            : "conatiner-fluid z-30 absolute top-0 left-0 w-[100%] h-[100vh] bg-slate-950 transition-transform ease-in-out duration-1000 translate-y-0"
        }
      >
        <ul className="mt-[100px] text-white w-[100%]">
          <div onClick={toggleServices}>
            <li className="flex justify-between items-center w-[100%] p-5">
              <span className="text-2xl">Servcies</span>
              <FaAngleDown
                className={
                  !services
                    ? "transition-transform ease-in-out rotate-0 duration-700"
                    : "transition-transform ease-in-out rotate-180 duration-700"
                }
              />
            </li>
          </div>

          <li
            className="flex justify-between items-center w-[100%] p-5"
            onClick={toggleITSolve}
          >
            <span className="text-2xl">itsolve</span>
            <FaAngleDown
              className={
                !itsolve
                  ? "transition-transform ease-in-out rotate-0 duration-700"
                  : "transition-transform ease-in-out rotate-180 duration-700"
              }
            />
          </li>
          <li className="p-5">
            <span className="text-2xl">contact</span>
          </li>
          <li className="flex justify-between items-center w-[100%] p-5">
            <span className="text-2xl">en</span>
            <FaAngleDown />
          </li>
        </ul>
      </div>
    </>
  );
};

export default HamMenu;
