import React from "react";
import { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import { performtestStyles } from "../PerformTest_Styles";
import DisplayRemainingTime from "./DisplayRemainingTime.component";
import DisplayWPM from "./DisplayWPM";

function DisplayCurrentProgress() {
  const classes = performtestStyles();
  return (
    <Fragment>
      <Grid item lg={12}>
        <Grid container spacing={0} className={classes.currentprogress}>
          <DisplayRemainingTime />
          <DisplayWPM />
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default DisplayCurrentProgress;
