import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "../bookstore_styles";
import MainHeading from "./MainHeading.component";

function SearchPanel() {
  const classes = useStyles();
  return (
    <Fragment>
      <Grid container spacing={0}>
        <Grid item className={classes.bgimage}>
          <MainHeading />
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default SearchPanel;
