import React from "react";
import { Fragment } from "react";
import CountdownSpinner from "../../../Common_Layout/CountdownSpinner/CountdownSpinner";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { useSelector } from "react-redux";
import { useStyles } from "./DisplayTimerBeforeBegin_Styles";

function DisplayTimerBeforeBegin() {
  const classes = useStyles();
  const isAlphabetChecked = useSelector(
    (state) => state.performtest.isAlphabetChecked
  );
  const isRandomChecked = useSelector(
    (state) => state.performtest.isRandomChecked
  );
  const selectedOptfromList = useSelector(
    (state) => state.performtest.selectedOptfromList
  );

  const selectedCatergory = isAlphabetChecked
    ? "Words starting with the letter"
    : isRandomChecked
    ? "Words relating to the topic "
    : "";

  return (
    <Fragment>
      <Grid container spacing={0} className={classes.container}>
        <Grid item={12} className={classes.title}>
          <Typography variant={"h5"}>
            Get ready to speak out loud {selectedCatergory}
            {<strong> "{selectedOptfromList}"</strong>}
          </Typography>
          <Typography variant={"subtitle1"}>
            Your test will begin in..
          </Typography>
        </Grid>
        <Grid item lg={12} className={classes.timespinner}>
          <CountdownSpinner value={60} Remainingtime={5} progressBar="red" />
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default DisplayTimerBeforeBegin;
