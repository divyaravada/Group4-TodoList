import React from "react";
import { Tabs, TabList, TabPanel, Tab } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import DivyaTodoList from "./Divya/DivyaTodoList";
import FranTodoList from "./Fran/FranTodoList";
import KaiTodoList from "./Kai/KaiTodoList";
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
        <KaiTodoList />
      </TabPanel>
      <TabPanel>
        <FranTodoList />
      </TabPanel>
      <TabPanel>
        <DivyaTodoList />
      </TabPanel>
    </Tabs>
  );
}
