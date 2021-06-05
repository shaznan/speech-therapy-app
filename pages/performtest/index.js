import React, { Fragment } from "react";
import Navbar from "../../components/Common_Layout/Navbar/Navbar";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "../../styles/global.styles";
import { performtestStyles } from "../../components/PerformTest_components/layout/PerformTest_Styles";
import Title from "../../components/PerformTest_components/layout/Title/Title.component";
import DisplayCurrentProgress from "../../components/PerformTest_components/layout/DisplayCurrentProgress/DisplayCurrentProgress";
import StartNowBtn from "../../components/PerformTest_components/layout/StartNowBtn";
import { useSelector } from "react-redux";
import DisplayInstructions from "../../components/PerformTest_components/layout/DisplayInstructions/DisplayInstructions";
import SelectCatergoryForm from "../../components/PerformTest_components/layout/SelectCatergory/SelectCatergoryForm";
import TimerBeforeBegin from "../../components/PerformTest_components/layout/TimerBeforeBegin/TimerBeforeBegin.js";
import SpeechInput from "../../components/PerformTest_components/layout/SpeechInput/SpeechInput";

//FIXME:
//when click start btn, display countdown timer for 6 second done
//display message on top based on the catergory chosen
//when timer ends, hide message and countdown
//create countdown timer functionality once wait timer is done - cap it to 60 seconds
// create ui layout for listening

//!TODO:
//when start clicked, show countdown
//hide progress timer when showing countdown
// create timer functionality for 6 seconds
// when timer reaches 0 seconds hide timer, show progress time
// create listening layout with tooltip
import bgImage from "../../assets/images/pf_bgimage.png";

function index() {
  const showStartBtn = useSelector((state) => state.performtest.showStartBtn);
  const classes = performtestStyles();
  const showInstructions = useSelector(
    (state) => state.performtest.showInstructions
  );

  const showCatergoryForm = useSelector(
    (state) => state.performtest.showCatergoryForm
  );

  const showCountdown = useSelector((state) => state.performtest.showCountdown);

  useStyles(); //include global styles
  return (
    <Fragment>
      <Navbar />
      <div className={classes.performtestbgimage}>
        {/* <img src={bgImage} height="1080px" width="1900px" /> */}
        <Grid container spacing={0}>
          <Title />
          <DisplayCurrentProgress />
          {showStartBtn && <StartNowBtn />}
          {showInstructions && <DisplayInstructions />}
          {showCatergoryForm && <SelectCatergoryForm />}
          {showCountdown && <TimerBeforeBegin />}
          <SpeechInput />
        </Grid>
      </div>
    </Fragment>
  );
}

export default index;
