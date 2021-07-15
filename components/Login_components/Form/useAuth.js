import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login_signup_Actions } from "../../../store/login_signupSlice";
import { useRouter } from "next/router";
import { userSlice_Actions } from "../../../store/userSlice";
import { fetchUserById } from "../../../store/userSlice";

//authenticate both signIn and SignUp
function useAuth(url) {
  const router = useRouter();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);
  const email = useSelector((state) => state.user.entities[0].email);
  const localId = useSelector((state) => state.user.entities[0].localId);
  const nickName = useSelector((state) => state.user.entities[0].nickName);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const previousRoute = useSelector(
    (state) => state.login_signup.previousRoute,
  );

  const redirectHandler = () => {
    previousRoute
      ? router.push(previousRoute, null, { shallow: true })
      : router.push("/", null, { shallow: true });
  };

  const responseHandler = (res) => {
    dispatch(userSlice_Actions.loginHandler(res.data.idToken));
    dispatch(userSlice_Actions.setIsLoggedIn(true));
    dispatch(login_signup_Actions.setIsEmailError(false));
    dispatch(userSlice_Actions.setEmail(res.data.email));
    dispatch(userSlice_Actions.setLocalId(res.data.localId));
  };

  const fireBaseAuth = (enteredEmail, enteredPassword) => {
    axios
      .post(url, {
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      })
      .then((res) => {
        //setstate only when login, when signup, local state will be used as display name coz res will not have displayName initially
        responseHandler(res);
        redirectHandler();
      })
      .catch((error) => {
        console.log(error);
        if (error.response) {
          dispatch(
            login_signup_Actions.setEmailErrorMsg(
              error.response.data.error.message,
            ),
          );
          dispatch(login_signup_Actions.setIsEmailError(true));
        }
      });
  };

  const signUpInitialState = {
    localId: localId,
    nickName: nickName,
    checkout_id: null,
    WordsCount: [],
    averageScore: null,
    email: email,
    scoreAvgCriteria: null,
    highScore: null,
    changeOverPrevScore: null,
    userRole: "User",
  };

  //create new user account in mongodb  when sign up
  useEffect(() => {
    if (nickName !== "" && token !== "" && email !== "" && localId !== "") {
      //setLocal storage
      localStorage.setItem("state", JSON.stringify(signUpInitialState));
      //store data in db
      axios
        .post("/api/UserData/createNewUser", signUpInitialState)
        .then((res) => {
          console.log("User account created");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [nickName, token, email, localId]);

  //if signed in, update state with user specific state
  useEffect(() => {
    if (nickName === "" && isLoggedIn && localId !== "") {
      console.log(localId);
      dispatch(fetchUserById(localId));
    }
  }, [nickName, isLoggedIn, localId]);

  return {
    fireBaseAuth,
  };
}

export default useAuth;
