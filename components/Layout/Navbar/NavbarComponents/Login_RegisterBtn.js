import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import classes from "../Navbar.module.css";

function LoginRegisterbtn() {
  return (
    <Fragment>
      <Grid item lg={3} xs={4}>
        <div className={classes.login_register}>
          <span className={classes.login_registertext}>Login/Register</span>
        </div>
      </Grid>
    </Fragment>
  );
}

export default LoginRegisterbtn;
