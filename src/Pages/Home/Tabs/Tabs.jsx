import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import React from "react";

const TabComponent = () => {
  return (
    <Tabs className="my-4">
      <p className="text-center my-6 font-semibold  text-green-600 text-2xl">
        Shop By Category
      </p>
      <TabList className="w-96 mx-auto border-4 shadow-lg rounded-lg">
        <Tab>Title 1</Tab>
        <Tab>Title 2</Tab>
        <Tab>Title 3</Tab>
      </TabList>

      <TabPanel className="">
        <div className="mx-auto">Content One</div>
      </TabPanel>
      <TabPanel>
        <h2>Any content 2</h2>
      </TabPanel>
      <TabPanel>
        <h2>Any content 2</h2>
      </TabPanel>
    </Tabs>
  );
};

export default TabComponent;
