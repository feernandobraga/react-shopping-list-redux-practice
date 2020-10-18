import React, { useEffect, useState } from "react";
import {
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography
} from "@material-ui/core";
import CustomListItem from "../CustomListItem";

const ListHistory = (props) => {
  const { historyList } = props;

  const [itemHistory, setItemHistory] = useState([]);

  useEffect(() => {
    if (historyList) {
      setItemHistory(historyList);
    } else {
      setItemHistory([]);
    }
  }, [historyList]);

  return (
    <>
      {itemHistory.length > 0 ? (
        <>
          <Grid container spacing={3} justify="center">
            <Grid item xs={2}>
              <Typography variant="subtitle1">items history</Typography>
            </Grid>
          </Grid>
          <Grid container spacing={3} justify="center" style={{ marginTop: -30 }}>
            <Grid item xs={7}>
              <List>
                {itemHistory.map((item) => (
                  <CustomListItem key={item} divider item={item} selected disabled />
                ))}
              </List>
            </Grid>
          </Grid>
        </>
      ) : null}
    </>
  );
};

export default ListHistory;
