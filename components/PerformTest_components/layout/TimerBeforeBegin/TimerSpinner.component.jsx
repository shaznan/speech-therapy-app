import React, { useEffect, useState, useRef } from "react";
import { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import CountdownSpinner from "../../../Common_Layout/CountdownSpinner/CountdownSpinner";
import { useStyles } from "./TimerBeforeBegin_Styles";
import { useDispatch } from "react-redux";
import { testActions } from "../../../../store/performTestSlice";

function TimerSpinner() {
  const [remainingTime, setRemainingTime] = useState(5);
  const [countdownPercent, setCountdownPercent] = useState(100);
  const reducingFactor = countdownPercent / remainingTime;
  const dispatch = useDispatch();
  const classes = useStyles();
  const id = useRef(null);
  const clear = () => {
    clearInterval(id.current);
  };

  // Decrement countdown timer
  useEffect(() => {
    id.current = setInterval(() => {
      setRemainingTime((remainingTime) => remainingTime - 1);
      setCountdownPercent((countdownPercent) => {
        // make progress bar respond to remaining seconds
        return (countdownPercent = countdownPercent - reducingFactor);
      });
    }, 1000);
    return () => clear();
  }, []);

  // clear countdwn timer and delay dispatch action for 1s before component unmounts for user to see 00 seconds
  useEffect(() => {
    setTimeout(() => {
      if (remainingTime === 0) {
        dispatch(testActions.setShowCountdown(false));
        dispatch(testActions.setShowRemainingTime(true));
        dispatch(testActions.setIsRecording());
      }
    }, 1000);
    remainingTime === 0 && clear();
  }, [remainingTime]);

  return (
    <Fragment>
      <Grid item lg={12} className={classes.timespinner}>
        <CountdownSpinner
          value={countdownPercent}
          Remainingtime={remainingTime}
          progressBar="red"
        />
      </Grid>
    </Fragment>
  );
}

export default TimerSpinner;
