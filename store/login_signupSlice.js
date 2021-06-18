import { createSlice } from "@reduxjs/toolkit";

const login_signupSlice = createSlice({
  name: "login_signup",
  initialState: {
    signInActive: false,
    signUpActive: true,
    user: "",
    email: "",
    password: "",
    hasAccount: false,
    emailErrorMsg: "",
    isEmailError: false,
    token: "",
    isLoggedIn: false,
  },
  reducers: {
    setSignInActive(state, action) {
      state.signInActive = action.payload;
    },
    setSignUpActive(state, action) {
      state.signUpActive = action.payload;
    },
    toggleBtnActiveStatus(state) {
      state.signInActive = !state.signInActive;
      state.signUpActive = !state.signUpActive;
    },
    setUser(state, action) {
      state.user = action.payload;
    },
    setEmail(state, action) {
      state.email = action.payload;
    },
    setPassword(state, action) {
      state.password = action.payload;
    },
    setEmailErrorMsg(state, action) {
      state.emailErrorMsg = action.payload;
    },
    setIsEmailError(state, action) {
      state.isEmailError = action.payload;
    },
    // setToken(state, action) {
    //   state.token = action.payload;
    // },
    setIsLoggedIn(state, action) {
      state.isLoggedIn = action.payload;
    },
    loginHandler(state, action) {
      state.token = action.payload;
    },
    logoutHandler(state) {
      state.token = "";
    },
  },
});

export const login_signup_Actions = login_signupSlice.actions;

export default login_signupSlice;
