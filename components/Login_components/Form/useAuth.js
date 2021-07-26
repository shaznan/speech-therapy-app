import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login_signup_Actions } from "../../../store/login_signupSlice";
import { useRouter } from "next/router";
import { userSlice_Actions } from "../../../store/userSlice";
import { fetchUserById } from "../../../store/userSlice";

//authenticate both signIn and SignUp based on Url passed in from signin/signup form
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

  //handle sign in and sign up with firebase auth //
  const fireBaseAuth = (enteredEmail, enteredPassword) => {
    axios
      .post(url, {
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      })
      .then((res) => {
        responseHandler(res);
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

  //store sign up and retreive sign in data from mongodb//

  useEffect(() => {
    if (!localId) return;
    dispatch(userSlice_Actions.setLoading("loading"));
    axios
      .get("/api/UserData/checkIfUserExistsInDB", {
        params: {
          userId: localId,
        },
      })
      .then((res) => {
        dispatch(userSlice_Actions.setLoading("success"));
        redirectHandler();
        //if user exists, retreive user data from db and store redux state
        if (res.status === 200) {
          dispatch(fetchUserById(localId));
        }

        //if user does not exist, create new user in db
        if (res.status === 204) {
          localStorage.setItem("state", JSON.stringify(signUpInitialState));
          axios
            .post("/api/UserData/createNewUser", signUpInitialState)
            .then((res) => {
              console.log("User account created");
            })
            .catch((err) => {
              dispatch(login_signup_Actions.setIsEmailError(true));
              dispatch(
                login_signup_Actions.setEmailErrorMsg(
                  "Could not create account",
                ),
              );
            });
        }
      })
      .catch((err) => {
        dispatch(userSlice_Actions.setLoading("success"));
        dispatch(login_signup_Actions.setIsEmailError(true));
        dispatch(
          login_signup_Actions.setEmailErrorMsg("Sorry something went wrong"),
        );
        // console.log("something went wrong");
      });
  }, [localId]);

  return {
    fireBaseAuth,
  };
}

export default useAuth;
