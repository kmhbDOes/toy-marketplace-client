import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleToyDetails = () => {
  const toyDetails = useLoaderData();
  const { toyName, quantity } = toyDetails;
  return (
    <div>
      <span>Single Toy Details</span>
      <li>{toyName}</li>
      <li>{quantity}</li>
    </div>
  );
};

export default SingleToyDetails;
