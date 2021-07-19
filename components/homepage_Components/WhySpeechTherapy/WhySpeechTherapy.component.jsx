import React from "react";
import { Fragment } from "react";
import { useStyles } from "../homepage_styles";
import Grid from "@material-ui/core/Grid";
import mockupWindowImg from "../../../assets/images/performtest_window_mockup.png";
import Text from "./text.component";

function WhySpeechTherapy() {
  const classes = useStyles();
  return (
    <Fragment>
      <Grid container spacing={0} className={classes.whySpeech_cont}>
        <Grid item lg={6} sm={12} className={classes.whySPeech_imgcont}>
          <img src={mockupWindowImg} className={classes.whySpeech_img} />
        </Grid>
        <Grid item lg={6} sm={12}>
          <Text />
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default WhySpeechTherapy;
