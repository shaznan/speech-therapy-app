import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "../bookstore_styles";
import Heading from "../../Common_Layout/Typography/Heading";

function MainHeading() {
  const classes = useStyles();
  return (
    <Fragment>
      <Grid item={12} className={classes.mainheading}>
        <Heading text="- The more you read, the more you grow -" />
      </Grid>
    </Fragment>
  );
}

export default MainHeading;
