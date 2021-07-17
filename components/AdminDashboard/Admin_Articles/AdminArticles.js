import React from "react";
import { useStyles } from "../AdminDashboard_styles";
import Grid from "@material-ui/core/Grid";
import { Fragment } from "react";
import ArticleTable from "./ArticleTable.component";
import { Typography } from "@material-ui/core";

function AdminArticles() {
  const classes = useStyles();
  return (
    <Fragment>
      <Grid item md={12} className={classes.articles_mainheading}>
        <Typography variant="h3"> List of Articles</Typography>
      </Grid>
      <Grid item md={12} className={classes.articleTable_main_cont}>
        <ArticleTable />
      </Grid>
    </Fragment>
  );
}

export default AdminArticles;
