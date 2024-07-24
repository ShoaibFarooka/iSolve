import React from "react";
import FooterLogo from "../FooterLogo/FooterLogo";
import FooterList from "../FooterList/FooterList";
import "./footer.css";
import img from "../../assets/Vector_ITSolve.svg";

const Footer = () => {
  return (
    <div
      className="bg-slate-900 max-h-[700px] fixed-content "
      style={{ backgroundImage: `{url("https://via.placeholder.com/500")}` }}
    >

      <FooterLogo></FooterLogo>
      <FooterList></FooterList>
    </div>
  );
};

export default Footer;
// fixed-content
