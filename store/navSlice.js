import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
  name: "navigation",
  initialState: {
    isNavVisible: false,
    menuItems: ["Home", "About us", "Articles", "Bookstore", "Contact us"],
    isHomePageActive: false,
  },
  reducers: {
    setIsNavVisible(state) {
      state.isNavVisible = !state.isNavVisible;
    },
    setIsHomePageActive(state, action) {
      state.isHomePageActive = action.payload;
    },
  },
});

export const navActions = navSlice.actions;

export default navSlice;
