import React, { useEffect } from "react";
import AOS from "aos";
import { FaHamburger } from "react-icons/fa";
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
      <div data-aos="flip-left" data-aos-duration="2000">
        {/* Banner */}
        <div className="border-4 border-green-600 rounded-lg flex flex-col-reverse md:flex-row justify-center items-center gap-x-0 md:gap-x-3 gap-y-4 py-8 banner mx-3 w-">
          <div className="text-center md:text-left ml-6 text-xl rounded-lg p-3 text-green-600 opacity-80 ">
            <p>
              <span className=" font-bold text-3xl">
                Explore through thousands of
                <span className="flex justify-center md:justify-start gap-x-1  mx-auto">
                  <span className="animate-pulse">
                    <img
                      className="w-10 h-8 rounded-lg mt-1"
                      src="https://www.lego.com/static/favicon/lego-logo-512.png"
                      alt=""
                    />
                  </span>
                  Model Cars
                </span>
                to live on! <br />
              </span>
              <p className="text-white font-semibold w-96 rounded-lg">
                Quiet, elegant, and unbeatable fuel consumption... Drive away on
                a journey of endless adventure, with our famous array of
                brick-built cars.
              </p>
            </p>
          </div>
          <div>
            <img
              className="w-full md:w-full md:h-96 rounded-lg"
              src="https://i.ibb.co/0K6QLBN/111-removebg-preview.jpg"
              alt=""
            />
          </div>
        </div>
        {/* Gallery */}
        <p className="text-center my-6 text-green-600 font-semibold text-2xl">
          See through our gallery for exciting brick model cars
        </p>
        <Slider></Slider>
      </div>
    </div>
  );
};

export default Banner;
