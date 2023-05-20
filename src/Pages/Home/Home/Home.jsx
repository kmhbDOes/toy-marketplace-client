import React from "react";
import SectionOne from "../../ExtraSections/SectionOne";
import SectionTwo from "../../ExtraSections/SectionTwo";
import Banner from "../Banner/Banner";
import Tabs from "../Tabs/Tabs";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Tabs></Tabs>
      <SectionOne></SectionOne>
      <SectionTwo></SectionTwo>
    </>
  );
};

export default Home;
