import React, { Fragment, useEffect } from "react";
import Navbar from "../../components/Common_Layout/Navbar/Navbar";
import Grid from "@material-ui/core/Grid";
import { performtestStyles } from "../../components/PerformTest_components/layout/PerformTest_Styles";
import Title from "../../components/PerformTest_components/layout/Title/Title.component";
import DisplayCurrentProgress from "../../components/PerformTest_components/layout/DisplayCurrentProgress/DisplayCurrentProgress";
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
import HomeButtons from "../../components/PerformTest_components/layout/PerformTestHome_btn";
import useHydrateState from "../../components/useHydrateState";
import AdminToolbar from "../../components/Common_Layout/AdminToolbar/AdminToolbar";

function index() {
  const classes = performtestStyles();
  const [hydrateWithLocalStorage] = useHydrateState();

  const loading = useSelector((state) => state.user.loading);
  useRecorder(); //handle browser recording, send data to GCP and receive transcript data
  useAlphabetValidator(); // validate transcript data if user choose alphabets
  useTopicsValidator(); //validate transcript data if user choose random topics

  //avoid losing state on page refresh
  useEffect(() => {
    hydrateWithLocalStorage();
  }, []);

  return (
    <Fragment>
      <AdminToolbar />
      <div className={classes.container}>
        <Navbar />
        <div className={classes.performtestbgimage}>
          <Grid container spacing={0}>
            <Title />
            <LoadSpinner loading={loading} />
            <DisplayCurrentProgress />
            <HomeButtons />
            <DisplayInstructions />
            <SelectCatergoryForm />
            <TimerBeforeBegin />
            <SpeechInput />
            <AnalyzingResult />
            <TranscriptErrorModal />
            <DisplayResult />
            <Dashboard />
          </Grid>
        </div>
      </div>
    </Fragment>
  );
}

export default index;
