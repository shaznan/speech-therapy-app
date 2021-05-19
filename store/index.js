import { configureStore } from "@reduxjs/toolkit";
import navSlice from "./navSlice";

const store = configureStore({
  reducer: { navigation: navSlice.reducer },
});

export default store;
