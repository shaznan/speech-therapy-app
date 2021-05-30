import { createSlice } from "@reduxjs/toolkit";

const performTestSlice = createSlice({
  name: "performtest",
  initialState: {
    showStartBtn: true,
    showInstructions: false,
    showCatergoryForm: false,
    showCountdown: false,
    showRemainingTime: true,
    isAlphabetChecked: true,
    isRandomChecked: false,
    listOfAlphabets: "abcdefghijklmnopqrstuvwxyz",
    selectedOptfromList: "",
    isListening: false,
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
    setShowCountdown(state, action) {
      state.showCountdown = action.payload;
    },
    setShowRemainingTime(state, action) {
      state.showRemainingTime = action.payload;
    },
    setIsListening(state) {
      state.isListening = !state.isListening;
    },
  },
});

export const testActions = performTestSlice.actions;

export default performTestSlice;
