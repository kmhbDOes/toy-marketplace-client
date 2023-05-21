import React, { useState } from "react";
const AllToys = () => {
  const [toys, setToys] = useState([]);
  fetch("http://localhost:5000/allToy")
    .then((res) => res.json())
    .then((result) => {
      setToys(result);
    });
  return (
    <>
      <div>This is all toys</div>
      {toys.map((toy) => (
        <div key={toy.id}>{toy.toyName}</div>
      ))}
    </>
  );
};

export default AllToys;
