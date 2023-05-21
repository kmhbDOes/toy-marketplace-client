import React, { useEffect, useState } from "react";
import SectionOne from "../../ExtraSections/SectionOne";
import SectionTwo from "../../ExtraSections/SectionTwo";
import Banner from "../Banner/Banner";
import Tabs from "../Tabs/Tabs";
import Spinner from "../../Shared/Spinner";

const Home = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <>
      {loading ? (
        <Spinner></Spinner>
      ) : (
        <>
          <Banner></Banner>
          <Tabs></Tabs>
          <div className="my-24">
            <SectionOne></SectionOne>
          </div>
          <div>
            <SectionTwo></SectionTwo>
          </div>
        </>
      )}
    </>
  );
};

export default Home;
