import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const articleSlice = createSlice({
  name: "article",
  initialState: {},
  reducers: {},
});

export const articleSlice_Actions = articleSlice.actions;

export default articleSlice;
