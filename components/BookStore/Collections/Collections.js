import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "../bookstore_styles";
import Catergories from "./Catergories/Catergories.component";
import DisplayBooks from "./DisplayBooks.component";
import SearchBox from "./SearchBox.component";
import Heading from "./Heading.component";

function Collections(props) {
  const classes = useStyles();
  const catergoryItems = [
    { itemName: "All", id: "All" },
    { itemName: "BrainFog", id: "brainfog" },
    { itemName: "Speak Better", id: "Speakbetter" },
    { itemName: "Mind", id: "Mind" },
    { itemName: "Psychology", id: "Psychology" },
    { itemName: "Think Smart", id: "Thinksmart" },
  ];

  return (
    <div>
      <Grid container className={classes.collection_cont}>
        <SearchBox />
        <Heading />
        <Catergories catergoryItems={catergoryItems} />
        <DisplayBooks />
      </Grid>
    </div>
  );
}

export default Collections;
