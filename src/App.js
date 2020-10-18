import { Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import CurrentList from "./components/CurrentList";
import InputHeader from "./components/InputHeader";
import ListHistory from "./components/ListHistory";
import "./styles.css";

export default function App() {

  const [currentListItems, setcurrentListItems] = useState([]);
  const [historyList, setHistoryList] = useState([]);


  const handleAddItemToList = (item) => {
    // setcurrentListItems(currentListItems.concat(item));
    setcurrentListItems([...currentListItems, item]);

  };

  const handleAddItemToHistory = (item) => {
    setHistoryList([item, ...historyList])
    setcurrentListItems(currentListItems.filter(current => {
      return current !== item
    }))
  }

  return (
    <div className="App">
      <Typography align="center" variant="h4">
        Supermarket Shopping List
      </Typography>
      <InputHeader handleAddItemToList={handleAddItemToList} />
      <CurrentList currentListItems={currentListItems} handleAddItemToHistory={handleAddItemToHistory} />
      <ListHistory historyList={historyList} />
    </div>
  );
}
