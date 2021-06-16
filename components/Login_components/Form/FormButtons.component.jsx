import React, { useState } from "react";
import { Fragment } from "react";
import Button from "../../Common_Layout/Button/Button";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "../loginStyles";

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
        <Grid container spacing={0}>
          <Grid item xl={6} className={classes.signupbtn}>
            <Button
              type={signUpActive ? "primary" : "primaryOutline"}
              text="Sign up"
              onClickHandler={toggleSignUp}
            />
          </Grid>
          <Grid item xl={6} className={classes.signinbtn}>
            <Button
              type={signInActive ? "primary" : "primaryOutline"}
              text="Sign In"
              onClickHandler={toggleSignIn}
            />
          </Grid>
        </Grid>
        <Grid container spacing={0}>
          <Grid item xl={6}>
            {/* <Button type="primary" text="Sign up" /> */}
          </Grid>
        </Grid>
      </div>
    </Fragment>
  );
}

export default FormButtons;

//FIXME: when u click submit state switches as well
