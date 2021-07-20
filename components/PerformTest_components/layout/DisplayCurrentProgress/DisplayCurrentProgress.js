import React from "react";
import { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import { performtestStyles } from "../PerformTest_Styles";
import DisplayRemainingTime from "./DisplayRemainingTime.component";
import DisplayWPM from "./DisplayWPM";
import { useSelector } from "react-redux";

function DisplayCurrentProgress() {
  const classes = performtestStyles();
  const showRemainingTime = useSelector(
    (state) => state.performtest.showRemainingTime,
  );
  const isTimeIsUp = useSelector((state) => state.performtest.isTimeIsUp);
  return (
    <Fragment>
      <div className={classes.timespinner}>
        {showRemainingTime && !isTimeIsUp && <DisplayRemainingTime />}
        {/* <DisplayWPM />  */}
      </div>
    </Fragment>
  );
}

export default DisplayCurrentProgress;
