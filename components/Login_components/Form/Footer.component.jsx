import React from "react";
import { useStyles } from "../loginStyles";
import { useDispatch, useSelector } from "react-redux";
import { login_signup_Actions } from "../../../store/login_signupSlice";
import SignIn_SignUpText from "./SignIn_SignUpText.component";
import SignInWithGoogleBtn from "./GoogleSignInBtn.component";

function Footer() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const toggleActiveStatus = () => {
    dispatch(login_signup_Actions.toggleBtnActiveStatus());
  };
  const signInActive = useSelector((state) => state.login_signup.signInActive);
  const signUpActive = useSelector((state) => state.login_signup.signUpActive);
  return (
    <div className={classes.footercontainer}>
      {signUpActive && (
        <SignIn_SignUpText
          text="Existing user?"
          highlightText="Sign In"
          onClickHandler={toggleActiveStatus}
        />
      )}
      {signInActive && (
        <SignIn_SignUpText
          text="New User?"
          highlightText="Sign Up"
          onClickHandler={toggleActiveStatus}
        />
      )}
      <SignInWithGoogleBtn />
    </div>
  );
}

export default Footer;
