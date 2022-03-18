import React, { useState } from "react";
import { ScrollView, FlatList } from "react-native";
import Header from "./components/Header";
import ListItem from "./components/ListItem";

export default function App() {
  const [list, setList] = useState([]);
  const [filterList, setFilterList] = useState([]);
  const [check, setCheck] = useState(true);
  const addItemHandler = (item) => {
    const obj = { title: item, id: list.length + 1 };
    setList((list) => [...list, obj]);
    setCheck(true);
  };
  const searchItemHandler = (item) => {
    const items = list.filter(li => li.title === item)
    setFilterList(items);
    setCheck(false);
  };
  return (
    <ScrollView style={{ marginTop: 30, marginHorizontal: 2 }}>
      <Header
        addItemHandler={addItemHandler}
        searchItemHandler={searchItemHandler}
      />
      {check
        ? list.map((li) => {
            return <ListItem key={li.id} item={li.title} />;
          })
        : filterList.map((li) => {
            return <ListItem key={li.id} item={li.title}/>;
          })}
    </ScrollView>
  );
}
