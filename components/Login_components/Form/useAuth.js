import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login_signup_Actions } from "../../../store/login_signupSlice";

//authenticate both signIn and SignUp
function useAuth(url) {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.login_signup.token);
  const nickName = useSelector((state) => state.login_signup.nickName);
  const fireBaseAuth = (enteredEmail, enteredPassword) => {
    axios
      .post(url, {
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      })
      .then((res) => {
        //setstate only when login, when signup, local state will be used as display name coz res will not have displayName initially
        if (res.data.displayName) {
          dispatch(login_signup_Actions.setNickName(res.data.displayName));
        }
        console.log(res.data);
        dispatch(login_signup_Actions.loginHandler(res.data.idToken));
        dispatch(login_signup_Actions.setIsLoggedIn(true));
        dispatch(login_signup_Actions.setIsEmailError(false));
      })
      .catch((error) => {
        console.log(error);
        dispatch(
          login_signup_Actions.setEmailErrorMsg(
            error.response.data.error.message
          )
        );
        dispatch(login_signup_Actions.setIsEmailError(true));
      });
  };

  //update username after email is registered with firebase
  useEffect(() => {
    if (nickName !== "" && token !== "") {
      axios
        .post(
          "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyA5BBFvXMN08rnAvoSmQz1LZmh5wD3H0mA",
          {
            idToken: token,
            displayName: nickName,
          }
        )
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    }
  }, [nickName, token]);

  return {
    fireBaseAuth,
  };
}

export default useAuth;
