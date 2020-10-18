import { Button, Grid, TextField } from "@material-ui/core";
import React, { useState } from "react";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

const InputHeader = (props) => {
  const [itemToAdd, setItemToAdd] = useState("");

  const { handleAddItemToList } = props;

  const handleOnClickAddToList = () => {
    handleAddItemToList(itemToAdd);
    setItemToAdd("")
  };

  const handleOnChange = (event) => {
    setItemToAdd(event.target.value);
  };

  return (
    <>
      <Grid
        container
        spacing={2}
        style={{ marginTop: 50, marginBottom: 50 }}
        justify="center"
        alignItems="center"
      >
        <Grid item xs={4}>
          <TextField
            label="Enter a shopping item"
            variant="outlined"
            size="small"
            fullWidth
            style={{ backgroundColor: "#fefefe" }}
            value={itemToAdd}
            onChange={handleOnChange}
          />
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="contained"
            color="primary"
            size="medium"
            startIcon={<ShoppingCartOutlinedIcon />}
            fullWidth
            onClick={handleOnClickAddToList}
          >
            Add to list
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default InputHeader;
