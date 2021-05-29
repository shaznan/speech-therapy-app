import React from "react";
import { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import { performtestStyles } from "../PerformTest_Styles";
import CountdownSpinner from "../../../Common_Layout/CountdownSpinner/CountdownSpinner";

function DisplayRemainingTime() {
  const classes = performtestStyles();
  return (
    <Fragment>
      <Grid item lg={2} className={classes.timespinner}>
        <CountdownSpinner value={100} Remainingtime={60} />
      </Grid>
    </Fragment>
  );
}

export default DisplayRemainingTime;
