import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleToyDetails = () => {
  const toyDetails = useLoaderData();
  const {
    toyPhoto,
    toyName,
    sellerName,
    price,
    rating,
    description,
    quantity,
  } = toyDetails;
  return (
    <div className="my-6">
      <img
        src={toyPhoto}
        alt="photo"
        className="w-96 mx-auto border-4 border-gray-500 rounded-lg"
      />
      <div className="card card-side bg-base-100 shadow-xl ">
        <div className="card-body text-center ">
          <h2 className="card-title mx-auto">{toyName}</h2>
          <h2 className="card-title mx-auto">Price: {price} $</h2>
          <h2 className="card-title mx-auto">Seller: {sellerName}</h2>
          <h2 className="card-title mx-auto">Seller: {rating}</h2>
          <h2 className="card-title mx-auto">Quantity: {quantity}</h2>
          <h2 className="card-title mx-auto">{description}</h2>
        </div>
      </div>
    </div>
  );
};

export default SingleToyDetails;
