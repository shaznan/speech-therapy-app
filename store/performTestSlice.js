import { createSlice } from "@reduxjs/toolkit";

const performTestSlice = createSlice({
  name: "performtest",
  initialState: {
    showStartBtn: true,
    showInstructions: false,
    showCatergoryForm: false,
    isAlphabetChecked: true,
    isRandomChecked: false,
    listOfAlphabets: "abcdefghijklmnopqrstuvwxyz",
    selectedOptfromList: "",
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
  },
});

export const testActions = performTestSlice.actions;

export default performTestSlice;
