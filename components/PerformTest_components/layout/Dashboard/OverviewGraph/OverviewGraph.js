import React from "react";
import { Line } from "react-chartjs-2";
import { useStyles } from "../Dashboard_Styles";

const data = {
  labels: ["1", "2", "3", "4", "5", "6"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
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

function OverviewGraph() {
  const classes = useStyles();
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
