import React, { Fragment } from "react";
import { Typography } from "@material-ui/core";
import { useStyles } from "../homepage_styles";
import Slide from "react-reveal/Slide";

function Text() {
  const classes = useStyles();
  return (
    <Fragment>
      <Slide duration={1000} right>
        <div className={classes.whyspeech_txtcont}>
          <div className={classes.whyspeech_txtsubcont}>
            <Typography variant="h3" className={classes.whyspeech_heading}>
              Why Speech Therapy?
            </Typography>
            <Typography className={classes.whyspeech_txt}>
              We put your brain under stress to think harder in isolation. The
              tests that we currently conduct are tests to measure your semantic
              fluency, tested by asking you to generate semantic category
              exemplars eg: animals.
            </Typography>
            <Typography className={classes.whyspeech_txt}>
              And phonemic fluency, assessed by asking the examinee to generate
              words beginning with a single letter.
            </Typography>
            <Typography className={classes.whyspeech_txt}>
              Their is no hard and fast rule to measure Brain Fog, trying out
              our tests will indicate if it's time you go get yourself checked.
            </Typography>
          </div>
        </div>
      </Slide>
    </Fragment>
  );
}

export default Text;
