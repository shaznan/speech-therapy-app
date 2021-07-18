import React from "react";
import { Fragment } from "react";
import { useStyles } from "../homepage_styles";
import Button from "@material-ui/core/Button";

function WriteArticleBanner() {
  const classes = useStyles();
  return (
    <Fragment>
      <div className={classes.writearticleBanner}>
        <div className={classes.bannertxt}>Want to share your experience?</div>
        <div>
          <Button className={classes.bannerbtn}>Write An Article</Button>
        </div>
      </div>
    </Fragment>
  );
}

export default WriteArticleBanner;
