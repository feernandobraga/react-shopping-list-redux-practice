import {
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import CustomListItem from "../CustomListItem";

const CurrentList = (props) => {
  const [listItems, setListItems] = useState([]);

  const { currentListItems, handleAddItemToHistory } = props;

  useEffect(() => {
    if (currentListItems) {
      setListItems(currentListItems);
    } else {
      setListItems([]);
    }
  }, [currentListItems]);

  const handleOnClickItem = (item) => {
    handleAddItemToHistory(item);
    console.log("item clicked " + item);
  };

  return (
    <>
      <Grid container spacing={3} justify="center" style={{ marginBottom: 30 }}>
        <Grid item xs={7}>
          {listItems.length > 0 ? (
            <List style={{ backgroundColor: "#fefefe" }}>
              {listItems.map((item) => (
                <CustomListItem
                  key={item}
                  divider
                  item={item}
                  handleOnClickItem={handleOnClickItem}
                />
              ))}
            </List>
          ) : (
            <Grid item xs={12}>
              <Typography
                align="center"
                variant="caption"
                display="block"
                style={{ marginTop: "-40px" }}
              >
                your list is empty
              </Typography>
            </Grid>
          )}
        </Grid>
      </Grid>
      {/* <CustomListItem item={"test"} disabled divider/> */}
    </>
  );
};

export default CurrentList;
