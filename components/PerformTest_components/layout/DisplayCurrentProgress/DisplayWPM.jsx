import React from "react";
import { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { performtestStyles } from "../PerformTest_Styles";

function DisplayWPM() {
  const classes = performtestStyles();
  return (
    <Fragment>
      <Grid item lg={2} className={classes.wordcount}>
        <div className={classes.label}>Words/Min</div>
        <div>
          <Typography variant="h3" className={classes.wordspermin}>
            23
          </Typography>
        </div>
      </Grid>
    </Fragment>
  );
}

export default DisplayWPM;
