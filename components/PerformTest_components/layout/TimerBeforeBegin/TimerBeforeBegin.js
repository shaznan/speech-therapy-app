import React from "react";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./TimerBeforeBegin_Styles";
import Title from "./TimerTitle.component";
import TimerSpinner from "./TimerSpinner.component";
import WithCountdownBeforeBegin from "../Wrapper/WithCountdownBeforeBegin";

//display message and timer before begin test
function TimerBeforeBegin() {
  const classes = useStyles();

  return (
    <WithCountdownBeforeBegin>
      <Grid container spacing={0} className={classes.container}>
        <Title />
        <TimerSpinner />
      </Grid>
    </WithCountdownBeforeBegin>
  );
}

export default TimerBeforeBegin;
