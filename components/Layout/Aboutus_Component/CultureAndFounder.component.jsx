import React from "react";
import { useStyles } from "../../../styles/global.styles";
import BannerImage from "../Banner/BannerImage";
import Grid from "@material-ui/core/Grid";
import personFigure from "../../../assets/images/shaznan_image.png";
import { OurCultureText } from "./AboutusText";
import { OurFounderText } from "./AboutusText";

function CultureAndFounder() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.bgimage}>
        <Grid container spacing={0} className={classes.maincontainer}>
          <Grid item lg={6} xs={12} className={classes.textcontainer}>
            <Grid container spacing={0} className={classes.subcontainer}>
              <OurCultureText />
              <OurFounderText />
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
  );
}

export default CultureAndFounder;
