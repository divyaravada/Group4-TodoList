import React from "react";
import { Tabs, TabList, TabPanel, Tab } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import DivyaTodoList from "./Divya/DivyaTodoList";
//import TodoInput from "./TodoInput";

export default function MyTabs() {
  return (
    <Tabs>
      <TabList className="mainpage">
        <Tab>Kai</Tab>
        <Tab>Fran</Tab>
        <Tab>Divya</Tab>
      </TabList>

      <TabPanel>
        <div>
          <h4>Home ToDoo List</h4>
        </div>
      </TabPanel>
      <TabPanel>
        <div>Family ToDoo List</div>
      </TabPanel>
      <TabPanel>
        <DivyaTodoList />
      </TabPanel>
    </Tabs>
  );
}
