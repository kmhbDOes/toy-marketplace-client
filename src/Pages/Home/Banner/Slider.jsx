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
    {
      id: "slide3",
      imageSrc:
        "https://cdn.shopify.com/s/files/1/0558/1402/9359/products/2716-piece-lego-technic-alternative-delorean-dmc-model-set-car-theblockarmy_300x.jpg?v=1654091569",
    },
    {
      id: "slide4",
      imageSrc:
        "https://cdn.trendhunterstatic.com/thumbs/lego-race-cars.jpeg?auto=webp",
    },
    {
      id: "slide5",
      imageSrc:
        "https://jaysbrickblog.com/wp-content/uploads/2023/03/LEGO-76914-Ferrari-Competizione-%E2%80%93-Main-Model-1400x996.jpg",
    },
    // Add more slides as needed
  ];

  return (
    <div className="flex flex-col md:flex-row items-center mx-24">
      <div className="carousel w-full mx-auto">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            id={slide.id}
            className={`carousel-item relative w-full ${
              currentSlide === index ? "block" : "hidden"
            }`}
          >
            <img
              src={slide.imageSrc}
              className="w-64 h-64  md:w-96 md:h-96"
              alt=""
            />
          </div>
        ))}
      </div>
      <div>
        <video autoPlay controls={false} className="rounded-lg">
          <source
            src="https://www.lego.com/cdn/cs/set/assets/blt18afdaa7957d59b2/Desktop_Motion_banner_v1_high.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
};

export default Slider;
