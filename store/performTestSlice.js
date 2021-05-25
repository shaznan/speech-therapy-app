import { createSlice } from "@reduxjs/toolkit";

const performTestSlice = createSlice({
  name: "performtest",
  initialState: {
    showStartBtn: true,
    showInstructions: false,
    isAlphabetChecked: false,
    isRandomChecked: false,
  },
  reducers: {
    setShowStartBtn: (state, action) => {
      state.showStartBtn = action.payload;
    },
    setShowInstructions: (state, action) => {
      state.showInstructions = action.payload;
    },
    toggleCheckbox: (state, action) => {
      action.payload === "alphabet"
        ? (state.isAlphabetChecked = !state.isAlphabetChecked)
        : action.payload === "random"
        ? (state.isRandomChecked = !state.isRandomChecked)
        : "";
    },
    // toggleIsRandomChecked: (state) => {
    //   state.isRandomChecked = !state.isRandomChecked;
    // },
  },
});

// export const toggleIsAlphabetChecked = () => {
//   return async (dispatch) => {
//     dispatch((state.isAlphabetChecked = !state.isAlphabetChecked));
//   };
// };

export const testActions = performTestSlice.actions;

export default performTestSlice;
