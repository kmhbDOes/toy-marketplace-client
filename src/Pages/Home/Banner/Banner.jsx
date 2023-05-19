import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "./Slider";

const Banner = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS library

    // Clean up the AOS library on component unmount
    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <div>
      <h1 data-aos="fade-up">Hello, AOS!</h1>
      <p data-aos="zoom-in" data-aos-delay="100">
        This is a paragraph with AOS animation.
      </p>
      <div data-aos="flip-left" data-aos-duration="2000">
        <img
          src="https://assetscdn1.paytm.com/images/catalog/product/K/KI/KIDLIMOUSINE-DISKSE1140676506C2066/1565610984539_0..jpg"
          alt="AOS Animation"
        />
      </div>
      <Slider></Slider>
    </div>
  );
};

export default Banner;
