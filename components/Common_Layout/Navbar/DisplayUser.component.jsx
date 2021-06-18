import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import classes from "./Navbar.module.css";
import { useSelector } from "react-redux";

function DisplayUser() {
  const nickName = useSelector((state) => state.login_signup.nickName);
  return (
    <Fragment>
      <Grid item lg={3} xs={4}>
        <div className={classes.userdetailcontainer}>
          <span className={classes.userdetail}>{nickName}</span>
        </div>
      </Grid>
    </Fragment>
  );
}

export default DisplayUser;
