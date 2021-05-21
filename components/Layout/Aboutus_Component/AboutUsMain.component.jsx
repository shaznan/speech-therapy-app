import React from "react";
import AboutusMainText from "./AboutusText";
import aboutusImage from "../../../assets/images/about_us.png";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "../../../styles/global.styles";
import BannerImage from "../Banner/BannerImage";

function AboutUsMain() {
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={0} className={classes.maincontainer}>
        <AboutusMainText />
        <Grid item lg={6} xs={12} className={classes.imagecontainer}>
          <div>
            <BannerImage url={aboutusImage} size="medium" />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default AboutUsMain;
