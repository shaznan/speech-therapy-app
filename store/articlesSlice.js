import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const articleSlice = createSlice({
  name: "article",
  initialState: {
    topicIdSelected: null,
  },
  reducers: {
    setTopicIdSelected(state, action) {
      state.topicIdSelected = action.payload;
    },
  },
});

export const articleSlice_Actions = articleSlice.actions;

export default articleSlice;
