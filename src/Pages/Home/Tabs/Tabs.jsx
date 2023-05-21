import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import React from "react";

const TabComponent = () => {
  fetch(
    "http://localhost:5000/topToys?categories=${selectedCategories.join(',')}"
  )
    .then((response) => response.json())
    .then((data) => {
      // Process the retrieved data here
      console.log(data);
    })
    .catch((error) => {
      // Handle any errors
      console.error(error);
    });
  return (
    <Tabs className="my-4">
      <p className="text-center my-6 font-semibold  text-green-600 text-2xl">
        Shop By Category
      </p>
      <TabList className="w-96 mx-auto border-4 shadow-lg rounded-lg">
        <Tab>Lego Sports Car</Tab>
        <Tab>Lego F1</Tab>
        <Tab>Lego Truck</Tab>
      </TabList>

      <TabPanel className="">
        <div className="mx-auto">Lego Sports Car</div>
      </TabPanel>
      <TabPanel>
        <h2>Lego F1</h2>
      </TabPanel>
      <TabPanel>
        <h2>Lego Truck</h2>
      </TabPanel>
    </Tabs>
  );
};

export default TabComponent;
