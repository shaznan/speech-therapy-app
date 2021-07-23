import React from "react";
import { Fragment } from "react";
import { useStyles } from "../homepage_styles";
import Grid from "@material-ui/core/Grid";
import mockupWindowImg from "../../../assets/images/performtest_window_mockup.png";
import Text from "./text.component";
import Slide from "react-reveal/Slide";

function WhySpeechTherapy() {
  const classes = useStyles();
  return (
    <Fragment>
      <Grid container spacing={0} className={classes.whySpeech_cont}>
        <Grid item lg={6} sm={12} className={classes.whySPeech_imgcont}>
          <Slide duration={1000} left>
            <img src={mockupWindowImg} className={classes.whySpeech_img} />
          </Slide>
        </Grid>
        <Grid item lg={6} sm={12}>
          <Text />
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default WhySpeechTherapy;
