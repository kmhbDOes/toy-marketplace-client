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
        "https://cdn.shopify.com/s/files/1/0011/6218/2714/products/lego-city-electric-sports-car-60383_009_1024x1024@2x.jpg?v=1672388265",
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
    {
      id: "slide6",
      imageSrc:
        "https://www.lego.com/cdn/cs/set/assets/blt5014244d8d8dc8ad/42154.png",
    },
    // Add more slides as needed
  ];

  return (
    <div className="flex flex-col md:flex-row items-center mx-24 ">
      <div className="carousel mx-auto">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            id={slide.id}
            className={`carousel-item relative ${
              currentSlide === index ? "block" : "hidden"
            }`}
          >
            <img
              src={slide.imageSrc}
              className="w-72 md:w-full h-full  md:h-96"
              alt=""
            />
          </div>
        ))}
      </div>
      <div className="my-2">
        <img
          className="rounded-lg w-96"
          src="https://wallpapercave.com/wp/wp9510639.jpg"
          alt="Lego Brick Image"
        />
      </div>
    </div>
  );
};

export default Slider;
