import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "../Articles_styles";

function DisplayArea() {
  const classes = useStyles();
  return (
    <Fragment>
      <Grid className={classes.displayarea_cont} item md={7}>
        <div className={classes.displayarea}></div>
      </Grid>
    </Fragment>
  );
}

export default DisplayArea;
