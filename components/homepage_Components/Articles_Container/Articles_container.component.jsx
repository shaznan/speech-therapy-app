import React from "react";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "../homepage_styles";
import { Fragment } from "react";

function Articles_container() {
  const classes = useStyles();
  return (
    <Fragment>
      <container className={classes.container}></container>
    </Fragment>
  );
}

export default Articles_container;
