import React from "react";
import { Fragment } from "react";
import { useStyles } from "../../components/Login_components/loginStyles";
import Grid from "@material-ui/core/Grid";
import Header from "../../components/Login_components/Header.component";
import Signup_Form from "../../components/Login_components/Form/Signup_Form";
import Signin_Form from "../../components/Login_components/Form/Signin_Form";
import LogoImage from "../../components/Login_components/Logo.component";
import FormButtons from "../../components/Login_components/Form/FormButtons.component";
import GoogleSignInBtn from "../../components/Login_components/Form/GoogleSignInBtn.component";
import { useSelector } from "react-redux";
import { Formik, Form } from "formik";
import Footer from "../../components/Login_components/Form/Footer.component";

function login() {
  const classes = useStyles();
  const signInActive = useSelector((state) => state.login_signup.signInActive);
  const signUpActive = useSelector((state) => state.login_signup.signUpActive);
  return (
    <Fragment>
      <div className={classes.bgimage}>
        <Grid container spacing={0} className={classes.container}>
          <Header />
          <LogoImage />
          <div className={classes.formcontainer}>
            {signUpActive && <Signup_Form />}
            {signInActive && <Signin_Form />}
            <Footer />
            {/* <FormButtons /> */}
            {/* <GoogleSignInBtn /> */}
          </div>
        </Grid>
      </div>
    </Fragment>
  );
}

export default login;
