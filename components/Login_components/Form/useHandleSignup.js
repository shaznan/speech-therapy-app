import { useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { login_signup_Actions } from "../../../store/login_signupSlice";

function useHandleSignup() {
  const dispatch = useDispatch();
  const handleSignup = (enteredEmail, enteredPassword) => {
    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA5BBFvXMN08rnAvoSmQz1LZmh5wD3H0mA",
        {
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }
      )
      .then((res) => {
        if (res.ok) {
          console.log(res);
        }
      })
      .catch((error) => {
        if (error.response) {
          dispatch(
            login_signup_Actions.setEmailErrorMsg(
              error.response.data.error.message
            )
          );
          dispatch(login_signup_Actions.setIsEmailError(true));
        }
      });
  };

  //   console.log(isEmailError);
  return {
    handleSignup,
  };
}

export default useHandleSignup;
