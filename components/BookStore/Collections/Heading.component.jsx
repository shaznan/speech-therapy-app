import { Grid } from "@material-ui/core";
import React from "react";
import { Fragment } from "react";
import { useStyles } from "../bookstore_styles";

function Heading() {
  const classes = useStyles();
  return (
    <Fragment>
      <Grid item md={12}>
        <h1 className={classes.collection_heading}>Collections</h1>
      </Grid>
    </Fragment>
  );
}

export default Heading;
