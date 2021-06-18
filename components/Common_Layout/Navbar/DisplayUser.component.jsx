import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import classes from "./Navbar.module.css";

function DisplayUser() {
  return (
    <Fragment>
      <Grid item lg={3} xs={4}>
        <div className={classes.userdetailcontainer}>
          <span className={classes.userdetail}>Logout</span>
        </div>
      </Grid>
    </Fragment>
  );
}

export default DisplayUser;
