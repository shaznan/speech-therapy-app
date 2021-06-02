import React, { useEffect, useRef, useState } from "react";
import useRecorder from "./useRecorder";
import dynamic from "next/dynamic";
import { makeStyles } from "@material-ui/core/styles";
import { Fragment } from "react";

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
    margin: "auto",
    width: "30rem",
    height: "13rem",
    marginTop: "3rem",
    boxShadow: "0px 3px 29px rgba(0,0,0,0.05)",
    borderRadius: "9px",
  },
  visualcontainer: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
});

function SpeechInput() {
  let [audioURL, isRecording, startRecording, stopRecording] = useRecorder();
  const classes = useStyles();

  useEffect(() => {
    console.log(audioURL);
  }, [audioURL]);

  return (
    <Fragment>
      <div className={classes.visualcontainer}>
        <ReactMic
          record={isRecording}
          className={classes.reactmic}
          visualSetting="sinewave"
          strokeColor="grey"
          backgroundColor="white"
        />
      </div>
      <audio src={audioURL} controls />
      <button onClick={startRecording} disabled={isRecording}>
        start recording
      </button>
      <button onClick={stopRecording} disabled={!isRecording}>
        stop recording
      </button>
    </Fragment>
  );
}

export default SpeechInput;
