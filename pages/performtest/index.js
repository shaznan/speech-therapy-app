import React, { Fragment } from "react";
import Navbar from "../../components/Layout/Navbar/Navbar";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "../../styles/global.styles";
import Typography from "@material-ui/core/Typography";
import Heading from "../../components/Layout/Typography/Heading";
import CircularProgress from "@material-ui/core/CircularProgress";
import Box from "@material-ui/core/Box";

const performtestStyles = makeStyles({
  title: {
    marginTop: "4rem",
    width: "100%,",
    textAlign: "center",
  },
  timespinner: {
    display: "flex",
    justifyContent: "center",
    marginTop: "6rem",
    marginLeft: "-9rem",
    // backgroundColor: "transparent",
    // backgroundColor: "red",

    // backgroundColor: "white",
    // position: "relative",
  },
  time: {
    color: "#FFD105",
    width: "8rem !important",
    backgroundColor: "transparent",
    zIndex: 1,

    // backgroundColor: "red",
    // overlayStyle: { backgroundColor: "red" },
    // borderRadius: "20px",
    // backgroundSize: "cover",
    // borderRadius: "20 !important",
  },
  currentprogress: {
    display: "flex",
    justifyContent: "center",
  },
  wordcount: {
    marginTop: "3rem",
    textAlign: "center",
    backgroundColor: "white",
    padding: "1rem 5rem",
    borderRadius: 19,
  },
  label: {
    fontSize: "1.3rem",
    opacity: "0.6",
  },
  wordspermin: {
    fontSize: "3rem",
    fontFamily: "product-sans, sans-serif",
    fontWeight: "bold",
  },
  countdownsec: {
    fontSize: "3rem",
    fontFamily: "product-sans, sans-serif",
    fontWeight: "bold",
    backgroundColor: "white",
    padding: "1.5rem 2rem 2.5rem 2rem",
    borderRadius: 80,

    // zIndex: +2,
  },
  countdownlabel: {
    // marginRight: "12rem !important",
    marginLeft: "1.8rem",
    marginTop: "-3rem",
    // top: "5rem",
    // zIndex: +2,
  },
  // countdownbg: {
  //   backgroundColor: "white",
  //   height: "8rem",
  //   width: "8rem",
  //   // zIndex: -1,
  //   position: "absolute",
  //   top: "0rem",

  //   // bottom: "1rem",
  // },
});

//FIXME:
//give white background to timer
//align text inside timer by position absolute
//create timer function and dont call it ;)

function index() {
  const classes = performtestStyles();
  const globalClasses = useStyles();
  return (
    <Fragment>
      <div className={classes.performtestbgimage}>
        <Navbar />
        <Grid container spacing={0}>
          <Grid item lg={12} className={classes.title}>
            <Typography variant="h5" className={classes.subtitle}>
              Verbal Fluency Test
            </Typography>
            <Heading
              text="Test your Verbal Fluency Rate"
              className={classes.maintitle}
            />
          </Grid>
          <Grid item lg={12}>
            <Grid container spacing={0} className={classes.currentprogress}>
              <Grid item lg={2} className={classes.timespinner}>
                <Box position="relative" display="inline-flex">
                  <CircularProgress
                    variant="determinate"
                    value={100}
                    className={classes.time}
                  />

                  <Box top="-2.7rem" left="3rem" position="absolute">
                    <Typography variant="h3" className={classes.countdownsec}>
                      60
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      className={classes.countdownlabel}
                    >
                      seconds
                    </Typography>
                    {/* <div className={classes.countdownbg}></div> */}
                  </Box>
                </Box>
              </Grid>
              <Grid item lg={2} className={classes.wordcount}>
                <div className={classes.label}>Words/Min</div>
                <div>
                  <Typography variant="h3" className={classes.wordspermin}>
                    23
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </Fragment>
  );
}

export default index;
