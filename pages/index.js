import React, { Fragment, useEffect } from "react";
import Navbar from "../components/Layout/Navbar/Navbar";
import Grid from "@material-ui/core/Grid";
// import classes from "./home.module.css";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import HomepageImage from "../assets/images/homepage_image.png";

const useStyles = makeStyles({
  textcontainer: {
    // background: "red",
    height: "87vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 5,
  },
  mainheading: {
    fontFamily: "product-sans, sans-serif",
    marginBottom: "2rem",
  },
  textdecoration: {
    fontFamily: "spydolls, sans-serif",
    fontSize: "7rem",
    lineHeight: "0.8em",
  },
  subtitle: {
    fontSize: "1.2rem",
    marginBottom: "3rem",
    opacity: 0.6,
  },
  primarybutton: {
    backgroundColor: "#ED1C24",
    padding: "0.5rem 1.5rem",
    fontWeight: "bold",
    color: "white",
    textTransform: "capitalize",
    borderRadius: "7px",
  },
  imagecontainer: {
    height: "87vh",
  },
  homepageimage: {
    width: "31vw",
  },
});

export default function Home() {
  const classes = useStyles();

  return (
    <Fragment>
      <Navbar />
      <div className={classes.homecontainer}>
        <Grid container spacing={0}>
          <Grid item lg={6} className={classes.textcontainer}>
            <div>
              <Typography variant="h2" className={classes.mainheading}>
                Elevate Your Verbal <br />{" "}
                <span className={classes.textdecoration}>Fluency</span> With Us
              </Typography>
              <Typography variant="subtitle1" className={classes.subtitle}>
                Try out our verbal fluency tests in order to elevate <br /> your
                ability to retrieve specific information within your <br />
                brain's restricted search parameters.
              </Typography>
              <Button className={classes.primarybutton}>Perform Test</Button>
            </div>
          </Grid>
          <Grid item lg={6} className={classes.textcontainer}>
            <div>
              <img src={HomepageImage} className={classes.homepageimage} />
            </div>
          </Grid>
        </Grid>
      </div>
    </Fragment>
  );
}
