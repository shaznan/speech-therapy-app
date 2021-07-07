import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "../bookstore_styles";
import Catergories from "./Catergories.component";
import DisplayBooks from "./DisplayBooks.component";

function Collections() {
  const classes = useStyles();
  const [activeIndex, setActiveIndex] = useState();
  const catergoryItems = [
    "BrainFog",
    "Mind",
    "Psycology",
    "Think Smart",
    "Productivity",
  ];

  console.log(activeIndex);
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
