import { ListItem, ListItemText } from "@material-ui/core";
import React from "react";

const CustomListItem = (props) => {
  const { divider, disabled, item, selected, handleOnClickItem } = props;

  return (
    <ListItem 
      button 
      divider={divider}
      disabled={disabled}
      selected={selected}
      onClick={(event) => handleOnClickItem(item)}
    >
      
      <ListItemText primary={item} />
    </ListItem>
  );
};

export default CustomListItem;
