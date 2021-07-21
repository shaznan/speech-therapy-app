import React from "react";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "../Dashboard_Styles";
import ScoreSummaryTab from "./ScoreSummaryTab.component";
import { useSelector } from "react-redux";

function ScoreSummary() {
  const classes = useStyles();
  const changeOverPrevScore = useSelector(
    (state) => state.user.entities[0].changeOverPrevScore,
  );
  const averageScore = useSelector(
    (state) => state.user.entities[0].averageScore,
  );
  const scoreAvgcriteria = useSelector(
    (state) => state.user.entities[0].scoreAvgeCriteria,
  );
  const highScore = useSelector((state) => state.user.entities[0].highScore);
  return (
    <div>
      <Grid container className={classes.summary_cont}>
        <ScoreSummaryTab
          label="Change over prev"
          result={`${changeOverPrevScore}%`}
        />
        <ScoreSummaryTab label="AverageScore" result={`${averageScore} WPM`} />
        <ScoreSummaryTab
          label="Score Avg Criteria"
          result={`${scoreAvgcriteria}`}
        />
        <ScoreSummaryTab label="High Score" result={`${highScore} WPM`} />
        <ScoreSummaryTab label="Social Rank No" result="3rd" />
      </Grid>
    </div>
  );
}

export default ScoreSummary;
