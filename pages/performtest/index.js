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
import AnalyzingResult from "../../components/PerformTest_components/layout/AnalyzingResultLoader/AnalyzingResult";
import useRecorder from "../../components/PerformTest_components/layout/SpeechInput/useRecorder";
import useAlphabetValidator from "../../components/PerformTest_components/DataValidation/Alphabetical_letters/useAlphabetValidator";
import TranscriptErrorModal from "../../components/PerformTest_components/layout/TranscriptErrorModal/TranscriptErrorModal";
import DisplayResult from "../../components/PerformTest_components/layout/DisplayResult/DisplayResult";
import useTopicsValidator from "../../components/PerformTest_components/DataValidation/Random_topics/useTopicsValidator";
import LoadSpinner from "../../components/Common_Layout/loadspinner/loadSpinner";
import Dashboard from "../../components/PerformTest_components/layout/Dashboard/Dashboard";
import PerformTestHome_Btn from "../../components/PerformTest_components/layout/PerformTestHome_btn";

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
  const isTimeIsUp = useSelector((state) => state.performtest.isTimeIsUp);
  const isAnalyzing = useSelector((state) => state.performtest.isAnalyzing);
  useRecorder();
  useStyles(); //include global styles
  useAlphabetValidator(); // execute validation function
  useTopicsValidator();

  return (
    <Fragment>
      <div className={classes.container}>
        {/* //TODO: ENABLE */}
        <Navbar />
        <div className={classes.performtestbgimage}>
          <Grid container spacing={0}>
            <Title /> {/* TODO: Move to performtesthome page */}
            <LoadSpinner />
            <DisplayCurrentProgress />
            {showStartBtn && <PerformTestHome_Btn />}
            {showInstructions && <DisplayInstructions />}
            {showCatergoryForm && <SelectCatergoryForm />}
            {showCountdown && <TimerBeforeBegin />}
            {!isTimeIsUp && <SpeechInput />}
            {isAnalyzing && <AnalyzingResult />}
            <TranscriptErrorModal />
            <DisplayResult />
            {<Dashboard />}
          </Grid>
        </div>
      </div>
    </Fragment>
  );
}

export default index;
