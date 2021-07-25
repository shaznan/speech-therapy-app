import React from "react";
import { Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./TimerBeforeBegin_Styles";
import Grid from "@material-ui/core/Grid";
import { useSelector } from "react-redux";

//show message based on chosen option
function Title() {
  const classes = useStyles();
  const isAlphabetChecked = useSelector(
    (state) => state.performtest.isAlphabetChecked,
  );
  const isRandomChecked = useSelector(
    (state) => state.performtest.isRandomChecked,
  );
  const selectedOptfromList = useSelector(
    (state) => state.performtest.selectedOptfromList,
  );

  const selectedCatergory = isAlphabetChecked
    ? "Words starting with the letter"
    : isRandomChecked
    ? "Words relating to the topic "
    : "";

  return (
    <Fragment>
      <Grid item lg={12} className={classes.title}>
        <Typography variant={"h5"}>
          Get ready to speak out loud {selectedCatergory}
          {<strong> "{selectedOptfromList}"</strong>}
        </Typography>
        <Typography variant={"subtitle1"}>Your test will begin in..</Typography>
      </Grid>
    </Fragment>
  );
}

export default Title;
