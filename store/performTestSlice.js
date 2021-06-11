import { createSlice } from "@reduxjs/toolkit";

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
    selectedOptfromList: "",
    isOptionSelected: false,
    isRecording: false,
    //displayremainingtime component
    isTimeIsUp: false,
    remainingTime: 3,
    countdownPercent: 100,
    //userecorder component
    mediaPermisson: null,
    transcript: null,
    isAnalyzing: false,
    isTranscriptError: false,
    //data validation: words start with letter
    WordsCount: [],
    isTranscriptReceived: false,
    //login
    isLoggedIn: false,
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
        ? (state.isAlphabetChecked = !state.isAlphabetChecked)
        : action.payload === "random"
        ? (state.isRandomChecked = !state.isRandomChecked)
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
    setWordsCount(state, action) {
      state.WordsCount = [...state.WordsCount, action.payload];
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
});

export const testActions = performTestSlice.actions;

export default performTestSlice;
