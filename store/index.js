import { configureStore } from "@reduxjs/toolkit";
import navSlice from "./navSlice";
import performTestSlice from "./performTestSlice";
import login_signupSlice from "./login_signupSlice";
import userSlice from "./userSlice";
import dashBoardSlice from "./dashBoardSlice";
import articleSlice from "./articlesSlice";
import bookstoreSlice from "./bookstoreSlice";
import adminSlice from "./adminSlice";

const store = configureStore({
  //My reference: redux- toolkit will automatically combine reducers, we also don't need to specify middleware //REMOVE
  reducer: {
    navigation: navSlice.reducer,
    performtest: performTestSlice.reducer,
    login_signup: login_signupSlice.reducer,
    user: userSlice.reducer,
    dashboard: dashBoardSlice.reducer,
    article: articleSlice.reducer,
    bookstore: bookstoreSlice.reducer,
    adminDashboard: adminSlice.reducer,
    //Need to disable devtools if ENV is !== "production"
  },
});

export default store;
