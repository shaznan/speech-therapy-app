import { createSlice } from "@reduxjs/toolkit";

const dashBoardSlice = createSlice({
  name: "dashboard",
  initialState: {
    showDashboard: false,
  },
  reducers: {
    setShowDashboard(state) {
      state.showDashboard = !state.showDashboard;
    },
  },
});

export const dashBoardSlice_Actions = dashBoardSlice.actions;

export default dashBoardSlice;
