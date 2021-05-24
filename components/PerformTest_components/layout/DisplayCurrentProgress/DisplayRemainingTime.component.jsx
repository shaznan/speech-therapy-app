import React from "react";
import { Fragment } from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { performtestStyles } from "../PerformTest_Styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";

function DisplayRemainingTime() {
  const classes = performtestStyles();
  return (
    <Fragment>
      <Grid item lg={2} className={classes.timespinner}>
        <Box position="relative" display="inline-flex">
          <CircularProgress
            variant="determinate"
            value={100}
            className={classes.time}
          />
          <Box top="-2.7rem" left="3rem" position="absolute">
            <Typography variant="h3" className={classes.countdownsec}>
              60
            </Typography>
            <Typography variant="subtitle1" className={classes.countdownlabel}>
              seconds
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Fragment>
  );
}

export default DisplayRemainingTime;
