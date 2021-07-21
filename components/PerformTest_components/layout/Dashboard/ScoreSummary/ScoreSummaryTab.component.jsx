import React from "react";
import { useStyles } from "../Dashboard_Styles";
import Grid from "@material-ui/core/Grid";
import { Fragment } from "react";

function ScoreSummaryTab({ label, result }) {
  const classes = useStyles();
  return (
    <Fragment>
      {/* <Grid item md={12} sm={2} className={classes.summaryTab}> */}
      <Grid item className={classes.summaryTab}>
        <div className={classes.score_label}>{label}</div>
        <div className={classes.score_result}>{result}</div>
      </Grid>
    </Fragment>
  );
}

export default ScoreSummaryTab;
