import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { Fragment } from "react";
import { useStyles } from "./Footer_Styles";

function FooterBody() {
  const classes = useStyles();
  return (
    <Fragment>
      <Grid item md={10} sm={10} className={classes.item}>
        <Typography variant="h5" className={classes.heading}>
          About
        </Typography>
        <Typography variant="subtitle1" className={classes.bodytext}>
          SpeechTherapy is a global organization on the lookout for solutions
          for people who are suffering from their day to day speech problems as
          a result of having Brain Fog.
        </Typography>
        <Typography variant="subtitle2">
          <p className="copyright" className={classes.copyright}>
            <span className={classes.copyrightSign}>&copy;</span>{" "}
            {`${"Copyright by "}`}
            <a
              className="twitter-link"
              target="_blank"
              href="https://github.com/shaznan">
              Shaznan Fairoze
            </a>
            , do not claim as your own
          </p>
        </Typography>
      </Grid>
    </Fragment>
  );
}

export default FooterBody;
