import { useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { login_signup_Actions } from "../../../store/login_signupSlice";

function useAuth(url) {
  const dispatch = useDispatch();
  const fireBaseAuth = (enteredEmail, enteredPassword) => {
    axios
      .post(url, {
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      })
      .then((res) => {
        if (res.ok) {
          console.log(res);
        }
        dispatch(login_signup_Actions.setIsEmailError(false));
        console.log(res);
      })
      .catch((error) => {
        console.log(error.response);
        // if (error.response) {
        dispatch(
          login_signup_Actions.setEmailErrorMsg(
            error.response.data.error.message
          )
        );
        dispatch(login_signup_Actions.setIsEmailError(true));
        // }
      });
  };

  //   console.log(isEmailError);
  return {
    fireBaseAuth,
  };
}

export default useAuth;
