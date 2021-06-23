import React from "react";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "../Dashboard_Styles";
import ScoreSummaryTab from "./ScoreSummaryTab.component";

function ScoreSummary() {
  const classes = useStyles();
  return (
    <div>
      <Grid container className={classes.summary_cont}>
        <ScoreSummaryTab label="Change over prev" result="+47%" />
        <ScoreSummaryTab label="AverageScore" result="18WPM" />
        <ScoreSummaryTab label="Score Avg Criteria" result="Excellent" />
        <ScoreSummaryTab label="High Score" result="25WPM" />
        <ScoreSummaryTab label="Social Rank No" result="3rd" />
      </Grid>
    </div>
  );
}

export default ScoreSummary;
