import React, { useState } from "react";
import { Fragment } from "react";
import Button from "../../Common_Layout/Button/Button";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "../loginStyles";
import GoogleSignInBtn from "./GoogleSignInBtn.component";

function FormButtons() {
  const classes = useStyles();
  const [signInActive, setSignInActive] = useState(false);
  const [signUpActive, setSignUpActive] = useState(true);

  const toggleActiveStatus = () => {
    setSignInActive(!signInActive);
    setSignUpActive(!signUpActive);
  };

  const toggleSignIn = () => {
    if (signInActive) return;
    toggleActiveStatus();
  };

  const toggleSignUp = () => {
    if (signUpActive) return;
    toggleActiveStatus();
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

//FIXME: when u click submit state switches as well
