import React from "react";
import { Fragment } from "react";
import { useStyles } from "./Dashboard_Styles";
import Heading from "../../../Common_Layout/Typography/Heading";
import ScoreBenchmark from "./ScoreBenchmark/ScoreBenchmark";
import Grid from "@material-ui/core/Grid";
import ScoreSummary from "./ScoreSummary/ScoreSummary";
import OverviewGraph from "./OverviewGraph/OverviewGraph";
import Button from "../../../Common_Layout/Button/Button";
import { useSelector } from "react-redux";

function Dashboard() {
  const classes = useStyles();
  const WordsCount = useSelector((state) => state.user.entities[0].WordsCount);
  const scoreHistoryData = WordsCount.map((item, i) => {
    return { Attempt_no: i + 1, score: item.wordsMatch };
  });
  return (
    <Fragment>
      <div className={classes.container}>
        <Grid container spacing={0} className={classes.dashboard_cont}>
          <Grid item md={12} style={{ marginBottom: "2rem" }}>
            <div style={{ marginBottom: "1rem" }}>
              <Button type="back" text="back" />
            </div>
            <Heading text="Dashboard" fontsize="4rem" />
          </Grid>
          <Grid item md={9} className={classes.scorebenchmark_cont}>
            <ScoreBenchmark
              heading="Social Ranking"
              subheadingOne="User"
              subheadingTwo="HighScore"
              data={[
                { name: "shaznan", score: 23 },
                { name: "abdullah", score: 22 },
                { name: "shazmeer", score: 21 },
                { name: "esa", score: 24 },
                { name: "sharaf", score: 25 },
                { name: "jarrod", score: 26 },
                { name: "husni", score: 18 },
                { name: "makee", score: 15 },
              ]}
            />
            <ScoreBenchmark
              heading="Score History"
              subheadingOne="Attempt No."
              subheadingTwo="Score"
              data={scoreHistoryData}
            />
          </Grid>
          <Grid
            style={{ display: "flex", justifyContent: "center" }}
            item
            md={3}
          >
            <ScoreSummary />
          </Grid>
          <Grid item md={9}>
            <OverviewGraph scoreHistoryData={scoreHistoryData} />
          </Grid>
        </Grid>
      </div>
    </Fragment>
  );
}

export default Dashboard;
