import React from "react";
import Grid from "@material-ui/core/Grid";
import { Fragment } from "react";
import Button from "@material-ui/core/Button";
import googleIcon from "../../../assets/images/google_icon.png";
import { useStyles } from "../loginStyles";

function GoogleSignInBtn() {
  const classes = useStyles();
  return (
    <Fragment>
      <Grid container spacing={0} className={classes.loginwithgoogle_cont}>
        <Grid item xl={6}>
          <Button className={classes.loginwithgoogle_btn} variant="outlined">
            or Login with{" "}
            {<img className={classes.googleicon} src={googleIcon} />}{" "}
          </Button>
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default GoogleSignInBtn;
