import React from "react";
import { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./TimerBeforeBegin_Styles";
import Title from "./TimerTitle.component";
import TimerSpinner from "./TimerSpinner.component";

function TimerBeforeBegin() {
  const classes = useStyles();

  return (
    <Fragment>
      <Grid container spacing={0} className={classes.container}>
        <Title />
        <TimerSpinner />
      </Grid>
    </Fragment>
  );
}

export default TimerBeforeBegin;
