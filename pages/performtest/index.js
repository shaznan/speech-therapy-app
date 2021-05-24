import React, { Fragment } from "react";
import Navbar from "../../components/Common_Layout/Navbar/Navbar";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "../../styles/global.styles";
import { performtestStyles } from "../../components/PerformTest_components/layout/PerformTest_Styles";
import Title from "../../components/PerformTest_components/layout/Title/Title.component";
import DisplayCurrentProgress from "../../components/PerformTest_components/layout/DisplayCurrentProgress/DisplayCurrentProgress";
import StartNowBtn from "../../components/PerformTest_components/layout/StartNowBtn";

function index() {
  const classes = performtestStyles();
  useStyles(); //include global styles
  return (
    <Fragment>
      <div className={classes.performtestbgimage}>
        <Navbar />
        <Grid container spacing={0}>
          <Title />
          <DisplayCurrentProgress />
          <StartNowBtn />
        </Grid>
      </div>
    </Fragment>
  );
}

export default index;
