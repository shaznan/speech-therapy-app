import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import { performtestStyles } from "../PerformTest_Styles";
import CountdownSpinner from "../../../Common_Layout/CountdownSpinner/CountdownSpinner";
import { testActions } from "../../../../store/performTestSlice";

function DisplayRemainingTime() {
  const [remainingTime, setRemainingTime] = useState(1);
  const [countdownPercent, setCountdownPercent] = useState(100);
  const reducingFactor = countdownPercent / remainingTime;
  const dispatch = useDispatch();
  const id = useRef(null);
  const clear = () => {
    clearInterval(id.current);
  };
  const isRecording = useSelector((state) => state.performtest.isRecording);
  const mediaPermisson = useSelector(
    (state) => state.performtest.mediaPermisson
  );

  // Decrement countdown timer

  useEffect(() => {
    id.current =
      isRecording && //start timer only during recording and when mic access is granted
      mediaPermisson === "granted" &&
      setInterval(() => {
        setRemainingTime((remainingTime) => remainingTime - 1);
        setCountdownPercent((countdownPercent) => {
          // make progress bar respond to remaining seconds
          return (countdownPercent = countdownPercent - reducingFactor);
        });
      }, 1000);
    return () => clear();
  }, [isRecording, mediaPermisson]);

  // clear countdwn timer and delay dispatch action for 1s before component unmounts for user to see 00 seconds
  useEffect(() => {
    setTimeout(() => {
      if (remainingTime === 0) {
        dispatch(testActions.setIsRecording());
        dispatch(testActions.setIsTimeIsUp(true));
        // dispatch(testActions.setShowCountdown(false));
      }
    }, 1000);
    remainingTime === 0 && clear();
  }, [remainingTime]);

  const classes = performtestStyles();
  return (
    <Fragment>
      <Grid item lg={2} className={classes.timespinner}>
        <CountdownSpinner
          value={countdownPercent}
          Remainingtime={remainingTime}
        />
      </Grid>
    </Fragment>
  );
}

export default DisplayRemainingTime;
