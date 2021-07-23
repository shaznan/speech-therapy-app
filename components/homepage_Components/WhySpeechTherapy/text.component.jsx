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
              We put your brain under stress to think harder in isolation. Its a
              form of brain exercise unlike any other!
            </Typography>
          </div>
        </div>
      </Slide>
    </Fragment>
  );
}

export default Text;
