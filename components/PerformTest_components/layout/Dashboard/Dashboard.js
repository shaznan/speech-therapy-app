import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import { useStyles } from "./Dashboard_Styles";
import Heading from "../../../Common_Layout/Typography/Heading";
import ScoreBenchmark from "./ScoreBenchmark/ScoreBenchmark";
import Grid from "@material-ui/core/Grid";
import ScoreSummary from "./ScoreSummary/ScoreSummary";
import OverviewGraph from "./OverviewGraph/OverviewGraph";
import Button from "../../../Common_Layout/Button/Button";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { dashBoardSlice_Actions } from "../../../../store/dashBoardSlice";

function Dashboard() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const WordsCount = useSelector((state) => state.user.entities[0].WordsCount);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const showDashboard = useSelector((state) => state.dashboard.showDashboard);

  const isWordsCountReceived = useSelector(
    (state) => state.performtest.isWordsCountReceived
  );
  const scoreHistoryData = WordsCount.map((item, i) => {
    return { Attempt_no: i + 1, score: item.wordsMatch };
  });
  const [leaderboardData, setLeaderBoardData] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!isLoggedIn) return;
    axios
      .get("/api/UserData/Leadership_scores", {
        params: {
          limit: 7,
        },
      })
      .then((res) =>
        setLeaderBoardData(
          res.data.leaderBoard.map((item) => {
            return { name: item.nickName, score: item.highScore };
          })
        )
      )
      .catch((err) => setIsError(true));
  }, [isLoggedIn, isWordsCountReceived]);

  const backBtnHandler = () => {
    dispatch(dashBoardSlice_Actions.setShowDashboard());
  };

  return (
    <Fragment>
      <div
        className={`${classes.container} ${
          showDashboard && classes.showcontainer
        }`}
      >
        <Grid container spacing={0} className={classes.dashboard_cont}>
          <Grid item md={12} style={{ marginBottom: "2rem" }}>
            <div style={{ marginBottom: "1rem" }}>
              <Button type="back" text="back" onClickHandler={backBtnHandler} />
            </div>
            <Heading text="Dashboard" fontsize="4rem" />
          </Grid>
          <Grid item md={9} className={classes.scorebenchmark_cont}>
            <ScoreBenchmark
              heading="Social Ranking"
              subheadingOne="User"
              subheadingTwo="HighScore"
              data={leaderboardData}
              isError={isError}
            />
            <ScoreBenchmark
              heading="Score History"
              subheadingOne="Attempt No."
              subheadingTwo="Score"
              data={scoreHistoryData}
              isError={isError}
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
