import React, { useState, useEffect } from "react";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/allToy")
      .then((res) => res.json())
      .then((result) => {
        setToys(result);
      });
  }, []);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredToys = toys.filter((toy) =>
    toy.toyName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="text-center">
      <input
        type="text"
        placeholder="Search here"
        className="input border-4 border-green-600 w-96 my-4"
        value={searchQuery}
        onChange={handleSearch}
      />
      <button type="submit" className="btn btn-primary text-green-500 text-3xl">
        Search
      </button>
      <div className="table-responsive">
        <table className="table-container mx-auto my-4">
          <thead className="px-5">
            <tr>
              <th>Seller</th>
              <th>Toy Name</th>
              <th>Sub Category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filteredToys.map((toy) => (
              <tr className="border-4 shadow-xl" key={toy._id}>
                <td>{toy.sellerName}</td>
                <td>{toy.toyName}</td>
                <td>{toy.category}</td>
                <td>{toy.price} $</td>
                <td>{toy.quantity} pcs</td>
                <td>
                  <button className="btn btn-primary bg-green-600 hover:bg-green-800">
                    Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
