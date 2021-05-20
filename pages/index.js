import React, { Fragment } from "react";
import Navbar from "../components/Layout/Navbar/Navbar";
import Grid from "@material-ui/core/Grid";
import HomepageImage from "../assets/images/homepage_image.png";
import { useStyles } from "../components/Layout/homepage/home.styles";
import HomepageText from "../components/Layout/homepage/HomepageText";
import DynamicButton from "../components/Layout/Button/Button";
import BannerImage from "../components/Layout/Banner/BannerImage";

export default function Home() {
  const classes = useStyles();

  return (
    <Fragment>
      <Navbar />
      <div className={classes.homecontainer}>
        <Grid container spacing={0} className={classes.homecontainer}>
          <Grid item lg={6} xs={12} className={classes.textcontainer}>
            <div>
              <HomepageText />
              <DynamicButton type="primary" text="Perform Test" />
            </div>
          </Grid>
          <Grid item lg={6} xs={12} className={classes.imagecontainer}>
            <div>
              <BannerImage url={HomepageImage} />
            </div>
          </Grid>
        </Grid>
      </div>
    </Fragment>
  );
}
