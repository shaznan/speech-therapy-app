import { createSlice } from "@reduxjs/toolkit";
// import userSlice from "./userSlice";

const login_signupSlice = createSlice({
  name: "login_signup",
  initialState: {
    signInActive: false,
    signUpActive: true,
    emailErrorMsg: "",
    isEmailError: false,
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
  },
});

export const login_signup_Actions = login_signupSlice.actions;

export default login_signupSlice;
