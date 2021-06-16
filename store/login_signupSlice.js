import { createSlice } from "@reduxjs/toolkit";

const login_signupSlice = createSlice({
  name: "login_signup",
  initialState: {
    signInActive: false,
    signUpActive: true,
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
  },
});

export const login_signup_Actions = login_signupSlice.actions;

export default login_signupSlice;
