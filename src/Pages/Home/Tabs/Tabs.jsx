import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import React, { useEffect, useState } from "react";

const TabComponent = () => {
  const [toyData, setToyData] = useState([]);
  const selectedCategories = ["Lego Sports Car", "Lego F1", "Lego Truck"];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://toy-marketplace-server-xi-puce.vercel.apptopToys?categories=${selectedCategories.join(
            ","
          )}`
        );
        const data = await response.json();
        console.log(data);
        setToyData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <Tabs className="my-4">
      <p className="text-center my-6 font-semibold text-green-600 text-2xl">
        Shop By Category
      </p>
      <TabList className="w-96 mx-auto border-4 shadow-lg rounded-lg">
        {selectedCategories.map((category) => (
          <Tab key={category}>{category}</Tab>
        ))}
      </TabList>

      {selectedCategories.map((category, index) => {
        const categoryData = toyData.find((data) => data.category === category);
        return (
          <TabPanel key={index}>
            <h2>{category}</h2>
            {categoryData ? (
              <ul>
                {categoryData.toys.slice(0, 2).map((toy) => (
                  <li key={toy._id}>{toy.toyName}</li>
                ))}
              </ul>
            ) : (
              <p>No data available</p>
            )}
          </TabPanel>
        );
      })}
    </Tabs>
  );
};

export default TabComponent;
