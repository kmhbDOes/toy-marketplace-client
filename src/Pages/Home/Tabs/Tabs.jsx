import React, { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const TabComponent = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("https://toy-marketplace-server-xi-puce.vercel.app/allToy")
      .then((res) => res.json())
      .then((result) => {
        setToys(result);
      });
  }, []);

  // Get unique categories from toys data
  const categories = [...new Set(toys.map((toy) => toy.category))].slice(0, 4); // Limit to three categories

  return (
    <Tabs className="my-4">
      <p className="text-center my-6 font-semibold text-green-600 text-2xl">
        Shop By Category
      </p>
      <TabList className="w-96 mx-auto border-4 shadow-lg rounded-lg">
        {categories.map((category) => (
          <Tab key={category}>{category}</Tab>
        ))}
      </TabList>

      {categories.map((category) => (
        <TabPanel key={category}>
          <div className="flex flex-wrap justify-center">
            {toys
              .filter((toy) => toy.category === category)
              .slice(0, 2) // Display only the first two cards for each category
              .map((toy) => (
                <div key={toy._id} className="card mx-4 my-4">
                  {/* Additional card content */}
                  <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure>
                      <img src={toy.toyPhoto} alt="photo" />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">{toy.toyName}</h2>
                      <p>Price: {toy.price} $</p>
                      <p>Rating: {toy.rating} </p>
                      <div className="card-actions justify-end">
                        <button className="btn btn-primary bg-green-600 hover:bg-green-700">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </TabPanel>
      ))}
    </Tabs>
  );
};

export default TabComponent;
