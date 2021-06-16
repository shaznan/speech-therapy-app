import React, { useState } from "react";
import { Fragment } from "react";
import Button from "../../Common_Layout/Button/Button";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "../loginStyles";
import GoogleSignInBtn from "./GoogleSignInBtn.component";
import { useSelector, useDispatch } from "react-redux";
import { login_signup_Actions } from "../../../store/login_signupSlice";

function FormButtons() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const signInActive = useSelector((state) => state.login_signup.signInActive);
  const signUpActive = useSelector((state) => state.login_signup.signUpActive);

  const toggleSignIn = () => {
    if (signInActive) return;
    dispatch(login_signup_Actions.toggleBtnActiveStatus());
  };

  const toggleSignUp = () => {
    if (signUpActive) return;
    dispatch(login_signup_Actions.toggleBtnActiveStatus());
  };

  return (
    <Fragment>
      <div className={classes.formbuttons_container}>
        <Grid container spacing={0} className={classes.signup_in_container}>
          <Grid item xl={6} className={classes.signupbtn}>
            <Button
              type={signUpActive ? "primary" : "primaryOutline"}
              text="Sign up"
              onClickHandler={toggleSignUp}
              variant="contained"
            />
          </Grid>
          <Grid item xl={6} className={classes.signinbtn}>
            <Button
              type={signInActive ? "primary" : "primaryOutline"}
              text="Sign In"
              variant="contained"
              onClickHandler={toggleSignIn}
            />
          </Grid>
        </Grid>
        <GoogleSignInBtn />
      </div>
    </Fragment>
  );
}

export default FormButtons;
