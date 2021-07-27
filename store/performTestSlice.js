import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const retrieveTopicNames = createAsyncThunk(
  "performtest/retrieveTopicNames",
  async () => {
    return axios.get("/api/getTopicNames").then((res) => {
      return res.data;
    });
  },
);

const performTestSlice = createSlice({
  name: "performtest",
  initialState: {
    isPerformTestError: false,
    ErrorMsg: null,
    showStartBtn: true,
    showInstructions: false,
    showCatergoryForm: false,
    showCountdown: false,
    showRemainingTime: true,
    //select catergory form
    isAlphabetChecked: true,
    isRandomChecked: false,
    listOfAlphabets: "abcdefghijklmnopqrstuvw",
    topicsToChooseFrom: null,
    selectedOptfromList: "",
    isOptionSelected: false,
    isRecording: false,
    //displayremainingtime component
    isTimeIsUp: false,
    currentTestDuration: 20, //performtest duration
    remainingTime: 20, //performtest duration
    countdownPercent: 100,
    //userecorder component
    mediaPermisson: null,
    transcript: null,
    isAnalyzing: false,
    isTranscriptError: false,
    isWordsCountReceived: false,
    isTranscriptReceived: false,
  },
  reducers: {
    setIsPerformTestError: (state, action) => {
      state.isPerformTestError = action.payload;
    },
    setErrorMsg: (state, action) => {
      state.ErrorMsg = action.payload;
    },
    clearError: (state) => {
      state.ErrorMsg = null;
      state.isPerformTestError = false;
    },
    setShowStartBtn: (state, action) => {
      state.showStartBtn = action.payload;
    },
    setShowInstructions: (state, action) => {
      state.showInstructions = action.payload;
    },
    setShowCatergoryForm: (state, action) => {
      state.showCatergoryForm = action.payload;
    },
    toggleCheckbox: (state, action) => {
      if (action.payload === "alphabet") {
        state.isAlphabetChecked = !state.isAlphabetChecked;
        state.selectedOptfromList = "";
        state.isOptionSelected = false;
      }
      if (action.payload === "random") {
        state.isRandomChecked = !state.isRandomChecked;
        state.selectedOptfromList = "";
        state.isOptionSelected = false;
      }
    },

    setSelectedOptfromList: (state, action) => {
      state.selectedOptfromList = action.payload;
    },
    setIsOptionSelected: (state, action) => {
      state.isOptionSelected = action.payload;
    },
    setShowCountdown(state, action) {
      state.showCountdown = action.payload;
    },
    setShowRemainingTime(state, action) {
      state.showRemainingTime = action.payload;
    },
    setIsRecording(state) {
      state.isRecording = !state.isRecording;
    },
    //useRecorder component
    setMediaPermission(state, action) {
      state.mediaPermisson = action.payload;
    },
    setTranscript(state, action) {
      state.transcript = action.payload;
    },
    setIsTimeIsUp(state, action) {
      state.isTimeIsUp = action.payload;
    },
    setIsAnalyzing(state, action) {
      state.isAnalyzing = action.payload;
    },

    setIsWordsCountReceived(state, action) {
      state.isWordsCountReceived = action.payload;
    },
    setIsTranscriptReceived(state, action) {
      state.isTranscriptReceived = action.payload;
    },
    setIsTranscriptError(state, action) {
      state.isTranscriptError = action.payload;
    },
    decrementRemainingTime(state) {
      state.remainingTime = state.remainingTime - 1;
    },
    setRemainingTime(state, action) {
      state.remainingTime = action.payload;
    },
    setCountdownPercent(state, action) {
      state.countdownPercent = state.countdownPercent - action.payload;
    },
    resetCountdownPercent(state, action) {
      state.countdownPercent = action.payload;
    },
    restartTest(state) {
      state.showStartBtn = true;
      state.showRemainingTime = true;
      state.isAnalyzing = false;
      state.remainingTime = 20; //performtest duration
      state.isTimeIsUp = false;
      state.isWordsCountReceived = false;
      state.selectedOptfromList = "";
      state.countdownPercent = 100;
      state.transcript = null;
      state.isTranscriptError = false;
      state.isTranscriptReceived = false;
      state.isOptionSelected = false;
    },
  },
  extraReducers: {
    [retrieveTopicNames.pending]: (state) => {
      state.loading = "loading";
    },
    [retrieveTopicNames.fulfilled]: (state, action) => {
      state.loading = "success";
      state.topicsToChooseFrom = action.payload;
    },
    [retrieveTopicNames.rejected]: (state) => {
      state.loading = "failed";
      state.isPerformTestError = true;
      state.ErrorMsg = "Couldn't receive topic names";
    },
  },
});

export const testActions = performTestSlice.actions;

export default performTestSlice;
