import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredToys, setFilteredToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allToy")
      .then((res) => res.json())
      .then((result) => {
        setToys(result);
        setFilteredToys(result);
      });
  }, []);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const query = searchQuery.trim().toLowerCase();
    const filteredResults = toys.filter((toy) =>
      toy.toyName.toLowerCase().includes(query)
    );
    setFilteredToys(filteredResults);
  };

  return (
    <div className="text-center">
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search here"
          className="input border-4 border-green-600 w-96 my-4"
          value={searchQuery}
          onChange={handleSearch}
        />
        <button type="submit" className="btn btn-primary bg-green-600">
          Search
        </button>
      </form>
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
                  <Link to={`/all-toys/${toy._id}`}>
                    <button className="btn btn-primary bg-green-600 hover:bg-green-800">
                      Details
                    </button>
                  </Link>
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
