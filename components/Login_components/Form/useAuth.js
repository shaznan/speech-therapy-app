import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login_signup_Actions } from "../../../store/login_signupSlice";
import Router from "next/router";
import { userSlice_Actions } from "../../../store/userSlice";

//authenticate both signIn and SignUp
function useAuth(url) {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);
  const email = useSelector((state) => state.user.entities[0].email);
  const localId = useSelector((state) => state.user.entities[0].localId);
  const nickName = useSelector((state) => state.user.entities[0].nickName);
  // const [email, setEmail] = useState(null);
  // const [localId, setLocalId] = useState(null);
  const fireBaseAuth = (enteredEmail, enteredPassword) => {
    axios
      .post(url, {
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      })
      .then((res) => {
        //setstate only when login, when signup, local state will be used as display name coz res will not have displayName initially
        // if (res.data.displayName) {
        //   // dispatch(login_signup_Actions.setNickName(res.data.displayName));
        // }
        Router.push("/performtest");
        console.log(res.data);
        // setEmail(res.data.email);
        // setLocalId(res.data.localId);
        dispatch(userSlice_Actions.loginHandler(res.data.idToken));
        dispatch(userSlice_Actions.setIsLoggedIn(true));
        dispatch(login_signup_Actions.setIsEmailError(false));
        dispatch(userSlice_Actions.setEmail(res.data.email));
        dispatch(userSlice_Actions.setLocalId(res.data.localId));
      })
      .catch((error) => {
        console.log(error);
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

  //create new user account in mongodb with current progress when sign up
  useEffect(() => {
    if (nickName !== "" && token !== "" && email !== "" && localId !== "") {
      axios
        .post("/api/UserData/createNewUser", {
          localId: localId,
          nickName: nickName,
          WordsCount: [],
          averageScore: null,
          email: email,
          scoreAvgCriteria: null,
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
  }, [nickName, token, email, localId]);

  return {
    fireBaseAuth,
  };
}

export default useAuth;
