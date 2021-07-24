import React, { useCallback, useEffect, useState } from "react";
import useRecorder from "./useRecorder";
import dynamic from "next/dynamic";
import { makeStyles } from "@material-ui/core/styles";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import CircleRipple from "./CircleRipple.component";
import WithIsRecording from "../Wrapper/WithIsRecording";

//dynamically import React Mic to avoid ssr, imported module includes library that only works with browser
const ReactMic = dynamic(
  () =>
    import("react-mic").then((module) => {
      return module.ReactMic;
    }),
  {
    ssr: false,
  },
);

const useStyles = makeStyles(
  {
    reactmic: {
      display: "block",
      visibility: "hidden",
      margin: "auto",
      width: "40vw",
      height: "25vh",
      marginTop: "3rem",
      boxShadow: "0px 3px 29px rgba(0,0,0,0.05)",
      borderRadius: "9px",
      ["@media (max-width:960px)"]: {
        width: "90%",
      },
    },
    showreactmic: {
      visibility: "visible",
    },
    mainContainer: {
      display: "flex",
      flexDirection: "columns",
      justifyContent: "center",
      width: "100%",
    },
    visualContainer: {
      position: "relative",
      width: "40vw",
      ["@media (max-width:960px)"]: {
        width: "90vw",
      },
    },
    tooltip: {
      position: "absolute",
      right: "20vw",
      bottom: "12.5vh",
      ["@media (max-width:960px)"]: {
        right: "45vw",
      },
    },
  },
  { index: 1 },
);

function SpeechInput() {
  const classes = useStyles();
  const isRecording = useSelector((state) => state.performtest.isRecording);

  return (
    <WithIsRecording>
      <div className={classes.mainContainer}>
        <div className={classes.visualContainer}>
          <div className={classes.tooltip}>
            {isRecording && <CircleRipple />}
          </div>
          <ReactMic
            record={isRecording}
            className={`${classes.reactmic} ${
              isRecording && classes.showreactmic
            }`}
            visualSetting="sinewave"
            strokeColor="#FF4444"
            backgroundColor="white"
          />
        </div>
      </div>
    </WithIsRecording>
  );
}

export default SpeechInput;
