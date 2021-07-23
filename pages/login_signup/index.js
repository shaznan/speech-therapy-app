import React, { useState, useEffect } from "react";
import { Fragment } from "react";
import { useStyles } from "../../components/Login_components/loginStyles";
import Grid from "@material-ui/core/Grid";
import Header from "../../components/Login_components/Header.component";
import Signup_Form from "../../components/Login_components/Form/Signup_Form";
import Signin_Form from "../../components/Login_components/Form/Signin_Form";
import LogoImage from "../../components/Login_components/Logo.component";
import { useSelector } from "react-redux";
import Footer from "../../components/Login_components/Form/Footer.component";
import Fade from "react-reveal/Fade";

function login() {
  const classes = useStyles();
  const signInActive = useSelector((state) => state.login_signup.signInActive);
  const signUpActive = useSelector((state) => state.login_signup.signUpActive);
  const isEmailError = useSelector((state) => state.login_signup.isEmailError);

  return (
    <Fragment>
      <div className={classes.bgimage}>
        <Grid container spacing={0} className={classes.container}>
          <Header />
          <LogoImage />
          <Fade duration={1000} left>
            <div className={classes.formcontainer}>
              {signUpActive && <Signup_Form />}
              {signInActive && <Signin_Form />}
              {/* {isEmailError && <ErrorModal />} */}
              <Footer />
            </div>
          </Fade>
        </Grid>
      </div>
    </Fragment>
  );
}

export default login;
