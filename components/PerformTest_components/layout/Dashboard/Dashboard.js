import React from "react";
import { Fragment } from "react";
import { useStyles } from "./Dashboard_Styles";
import Heading from "../../../Common_Layout/Typography/Heading";
import ScoreBenchmark from "./ScoreBenchmark/ScoreBenchmark";
import Grid from "@material-ui/core/Grid";
import ScoreSummary from "./ScoreSummary/ScoreSummary";
import OverviewGraph from "./OverviewGraph/OverviewGraph";

function Dashboard() {
  const classes = useStyles();
  return (
    <Fragment>
      <div className={classes.container}>
        <Grid container spacing={0} className={classes.dashboard_cont}>
          <Grid style={{ marginBottom: "1rem" }} item md={12}>
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
              data={[
                { Attempt_no: "one", score: 12 },
                { Attempt_no: "two", score: 23 },
                { Attempt_no: "three", score: 12 },
                { Attempt_no: "four", score: 15 },
                { Attempt_no: "five", score: 20 },
                { Attempt_no: "six", score: 17 },
                { Attempt_no: "seven", score: 22 },
              ]}
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
            <OverviewGraph />
          </Grid>
        </Grid>
      </div>
    </Fragment>
  );
}

export default Dashboard;
