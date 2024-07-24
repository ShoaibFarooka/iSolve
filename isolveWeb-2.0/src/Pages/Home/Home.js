import React, { useEffect } from "react";
import Banner from "../../components/landingPage/Banner/Banner";
import Service from "../../components/landingPage/Service/Service";
import Tickers from "../../components/landingPage/Tickers/Tickers";
import IntroHeader from "../../components/landingPage/Intro/IntroHeader";
import FAQ from "../../components/landingPage/FAQ/FAQ";
import RBTL from "../../components/landingPage/read-btw-lines/RBTL";
import UnleashVision from "../../components/landingPage/unleash-vision/UnleashVision";

const Home = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);
  return (
    <div className="bg-slate-900">
      <Banner></Banner>
      <Service></Service>
      <Tickers />
      <IntroHeader />
      <FAQ />
      <RBTL />
      <UnleashVision />
    </div>
  );
};

export default Home;
