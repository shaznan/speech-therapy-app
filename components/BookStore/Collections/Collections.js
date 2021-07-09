import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "../bookstore_styles";
import Catergories from "./Catergories.component";
import DisplayBooks from "./DisplayBooks.component";

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
        <Grid item md={12}>
          <h1 className={classes.collection_heading}>Collections</h1>
        </Grid>
        <Grid item md={12}>
          <Catergories catergoryItems={catergoryItems} />
        </Grid>
        <Grid item md={12}>
          <DisplayBooks />
        </Grid>
      </Grid>
    </div>
  );
}

export default Collections;
