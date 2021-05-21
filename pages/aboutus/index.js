import React, { Fragment } from "react";
import Navbar from "../../components/Layout/Navbar/Navbar";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "../../styles/global.styles";
import AboutusMainText from "../../components/Layout/Aboutus_Component/AboutusText.component";
import aboutusImage from "../../assets/images/about_us.png";
import BannerImage from "../../components/Layout/Banner/BannerImage";
import personFigure from "../../assets/images/shaznan_image.png";
import Heading from "../../components/Layout/Typography/Heading";
import Paragraph from "../../components/Layout/Typography/Paragraph";
// import bgImageOne from "../../assets/images/bg_image_one.png";

export default function Home() {
  const classes = useStyles();

  return (
    <Fragment>
      <Navbar />
      <div>
        <Grid container spacing={0} className={classes.maincontainer}>
          <Grid item lg={6} xs={12} className={classes.textcontainer}>
            <AboutusMainText />
          </Grid>
          <Grid item lg={6} xs={12} className={classes.imagecontainer}>
            <div>
              <BannerImage url={aboutusImage} size="medium" />
            </div>
          </Grid>
        </Grid>
      </div>
      <div>
        <div className={classes.bgimage}>
          <Grid container spacing={0} className={classes.maincontainer}>
            <Grid item lg={6} xs={12} className={classes.textcontainer}>
              <Grid container spacing={0} className={classes.subcontainer}>
                <Grid item lg={12} className={classes.subtextcontainer}>
                  <div>
                    <Heading text="Our Culture" />
                    <Paragraph
                      text="We are a group of ordinary tech geeks with the initiative
                    to help people around the world where there are no actions given.
                    Constantly learning and growing together is how we roll!
                    Thinking out of the box is the only moto we know."
                    />
                  </div>
                </Grid>
                <Grid item lg={12} className={classes.subtextcontainer}>
                  <div>
                    <Heading text="Our Founder" />
                    <Paragraph
                      text="Our CEO Shaznan Fairoze, started his mission to bring confidence
                        to people who are suffering from the ability to convey their message to
                        the crowd. He has always been on the lookout to find possibilities to 
                        make tech a solution to all your problems."
                    />
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <Grid item lg={6} xs={12} className={classes.imagecontainer}>
              <div>
                <BannerImage url={personFigure} size="large" />
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </Fragment>
  );
}
