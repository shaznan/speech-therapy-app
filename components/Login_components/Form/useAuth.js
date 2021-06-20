import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login_signup_Actions } from "../../../store/login_signupSlice";
import Router from "next/router";

//authenticate both signIn and SignUp
function useAuth(url) {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);
  const nickName = useSelector((state) => state.user.nickName);
  const [email, setEmail] = useState(null);
  const [localId, setLocalId] = useState(null);
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
          // dispatch(login_signup_Actions.setNickName(res.data.displayName));
        }
        Router.push("/performtest");
        console.log(res.data);
        setEmail(res.data.email);
        setLocalId(res.data.localId);
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

  //create new user account in mongodb with current progress when sign up
  useEffect(() => {
    if (nickName !== "" && token !== "") {
      axios
        .post("/api/UserData/UserAuthData", {
          email: email,
          localId: localId,
          nickName: nickName,
          WordsCount: [],
          averageScore: null,
          scoreAvgeCriteria: null,
          highScore: null,
          changeOverPrevScore: null,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [nickName, token]);

  return {
    fireBaseAuth,
  };
}

export default useAuth;
