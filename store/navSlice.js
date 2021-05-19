import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
  name: "navigation",
  initialState: {
    isNavVisible: false,
    menuItems: ["Home", "About us", "Articles", "Bookstore", "Contact us"],
  },
  reducers: {
    setIsNavVisible(state) {
      state.isNavVisible = !state.isNavVisible;
    },
  },
});

// export const uiActions = navSlice.actions;

export const navActions = navSlice.actions;

export default navSlice;
