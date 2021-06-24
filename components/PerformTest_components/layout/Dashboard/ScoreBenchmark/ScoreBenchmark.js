import React from "react";
import { useStyles } from "../Dashboard_Styles";
import Grid from "@material-ui/core/Grid";
import ColumnOne from "./ColumnOne.component";
import ColumnTwo from "./ColumnTwo.component";
import dinasaurImage from "../../../../../assets/images/dinasaur_errorimg.png";

function ScoreBenchmark({
  heading,
  subheadingOne,
  subheadingTwo,
  data,
  isError,
}) {
  const classes = useStyles();
  return (
    <div>
      <h3 className={classes.scorebenchmark_heading}>{heading}</h3>
      <Grid container spacing={0} className={classes.benchmark_cont}>
        {isError && heading === "Social Ranking" ? (
          <div className={classes.errorMessage}>
            Sorry, Something went wrong on our end
            <img className={classes.errorimage} src={dinasaurImage} />
          </div>
        ) : (
          <Grid item md={6} className={classes.scorebody_cont}>
            <ColumnOne subheadingOne={subheadingOne} data={data} />
          </Grid>
        )}
        {((isError && heading !== "Social Ranking") || !isError) && (
          <Grid item md={6} className={classes.scorebody_cont}>
            <ColumnTwo subheadingTwo={subheadingTwo} data={data} />
          </Grid>
        )}
      </Grid>
    </div>
  );
}

export default ScoreBenchmark;
