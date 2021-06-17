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
import fire from "../../fire/fire";

function login() {
  const classes = useStyles();
  const signInActive = useSelector((state) => state.login_signup.signInActive);
  const signUpActive = useSelector((state) => state.login_signup.signUpActive);
  // const email = useSelector((state) => state.login_signup.email);
  // const password = useSelector((state) => state.login_signup.password);
  const [emailError, setEmailError] = useState("");

  const handleLogin = () => {
    fire.auth.signInWithEmailAndPassword(email, password).catch((err) => {
      switch (err.code) {
        case "auth/Invalid-email":
        case "auth/user-disabled":
        case "auth/user-not-found":
          setEmailError(err.Message);
          break;
        case "auth/wrong-password":
          setPasswordError(err.Message);
          break;
      }
    });
  };

  const handleSignUp = (emailadress, userpassword) => {
    fire
      .auth()
      .createUserWithEmailAndPassword(emailadress, userpassword)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            // setPasswordError(err.message);
            break;
          default:
        }
      });
  };

  const handleLogout = () => {
    fire.auth().signOut();
  };
  //check if user exists
  // const authListener = () => {
  //   fire.auth().onAuthStateChanged((user) => {
  //     if (user) {
  //       setUser(user);
  //     } else {
  //       setUser("");
  //     }
  //   });
  // };

  // useEffect(() => {
  //   authListener();
  // }, []);

  return (
    <Fragment>
      <div className={classes.bgimage}>
        <Grid container spacing={0} className={classes.container}>
          <Header />
          <LogoImage />
          <div className={classes.formcontainer}>
            {signUpActive && (
              <Signup_Form
                handleSignUp={handleSignUp}
                emailError={emailError}
              />
            )}
            {signInActive && <Signin_Form handleLogin={handleLogin} />}
            <Footer />
            {/* <button onClick={handleSignUp}>create account</button> */}
          </div>
        </Grid>
      </div>
    </Fragment>
  );
}

export default login;
