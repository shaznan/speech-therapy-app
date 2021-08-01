import React, { Fragment, useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import classes from "../Navbar.module.css";
import { useRouter } from "next/router";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { login_signup_Actions } from "../../../../store/login_signupSlice";

function LoginRegisterbtn() {
  const router = useRouter();
  const dispatch = useDispatch();

  //keep track of current page so user can come back to this afyer logging in
  const pinCurrentRoute = () => {
    dispatch(login_signup_Actions.setPreviousRoute(router.pathname));
  };

  return (
    <Fragment>
      <Grid item lg={3} xs={4}>
        <div className={classes.login_register}>
          <span className={classes.login_registertext}>
            <Link href="/login_signup">
              <a onClick={pinCurrentRoute}>Login/Register</a>
            </Link>
          </span>
        </div>
      </Grid>
    </Fragment>
  );
}

export default LoginRegisterbtn;
