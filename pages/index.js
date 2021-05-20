import React, { Fragment, useEffect } from "react";
import Navbar from "../components/Layout/Navbar/Navbar";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import HomepageImage from "../assets/images/homepage_image.png";
import { useStyles } from "./home.styles";

export default function Home() {
  const classes = useStyles();

  return (
    <Fragment>
      <Navbar />
      <div className={classes.homecontainer}>
        <Grid container spacing={0} className={classes.homecontainer}>
          <Grid item lg={6} xs={12} className={classes.textcontainer}>
            <div>
              <Typography variant="h2" className={classes.mainheading}>
                Elevate Your Verbal <br className={classes.linebreak} />
                <span className={classes.textdecoration}>Fluency</span> With Us
              </Typography>
              <Typography variant="subtitle1" className={classes.subtitle}>
                Try out our verbal fluency tests in order to elevate{" "}
                <br className={classes.linebreak} /> your ability to retrieve
                specific information within your{" "}
                <br className={classes.linebreak} />
                brain's restricted search parameters.
              </Typography>
              <Button className={classes.primarybutton}>Perform Test</Button>
            </div>
          </Grid>
          <Grid item lg={6} xs={12} className={classes.imagecontainer}>
            <div>
              <img src={HomepageImage} className={classes.homepageimage} />
            </div>
          </Grid>
        </Grid>
      </div>
    </Fragment>
  );
}
