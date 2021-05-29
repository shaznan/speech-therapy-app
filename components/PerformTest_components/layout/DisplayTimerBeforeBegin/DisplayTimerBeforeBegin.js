import React from "react";
import { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./DisplayTimerBeforeBegin_Styles";
import Title from "./DisplayTimerTitle.component";
import DisplayTimerSpinner from "./DisplayTimerSpinner.component";

function DisplayTimerBeforeBegin() {
  const classes = useStyles();

  return (
    <Fragment>
      <Grid container spacing={0} className={classes.container}>
        <Title />
        <DisplayTimerSpinner />
      </Grid>
    </Fragment>
  );
}

export default DisplayTimerBeforeBegin;
