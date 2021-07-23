import React from "react";
import AboutusMainText from "./AboutusText";
import aboutusImage from "../../assets/images/about_us.png";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./Aboutus_styles";
import BannerImage from "../../components/Common_Layout/Banner/BannerImage";
// import BannerImage from "../Banner/BannerImage";
import Slide from "react-reveal/Slide";

function AboutUsMain() {
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={0} className={classes.maincontainer}>
        <AboutusMainText />
        <Grid item lg={6} xs={12} className={classes.imagecontainer}>
          <Slide duration={1000} right>
            <div>
              <BannerImage url={aboutusImage} size="medium" />
            </div>
          </Slide>
        </Grid>
      </Grid>
    </div>
  );
}

export default AboutUsMain;
