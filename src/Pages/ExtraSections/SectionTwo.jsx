import React from "react";

const SectionTwo = () => {
  return (
    <>
      <div className=" text-green-600">
        <p className="text-3xl text-center py-2 font-semibold">
          Sponsored Companies
        </p>
        <div className="py-6 flex flex-col md:flex-row justify-center items-center gap-x-6 font-bold text-2xl ">
          <div>
            <img
              className="rounded w-56 h-56 mx-auto hover:opacity-70"
              src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Lego_logo.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="rounded w-56 h-56 mx-auto hover:opacity-70"
              src="https://thetoystorelb.com/files/base/portal/width/600/height/600/crop/600x600x1/images/content-images//cogoo.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="rounded w-56 h-56 mx-auto hover:opacity-70 "
              src="https://cdn.shopify.com/s/files/1/0272/0409/1949/collections/Mega-Bloks-Logo.png?v=1574696004"
              alt=""
            />
          </div>
          <div>
            <img
              className="rounded w-56 h-56 mx-auto hover:opacity-70"
              src="https://wikizilla.org/w/images/c/ce/Sluban_logo.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="rounded w-56 h-56 mx-auto hover:opacity-70"
              src="https://wange.hu/wp-content/uploads/2021/07/cropped-logo-4.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionTwo;
