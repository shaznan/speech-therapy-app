import React, { useCallback, useEffect, useState } from "react";
import useRecorder from "./useRecorder";
import dynamic from "next/dynamic";
import { makeStyles } from "@material-ui/core/styles";
import { Fragment } from "react";
import { useSelector } from "react-redux";
//dynamically import React Mic to avoid ssr, imported module includes library that only works with browser
const ReactMic = dynamic(
  () =>
    import("react-mic").then((module) => {
      return module.ReactMic;
    }),
  {
    ssr: false,
  }
);

const useStyles = makeStyles({
  reactmic: {
    display: "block",
    visibility: "hidden",
    margin: "auto",
    width: "30rem",
    height: "13rem",
    marginTop: "3rem",
    boxShadow: "0px 3px 29px rgba(0,0,0,0.05)",
    borderRadius: "9px",
  },
  showreactmic: {
    visibility: "visible",
  },
  visualcontainer: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
});

function SpeechInput() {
  let [isRecording, startRecording, stopRecording] = useRecorder();
  const classes = useStyles();
  const isstateRecording = useSelector(
    (state) => state.performtest.isRecording
  );
  console.log(`isRecording : ${isRecording}`);
  console.log(`isstateRecording: ${isstateRecording}`);
  return (
    <Fragment>
      <div className={classes.visualcontainer}>
        <ReactMic
          record={isRecording}
          className={`${classes.reactmic} ${
            isRecording && classes.showreactmic
          }`}
          visualSetting="sinewave"
          strokeColor="grey"
          backgroundColor="white"
        />
      </div>
      {/* <button onClick={startRecording}>Start</button> 
      <button onClick={stopRecording}>stop</button> */}
    </Fragment>
  );
}

export default SpeechInput;
