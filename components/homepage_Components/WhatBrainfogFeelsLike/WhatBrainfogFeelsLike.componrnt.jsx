import React, { Fragment } from "react";
import { useStyles } from "../homepage_styles";
import Grid from "@material-ui/core/Grid";
import Text from "./Text.component";
import VideoPlayer from "./VideoPlayer.component";
import { Container } from "@material-ui/core";

function WhatBrainfogFeelsLike() {
  const classes = useStyles();
  return (
    <Fragment>
      <Grid container spacing={0} className={classes.feelsLike_cont}>
        <Grid item lg={6} sm={12}>
          <Text />
        </Grid>
        <Grid item lg={6} sm={12}>
          <VideoPlayer />
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default WhatBrainfogFeelsLike;
