import React, { useEffect, useRef, useState } from "react";
import { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "../../../Common_Layout/Card/Card";
import MicNoneTwoToneIcon from "@material-ui/icons/MicNoneTwoTone";
import Tooltip from "./Tooltip.component";
import CloseWindowBtn from "../../../Common_Layout/Button/CloseWindowBtn";
import { useStyles } from "./SpeechInput_Styles";
import { useSelector, useDispatch } from "react-redux";
import { testActions } from "../../../../store/performTestSlice";
import useRecorder from "./useRecorder";
import dynamic from "next/dynamic";

// import { ReactMic } from "react-mic";
const ReactMic = dynamic(
  () =>
    import("react-mic").then((module) => {
      return module.ReactMic;
    }),
  {
    ssr: false,
  }
);

//TODO: create option to add more languages, manage state
//TODO: keypress functionality : change icon to keyboard, Type here and tooltip to type now

function SpeechInput() {
  let [audioURL, isRecording, startRecording, stopRecording] = useRecorder();

  useEffect(() => {
    console.log(audioURL);
  }, [audioURL]);

  const onData = (recordedBlob) => {
    console.log("chunk of real-time data is: ", recordedBlob);
  };

  const onStop = (recordedBlob) => {
    console.log("recordedBlob is: ", recordedBlob);
  };

  return (
    <div className="App">
      <ReactMic
        record={isRecording}
        // onStop={onStop}
        // onData={onData}
        className="sound-wave"
        strokeColor="black"
        backgroundColor="white"
      />
      <audio src={audioURL} controls />
      <button onClick={startRecording} disabled={isRecording}>
        start recording
      </button>
      <button onClick={stopRecording} disabled={!isRecording}>
        stop recording
      </button>
    </div>
  );
}

export default SpeechInput;
