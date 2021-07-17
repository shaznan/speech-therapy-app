import React from "react";
import { useStyles } from "../AdminDashboard_styles";
import Grid from "@material-ui/core/Grid";
import { Fragment } from "react";

function AdminPerformtest() {
  const classes = useStyles();
  return (
    <Fragment>
      <Grid
        container
        spacing={0}
        className={classes.performTest_maincont}></Grid>
    </Fragment>
  );
}

export default AdminPerformtest;
