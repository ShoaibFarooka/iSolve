import React, { useState, useEffect } from "react";
import "animate.css";
import logo from "../../../assets/LogoWhite.png";
import { FaAngleDown, FaBars, FaTimes } from "react-icons/fa";
import HamMenu from "./HamMenu";
import "../style/services.css";
import DropDowns from "./DropDowns";
import { Link } from "react-router-dom";

const Header = () => {
  const [services, setServices] = useState(false);
  const [itsolve, setITsolve] = useState(false);
  const [icon, setIcon] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [header, setHeader] = useState(true);
  const [close,setclose] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setServices(false);
        setITsolve(false);
      }
    };
    handleResize();
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrolledUp = currentScrollPos > prevScrollPos;

      if (isScrolledUp) {
        setServices(false);
        setITsolve(false);
        if (window.pageYOffset > 50) {
          console.log("Scrolled....")
          setclose(true);
          setHeader(false);
        }
      } else {
        setHeader(true);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const toggleServices = () => {
    setServices(!services);
    setITsolve(false);
  };

  const toggleITSolve = () => {
    setITsolve(!itsolve);
    setServices(false);
  };

  const toggleIcon = () => {
    setIcon(!icon);
  };

  return (
    <>
      <div
        className={
          !header
            ? "fixed top-0 left-0 container-fluid h-[90px] w-[100%] z-50 transition-transform ease-in-out duration-500 -translate-y-full"
            : "fixed top-0 left-0 container-fluid h-[90px] w-[100%] z-50 transition-transform ease-in duration-500 translate-y-0"
        }
      >
        <div className="container-fluid w-[100%] flex justify-between items-center bg-none px-5 md:px-16 py-5 nav-container">
          <div className="flexing  h-[35px] md:h-[50px]">
            <Link to="/">
              <img
                className="image cursor-pointer h-[100%]"
                src={logo}
                alt=""
              />
            </Link>
            <div class="bg-slate-700 mantine-Badge-root mantine-1c0777x">
              <span class="mantine-1t45alw mantine-Badge-inner">BETA</span>
            </div>{" "}
          </div>
          <div className="flex text-white items-center justify-center static ">
            <ul className="gap-2 text-lg hidden lg:flex cursor-pointer">
              <li
                className="flex items-center text-[#15B1FE] gap-2 hover:bg-blue-200 py-2 px-4 rounded-md tracking-wide"
                onClick={toggleServices}
              >
                <span className="font-sans font-normal tracking-tight">
                  services
                </span>
                <FaAngleDown
                  className={
                    !services
                      ? "transition-transform ease-in-out rotate-0 duration-700"
                      : "transition-transform ease-in-out rotate-180 duration-700"
                  }
                />
              </li>
              <li
                className="flex items-center text-[#15B1FE] gap-2 hover:bg-blue-200 py-2 px-4 rounded-md tracking-wide"
                onClick={toggleITSolve}
              >
                <span className="font-sans font-normal tracking-tight">
                  itsolve
                </span>
                <FaAngleDown
                  className={
                    !itsolve
                      ? "transition-transform ease-in-out rotate-0 duration-700"
                      : "transition-transform ease-in-out rotate-180 duration-700"
                  }
                />
              </li>
              <li className="py-2 px-4 text-[#15B1FE] gap-2 hover:bg-blue-200 rounded-md tracking-wide">
                <span className="font-sans font-normal tracking-tight">
                  <Link to="/contact">contact</Link>
                </span>
              </li>
              <li className="flex items-center text-[#15B1FE] gap-2 hover:bg-blue-200 py-2 px-4 rounded-md tracking-wide">
                <span className="font-sans font-normal tracking-tight">en</span>
                <FaAngleDown />
              </li>
            </ul>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center login">
              <button className="py-2 px-3 md:px-6 rounded-full font-sans font-medium sm:text-sm text-[#15B1FE] hover:bg-blue-200 mr-2 ">
                Log in
              </button>
              <button className="py-2 px-3 md:px-6  rounded-full  bg-[#15B1FE] text-md sm:text-sm text-white hover:scale-105 hover:duration-300">
                Sign Up
              </button>
            </div>
            <div
              className=" sm:inline-block lg:hidden text-white text-2xl"
              onClick={toggleIcon}
            >
              {icon ? <FaBars /> : <FaTimes />}
            </div>
          </div>
        </div>
      </div>

      {!icon ? <></> : <DropDowns services={services} itsolve={itsolve} fun={setITsolve} />}

      <div className="lg:hidden">
        <HamMenu icon={icon} set_icon={setIcon} toggle1={setServices} toggle2={setITsolve} isclosed={close} />
      </div>
    </>
  );
};

export default Header;
