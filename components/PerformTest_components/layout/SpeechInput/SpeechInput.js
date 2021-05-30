import React, { useEffect, useState } from "react";
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

//TODO: create option to add more languages

function SpeechInput() {
  const classes = useStyles();
  const [isListening, setIsListening] = useState(false);
  const { transcript } = useSpeechRecognition();

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    console.log("not supported");
  }

  useEffect(() => {
    isListening
      ? SpeechRecognition.startListening({ continuous: true })
      : SpeechRecognition.stopListening();
  }, [isListening]);

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
            <Grid item lg={7} className={classes.inputtext}>
              {/* Listening */}
              {transcript}
            </Grid>
            <button
              onClick={() => {
                setIsListening(true);
              }}
            >
              start listenin
            </button>
            <button
              onClick={() => {
                setIsListening(false);
              }}
            >
              stop listening
            </button>
          </div>
        </Card>
      </Grid>
    </Fragment>
  );
}

export default SpeechInput;
