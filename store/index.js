import { configureStore } from "@reduxjs/toolkit";
import navSlice from "./navSlice";
import performTestSlice from "./performTestSlice";

const store = configureStore({
  reducer: {
    navigation: navSlice.reducer,
    performtest: performTestSlice.reducer,
  },
});

export default store;
