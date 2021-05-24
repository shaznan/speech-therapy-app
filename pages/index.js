import React, { Fragment } from "react";
import Navbar from "../components/Common_Layout/Navbar/Navbar";
import Grid from "@material-ui/core/Grid";
import HomepageImage from "../assets/images/homepage_image.png";
import { useStyles } from "../styles/global.styles";
import HomepageText from "../components/homepage_Components/HomepageText";
import DynamicButton from "../components/Common_Layout/Button/Button";
import BannerImage from "../components/Common_Layout/Banner/BannerImage";

export default function Home() {
  const classes = useStyles();

  return (
    <Fragment>
      <Navbar />
      <div>
        <Grid container spacing={0} className={classes.maincontainer}>
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
