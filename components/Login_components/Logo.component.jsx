import React from "react";
import { Fragment } from "react";
import logo from "../../assets/images/Logo.png";
import { useStyles } from "./loginStyles";
import Grid from "@material-ui/core/Grid";

function LogoImage() {
  const classes = useStyles();
  return (
    <Fragment>
      <Grid container spacing={0}>
        <Grid item md={12}>
          <img src={logo} className={classes.loginLogoImage} />
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default LogoImage;
