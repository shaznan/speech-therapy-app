import { configureStore } from "@reduxjs/toolkit";
import navSlice from "./navSlice";
import performTestSlice from "./performTestSlice";
import login_signupSlice from "./login_signupSlice";

const store = configureStore({
  reducer: {
    navigation: navSlice.reducer,
    performtest: performTestSlice.reducer,
    login_signup: login_signupSlice.reducer,
  },
});

export default store;
