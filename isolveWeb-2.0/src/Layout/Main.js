import React from "react";
import Header from "../components/landingPage/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <div className="mb-[550px]">
      <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
