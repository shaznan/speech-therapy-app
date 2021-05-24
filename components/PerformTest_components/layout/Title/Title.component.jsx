import React from "react";
import { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Heading from "../../../Common_Layout/Typography/Heading";
import { performtestStyles } from "../PerformTest_Styles";

function Title() {
  const classes = performtestStyles();
  return (
    <Fragment>
      <Grid item lg={12} className={classes.title}>
        <Typography variant="h5" className={classes.subtitle}>
          Verbal Fluency Test
        </Typography>
        <Heading
          text="Test your Verbal Fluency Rate"
          className={classes.maintitle}
        />
      </Grid>
    </Fragment>
  );
}

export default Title;
