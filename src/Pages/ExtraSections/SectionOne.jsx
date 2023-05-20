import React from "react";

const SectionOne = () => {
  return (
    <div className="flex justify-center relative">
      <div>
        <video autoPlay loop controls={false} className="rounded-lg">
          <source
            src="https://www.lego.com/cdn/cs/set/assets/blt18afdaa7957d59b2/Desktop_Motion_banner_v1_high.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="absolute text-white text-xl font-semibold left-0  md:text-2xl md:left-44 md:bottom-48 w-56 md:font-bold">
        Phwoar… Our stunning LEGO® cars for adults can have heads turning as
        easily as steering wheels.
      </div>
    </div>
  );
};

export default SectionOne;
