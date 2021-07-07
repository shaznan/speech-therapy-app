import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "../bookstore_styles";
import MainHeading from "../SearchPanel/MainHeading.component";
import SearchBox from "../SearchPanel/SearchBox.component";

function SearchPanel() {
  const classes = useStyles();
  return (
    <Fragment>
      <Grid container spacing={0}>
        <Grid item className={classes.bgimage}>
          <MainHeading />
          <SearchBox />
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default SearchPanel;
