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

//TODO: create option to add more languages, manage state
//TODO: keypress functionality : change icon to keyboard, Type here and tooltip to type now

function SpeechInput() {
  let [audioURL, isRecording, startRecording, stopRecording] = useRecorder();

  useEffect(() => {
    console.log(audioURL);
  }, [audioURL]);

  return (
    <div className="App">
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
