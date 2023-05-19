import React, { useEffect } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";

const Slider = () => {
  useEffect(() => {
    const swiper = new Swiper(".swiper-container", {
      slidesPerView: 1,
      loop: true,
      autoplay: {
        delay: 3000, // Adjust the delay (in milliseconds) between each slide
        disableOnInteraction: false, // Allow autoplay to continue even when the user interacts with the slider
      },
    });

    return () => {
      swiper.destroy();
    };
  }, []);

  return (
    <div className="swiper-container">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <img
            src="https://assetscdn1.paytm.com/images/catalog/product/K/KI/KIDLIMOUSINE-DISKSE1140676506C2066/1565610984539_0..jpg"
            alt=""
          />
        </div>
        <div className="swiper-slide">
          <img
            src="https://assetscdn1.paytm.com/images/catalog/product/K/KI/KIDLIMOUSINE-DISKSE1140676506C2066/1565610984539_0..jpg"
            alt=""
          />
        </div>
        <div className="swiper-slide">Slide 3</div>
        {/* Add more slides as needed */}
      </div>
    </div>
  );
};

export default Slider;
