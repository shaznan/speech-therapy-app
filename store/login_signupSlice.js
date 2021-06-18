import { createSlice } from "@reduxjs/toolkit";

const login_signupSlice = createSlice({
  name: "login_signup",
  initialState: {
    signInActive: false,
    signUpActive: true,
    emailErrorMsg: "",
    isEmailError: false,
    token: "",
    nickName: "",
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
    setEmailErrorMsg(state, action) {
      state.emailErrorMsg = action.payload;
    },
    setIsEmailError(state, action) {
      state.isEmailError = action.payload;
    },
    setNickName(state, action) {
      state.nickName = action.payload;
    },
    setIsLoggedIn(state, action) {
      state.isLoggedIn = action.payload;
    },
    loginHandler(state, action) {
      state.token = action.payload;
    },
    logoutHandler(state) {
      state.token = "";
      state.isLoggedIn = false;
    },
    setNickName(state, action) {
      state.nickName = action.payload;
    },
  },
});

export const login_signup_Actions = login_signupSlice.actions;

export default login_signupSlice;
