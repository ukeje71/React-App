import React from "react";
import Header from "../components/Header";
import About from "../components/About";
import Service from "../components/Service";
import Venues from "../components/Venues";
import Moreservices from "../components/Moresevices";
import Testimonies from "../components/Testimonies";

const HomePage = () => {
  return (
    <>
      <Header />
      <About />
      <Service />
      <Venues />
      <Moreservices />
      <Testimonies/>
    </>
  );
};

export default HomePage;
