import React from "react";
import { Fragment } from "react";
import DynamicButton from "../../Common_Layout/Button/Button";
import Grid from "@material-ui/core/Grid";
import { performtestStyles } from "./PerformTest_Styles";

function StartNowBtn() {
  const classes = performtestStyles();
  return (
    <Fragment>
      <Grid item lg={12}>
        <div className={classes.startnowcontainer}>
          <DynamicButton type="primary" text="Start Now!" />
        </div>
      </Grid>
    </Fragment>
  );
}

export default StartNowBtn;
