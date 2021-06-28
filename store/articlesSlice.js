import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const articleSlice = createSlice({
  name: "article",
  initialState: {
    topicIdSelected: null,
    isVerifiedChecked: true,
    isCommunityChecked: false,
  },
  reducers: {
    setTopicIdSelected(state, action) {
      state.topicIdSelected = action.payload;
    },
    toggleCheckbox: (state, action) => {
      action.payload === "verified"
        ? (state.isVerifiedChecked = !state.isVerifiedChecked)
        : action.payload === "community"
        ? (state.isCommunityChecked = !state.isCommunityChecked)
        : "";
    },
  },
});

export const articleSlice_Actions = articleSlice.actions;

export default articleSlice;
