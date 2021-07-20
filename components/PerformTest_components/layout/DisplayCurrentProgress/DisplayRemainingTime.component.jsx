import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import { performtestStyles } from "../PerformTest_Styles";
import CountdownSpinner from "../../../Common_Layout/CountdownSpinner/CountdownSpinner";
import { stopRecording } from "../../../../store/actions/performTest/displayRemainingTIme-actions";
import { decrementCountDown } from "../../../../store/actions/performTest/displayRemainingTIme-actions";

function DisplayRemainingTime() {
  const remainingTime = useSelector((state) => state.performtest.remainingTime);
  const countdownPercent = useSelector(
    (state) => state.performtest.countdownPercent,
  );
  const reducingFactor = countdownPercent / remainingTime;
  const dispatch = useDispatch();
  const id = useRef(null);
  const clear = () => {
    clearInterval(id.current);
  };
  const isRecording = useSelector((state) => state.performtest.isRecording);
  const mediaPermisson = useSelector(
    (state) => state.performtest.mediaPermisson,
  );

  // Decrement countdown timer
  useEffect(() => {
    id.current =
      isRecording && //start timer if recording and mic access granted
      mediaPermisson === "granted" &&
      setInterval(() => {
        dispatch(decrementCountDown(reducingFactor, remainingTime));
      }, 1000);
    return () => clear();
  }, [isRecording, mediaPermisson]);

  //if time = 0, stop rec
  useEffect(() => {
    dispatch(stopRecording(remainingTime));
    remainingTime === 0 && clear();
  }, [remainingTime]);

  const classes = performtestStyles();

  return (
    <div>
      <CountdownSpinner
        value={countdownPercent}
        Remainingtime={remainingTime}
      />
    </div>
  );
}

export default DisplayRemainingTime;
