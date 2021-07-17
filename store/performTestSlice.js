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
    showStartBtn: true,
    showInstructions: false,
    showCatergoryForm: false,
    showCountdown: false,
    showRemainingTime: true,
    //select catergory form
    isAlphabetChecked: true,
    isRandomChecked: false,
    listOfAlphabets: "abcdefghijklmnopqrstuvwxyz",
    topicsToChooseFrom: null,
    selectedOptfromList: "",
    isOptionSelected: false,
    isRecording: false,
    //displayremainingtime component
    isTimeIsUp: false,
    remainingTime: 2,
    countdownPercent: 100,
    //userecorder component
    mediaPermisson: null,
    transcript: null,
    isAnalyzing: false,
    isTranscriptError: false,
    //data validation: words start with letter

    isWordsCountReceived: false,
    isTranscriptReceived: false,
    //login
    // isLoggedIn: false,
  },
  reducers: {
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
      action.payload === "alphabet"
        ? (state.isAlphabetChecked = !state.isAlphabetChecked) &&
          (state.selectedOptfromList = "")
        : action.payload === "random"
        ? (state.isRandomChecked = !state.isRandomChecked) &&
          (state.selectedOptfromList = "")
        : "";
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
    },
  },
});

export const testActions = performTestSlice.actions;

export default performTestSlice;
