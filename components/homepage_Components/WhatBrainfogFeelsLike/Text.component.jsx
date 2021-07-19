import React from "react";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "../homepage_styles";
import { Fragment } from "react";
import { Typography } from "@material-ui/core";

function Text() {
  const classes = useStyles();
  return (
    <Fragment>
      <Grid container spacing={0} className={classes.feelsLike_txtContainer}>
        <Grid container spacing={0} className={classes.feelsLike_subtxt_cont}>
          <Grid item sm={12} className={classes.feelsLike_heading_cont}>
            <Typography variant="h3" className={classes.feelsLike_heading}>
              What BrainFog feels like?{" "}
            </Typography>
          </Grid>
          <Grid item sm={12} className={classes.feelsLiketxt_cont}>
            <Typography>
              A person might feel less mentally sharp than usual. Thoughts and
              emotions may feel numb, and everyday activities may seem to
              require more effort. Some people describe it as a foggy haze that
              makes it harder to access words, their thoughts or plan ahead.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default Text;
