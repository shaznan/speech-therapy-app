import React, { useEffect, useRef, useState } from "react";
import { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "../../../Common_Layout/Card/Card";
import MicNoneTwoToneIcon from "@material-ui/icons/MicNoneTwoTone";
import Tooltip from "./Tooltip.component";
import CloseWindowBtn from "../../../Common_Layout/Button/CloseWindowBtn";
import { useStyles } from "./SpeechInput_Styles";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { useSelector, useDispatch } from "react-redux";
import { testActions } from "../../../../store/performTestSlice";

//TODO: create option to add more languages, manage state
//TODO: keypress functionality : change icon to keyboard, Type here and tooltip to type now

function SpeechInput() {
  const classes = useStyles();
  // const dispatch = useDispatch();
  const inputRef = useRef();
  const isListening = useSelector((state) => state.performtest.isListening);
  const { transcript } = useSpeechRecognition();
  const [wordsSpoken, setWordsSpoken] = useState(null);

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    console.log("not supported");
  }

  const inputChangeHandler = (e) => {
    setWordsSpoken(e.target.value);
    console.log(wordsSpoken);
  };

  useEffect(() => {
    isListening
      ? SpeechRecognition.startListening({ continuous: true })
      : SpeechRecognition.stopListening();
  }, [isListening]);

  // useEffect(() => {
  //   console.log(inputRef.current.value);
  // }, [transcript]);

  return (
    <Fragment>
      <Grid container spacing={0} className={classes.container}>
        {/*TODO: Speak out loud words should come here  */}

        <Tooltip />
        <Card>
          <div className={classes.inputcontainer}>
            <div className={classes.closebtn}>
              <CloseWindowBtn />
            </div>
            <Grid item lg={1} className={classes.iconcontainer}>
              <MicNoneTwoToneIcon className={classes.icon} />
            </Grid>
            <Grid item lg={7}>
              <input
                type="text"
                placeholder="Listening"
                className={classes.inputtext}
                // ref={inputRef}
                onChange={inputChangeHandler}
                value={transcript}
              />
              {/* Listening */}
              {/* {transcript} */}
            </Grid>
            {/* <button
              onClick={() => {
                dispatch(testActions.setIsListening(true));
              }}
            >
              start listenin
            </button> */}
            {/* <button
              onClick={() => {
                dispatch(testActions.setIsListening(false));
              }}
            >
              stop listening
            </button> */}
          </div>
        </Card>
      </Grid>
    </Fragment>
  );
}

export default SpeechInput;
