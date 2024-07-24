import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import Graphics from "../../../assets/lottie/Graphic&Design.json";
import Video from "../../../assets/lottie/video.json";
import Programming from "../../../assets/lottie/programming.json";
import "./DropDown.css";

const DropDowns = ({ services, itsolve, fun }) => {
  const [Ismobile, setIsmobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 775) {
      setIsmobile(true);
    }
  }, []);
  function closebar() {
    console.log("Close bar");
    fun(false);
  }
  return (
    <>
      {Ismobile ? (
        <div>
          <div
            className={
              !services
                ? "z-40 fixed top-0 left-0 w-[100%] h-[100vh] min-h-[570px] bg-slate-900 transition-transform ease-in-out duration-700 -translate-y-full"
                : "z-40 fixed top-0 left-0 w-[100%] h-[100vh] min-h-[570px] bg-slate-900 transition-transform ease-in duration-700 delay-200 translate-y-0"
            }
          >
            <div className="ServicesBar">
              <div className=" h-[70%] w-[32%] border border-[#15B1FE] rounded-xl transition-transform hover:-translate-y-3 hover:bg-slate-800 ease-in-out duration-500 p-6 graphics">
                <div className="text-white s-font-size-md s-font-size-lg tracking-tight">
                  Graphic & Design
                </div>
                <div className="w-[100%] h-[60%] flex justify-center items-center py-3 lg:py-10 overflow-hidden ">
                  <Lottie
                    animationData={Graphics}
                    className="animationW w-[70%]"
                  />
                </div>
              </div>
              <div className="h-[70%] w-[32%] border border-[#15B1FE] rounded-xl transition-transform hover:-translate-y-3 hover:bg-slate-800 ease-in-out duration-500 p-6 graphics">
                <div className="text-white s-font-size-md s-font-size-lg tracking-tight">
                  Programming & IT
                </div>
                <div className="w-[100%] h-[100%] flex justify-center items-center py-3 lg:py-10 overflow-hidden">
                  <Lottie
                    animationData={Programming}
                    className="animationW w-[70%]"
                  />
                </div>
              </div>
              <div className="h-[70%] w-[32%] border border-[#15B1FE] rounded-xl transition-transform hover:-translate-y-3 hover:bg-slate-800 ease-in-out duration-500 p-6 graphics">
                <div className="text-white s-font-size-md s-font-size-lg tracking-tight">
                  Video & Animation
                </div>
                <div className="w-[100%] h-[100%] flex justify-center items-center py-3 lg:py-10 overflow-hidden">
                  <Lottie
                    animationData={Video}
                    className="animationW w-[70%]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              !services
                ? "z-30 fixed top-0 left-0 w-[100%] h-[100vh] min-h-[650px] bg-blue-200 transition-transform ease-in-out duration-700 -translate-y-full"
                : "z-30 fixed top-0 left-0 w-[100%] h-[100vh] min-h-[650px] bg-blue-200 transition-transform ease-in duration-700 translate-y-0"
            }
          >
            <div className="absolute bottom-8 left-16 flex items-center ">
              <span className="text-slate-900 text-3xl font-sans">
                Discover all services
              </span>
              <button className="bg-[#15B1FE] text-white text-lg px-5 py-2 ml-5 rounded-full">
                Order here
              </button>
            </div>
          </div>
          <div
            className={
              !itsolve
                ? "z-40 fixed top-0 left-0 w-[100%] h-[80vh] bg-slate-900 transition-transform ease-in-out duration-700 -translate-y-full flex justify-center"
                : "z-40 fixed top-0 left-0 w-[100%] h-[70vh] bg-slate-900 transition-transform ease-in duration-700 translate-y-0 flex justify-center delay-200"
            }
          >
            <div className=" itsolveMenu ">
              <div className="w-[97%] ">
                <div className="list-container bottom-10 w-[100%] overflow-hidden ">
                  <ul className="w-[97%] list_solve ">
                      <li className="w-[100%] mx-10 mb-2">
                        <Link
                          className="block w-[85%]  text-white hover:text-[#15B1FE] "
                          onClick={closebar}
                          to="/about"
                        >
                          About
                        </Link>
                      </li>
                      <li className="w-[100%] mx-10 mb-2">
                        <Link
                          className="block w-[85%]  text-white hover:text-[#15B1FE]  "
                          onClick={closebar}
                          to=""
                        >
                          Clients
                        </Link>
                      </li>
                    <li className="w-[100%] mx-10 mb-2">
                      <Link
                        className="block w-[85%]  text-white hover:text-[#15B1FE]  "
                        onClick={closebar}
                        to=""
                      >
                        Team
                      </Link>
                    </li>
                    <li className="w-[100%] mx-10 mb-2">
                      <Link
                        className="block w-[85%]  text-white hover:text-[#15B1FE]  "
                        onClick={closebar}
                        to="/careers"
                      >
                        Careers
                      </Link>
                    </li>
                    <li className="w-[100%] mx-10 mb-2">
                      <Link
                        className="block w-[85%]  text-white hover:text-[#15B1FE]  "
                        onClick={closebar}
                        to=""
                      >
                        Blog
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div
            className={
              !services
                ? "z-40 fixed top-0 left-0 w-[100%] h-[87vh] min-h-[570px] bg-slate-900 transition-transform ease-in-out duration-700 -translate-y-full"
                : "z-40 fixed top-0 left-0 w-[100%] h-[87vh] min-h-[570px] bg-slate-900 transition-transform ease-in duration-700 delay-200 translate-y-0"
            }
          >
            <div className=" flex justify-around w-[100%] h-[100%] mt-[140px] px-14 service">
              <div className=" h-[70%] w-[32%] border border-[#15B1FE] rounded-xl transition-transform hover:-translate-y-5 hover:bg-slate-800 ease-in-out duration-500 p-6 graphics">
                <div className="text-white s-font-size-md s-font-size-lg tracking-tight">
                  Graphic & Design
                </div>
                <div className="w-[100%] h-[100%] flex justify-center items-center py-3 lg:py-10 overflow-hidden ">
                  <Lottie animationData={Graphics} className="w-[70%]" />
                </div>
              </div>
              <div className="h-[70%] w-[32%] border border-[#15B1FE] rounded-xl transition-transform hover:-translate-y-5 hover:bg-slate-800 ease-in-out duration-500 p-6">
                <div className="text-white s-font-size-md s-font-size-lg tracking-tight">
                  Programming & IT
                </div>
                <div className="w-[100%] h-[100%] flex justify-center items-center py-3 lg:py-10 overflow-hidden">
                  <Lottie animationData={Programming} className="w-[70%]" />
                </div>
              </div>
              <div className="h-[70%] w-[32%] border border-[#15B1FE] rounded-xl transition-transform hover:-translate-y-5 hover:bg-slate-800 ease-in-out duration-500 p-6">
                <div className="text-white s-font-size-md s-font-size-lg tracking-tight">
                  Video & Animation
                </div>
                <div className="w-[100%] h-[100%] flex justify-center items-center py-3 lg:py-10 overflow-hidden">
                  <Lottie animationData={Video} className="w-[70%]" />
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              !services
                ? "z-30 fixed top-0 left-0 w-[100%] h-[100vh] min-h-[650px] bg-blue-200 transition-transform ease-in-out duration-700 -translate-y-full"
                : "z-30 fixed top-0 left-0 w-[100%] h-[100vh] min-h-[650px] bg-blue-200 transition-transform ease-in duration-700 translate-y-0"
            }
          >
            <div className="absolute bottom-8 left-16 flex items-center">
              <span className="text-slate-900 text-3xl font-sans">
                Discover all services
              </span>
              <button className="bg-[#15B1FE] text-white text-lg px-5 py-2 ml-5 rounded-full">
                Order here
              </button>
            </div>
          </div>
          <div
            className={
              !itsolve
                ? "z-40 fixed top-0 left-0 w-[100%] h-[80vh] bg-slate-900 transition-transform ease-in-out duration-700 -translate-y-full flex justify-center"
                : "z-40 fixed top-0 left-0 w-[100%] h-[80vh] bg-slate-900 transition-transform ease-in duration-700 translate-y-0 flex justify-center delay-200"
            }
          >
            <div className="h-[100%] w-[100%] ">
              <div className="  w-[100%]">
                <div className=" bottom-10 w-[100%]">
                  <ul className=" list_solve_desktop">
                    <li className=" mx-10 mb-3">
                      <Link
                        className="block w-[85%]  text-white hover:text-[#15B1FE]  "
                        onClick={closebar}
                        to="/about"
                      >
                        About
                      </Link>
                    </li>
                    <li className="mx-10 mb-3">
                      <Link
                        className="block w-[85%]  text-white hover:text-[#15B1FE]  "
                        onClick={closebar}
                        to=""
                      >
                        Clients
                      </Link>
                    </li>

                    <li className="mx-10 mb-3">
                      <Link
                        className="block w-[85%]  text-white hover:text-[#15B1FE]  "
                        onClick={closebar}
                        to=""
                      >
                        Team
                      </Link>
                    </li>
                    <li className="mx-10 mb-3">
                      <Link
                        className="block w-[85%]  text-white hover:text-[#15B1FE]  "
                        onClick={closebar}
                        to="careers"
                      >
                        Careers
                      </Link>
                    </li>

                    <li className="mx-10 mb-3">
                      <Link
                        className="block w-[85%]  text-white hover:text-[#15B1FE]  "
                        onClick={closebar}
                        to=""
                      >
                        Blog
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              !itsolve
                ? "z-30 fixed top-0 left-0 w-[100%] h-[100vh] min-h-[650px] bg-blue-200 transition-transform ease-in-out duration-700  -translate-y-full opacity-20"
                : "z-30 fixed top-0 left-0 w-[100%] h-[100vh] min-h-[650px] bg-blue-200 transition-transform ease-in duration-700 translate-y-0 opacity-20"
            }
          >
            <div className="absolute bottom-8 left-16 flex items-center"></div>
          </div>
        </div>
      )}
    </>
  );
};

export default DropDowns;
