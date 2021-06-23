import React from "react";
import { Line } from "react-chartjs-2";
import { useStyles } from "../Dashboard_Styles";

function OverviewGraph({ scoreHistoryData }) {
  const classes = useStyles();
  const attempts = scoreHistoryData.map((item) => {
    return item.Attempt_no;
  });
  const score = scoreHistoryData.map((item) => {
    return item.score;
  });
  const data = {
    labels: attempts,
    datasets: [
      {
        label: "scores",
        data: score,
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
  };
  return (
    <div>
      <div className={classes.graph_cont}>
        <div className="header">
          <h1 className="title">Overview</h1>
          <div className="links"></div>
        </div>
        <div className={classes.graph}>
          <Line data={data} options={options} />
        </div>
      </div>
    </div>
  );
}

export default OverviewGraph;
