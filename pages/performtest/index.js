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
// import useAnalyzeResult from "../../components/PerformTest_components/layout/DisplayResult/useAnalyzeResult"; //FIXME: REMOVE
import StoreData_MongoDb from "../../components/StoreData_MongoDB/StoreData_MongoDb"; //FIXME: Remove

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
      <Navbar />
      <div className={classes.performtestbgimage}>
        <Grid container spacing={0}>
          <Title /> {/* TODO: Move to performtesthome page */}
          <DisplayCurrentProgress />
          {showStartBtn && <StartNowBtn />}
          {showInstructions && <DisplayInstructions />}
          {showCatergoryForm && <SelectCatergoryForm />}
          {showCountdown && <TimerBeforeBegin />}
          {!isTimeIsUp && <SpeechInput />}
          {isAnalyzing && <AnalyzingResult />}
          <TranscriptErrorModal />
          <DisplayResult />
          {/* remove FIXME: */}
          {/* <StoreData_MongoDb /> */}
        </Grid>
      </div>
    </Fragment>
  );
}

export default index;
