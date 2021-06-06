import React, { useCallback, useEffect, useState } from "react";
import useRecorder from "./useRecorder";
import dynamic from "next/dynamic";
import { makeStyles } from "@material-ui/core/styles";
import { Fragment } from "react";
import { useSelector } from "react-redux";
// import Tooltip from "./Tooltip.component";
import CircleRipple from "./CircleRipple.component";
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
    width: "40rem",
    height: "17rem",
    marginTop: "3rem",
    boxShadow: "0px 3px 29px rgba(0,0,0,0.05)",
    borderRadius: "9px",
  },
  showreactmic: {
    visibility: "visible",
  },
  visualcontainer: {
    display: "flex",
    flexDirection: "columns",
    justifyContent: "center",
    width: "100%",
    position: "relative",
  },
  tooltip: {
    position: "absolute",
    top: 180,
    left: 625,
  },
});

function SpeechInput() {
  // useRecorder(); //execute mic functionality and send recorded data to backend
  const classes = useStyles();
  const isRecording = useSelector((state) => state.performtest.isRecording);

  return (
    <Fragment>
      <div className={classes.visualcontainer}>
        <div className={classes.tooltip}>{isRecording && <CircleRipple />}</div>
        <ReactMic
          record={isRecording}
          className={`${classes.reactmic} ${
            isRecording && classes.showreactmic
          }`}
          visualSetting="sinewave"
          strokeColor="#CCC9C9"
          backgroundColor="white"
        />
      </div>
    </Fragment>
  );
}

export default SpeechInput;

//FIXME: when mic access is not granted timer still runs,
//if no data input then dont set as chunk
//hide the recording sign
