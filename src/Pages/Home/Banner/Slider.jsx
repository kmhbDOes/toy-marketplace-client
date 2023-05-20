import React, { useState, useEffect } from "react";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Adjust the delay (in milliseconds) between each slide transition

    return () => {
      clearInterval(timer); // Clean up the timer on component unmount
    };
  }, []);

  const slides = [
    {
      id: "slide1",
      imageSrc:
        "https://www.lego.com/cdn/cs/set/assets/bltf73564a058fa0425/42151.png",
    },
    {
      id: "slide2",
      imageSrc:
        "https://www.lego.com/cdn/cs/set/assets/blt98ab23663c973e9b/42123.jpg",
    },
    // Add more slides as needed
  ];

  return (
    <div className="carousel w-96">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          id={slide.id}
          className={`carousel-item relative w-full ${
            currentSlide === index ? "block" : "hidden"
          }`}
        >
          <img src={slide.imageSrc} className="w-full" alt="" />
        </div>
      ))}
    </div>
  );
};

export default Slider;
