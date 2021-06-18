import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { login_signup_Actions } from "../../../store/login_signupSlice";

function useAuth(url) {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.login_signup.token);
  const fireBaseAuth = (enteredEmail, enteredPassword) => {
    axios
      .post(url, {
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      })
      .then((res) => {
        // if (res.ok) {
        //   console.log(res);
        // }
        console.log(res.data);
        dispatch(login_signup_Actions.loginHandler(res.data.idToken));
        dispatch(login_signup_Actions.setIsLoggedIn(true));
        dispatch(login_signup_Actions.setIsEmailError(false));
      })
      .catch((error) => {
        dispatch(
          login_signup_Actions.setEmailErrorMsg(
            error.response.data.error.message
          )
        );
        dispatch(login_signup_Actions.setIsEmailError(true));
      });
  };

  // const updateUserName = (nickname) => {
  //   if (token !== "") {
  //     axios
  //       .post(url, {
  //         idToken: token,
  //         displayName: nickname,
  //         returnSecureToken: false,
  //       })
  //       .then((res) => {
  //         console.log(res);
  //       })
  //       .catch((err) => console.log(err));
  //   }
  // };

  return {
    fireBaseAuth,
    // updateUserName,
  };
}

export default useAuth;
