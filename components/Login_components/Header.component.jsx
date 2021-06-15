import Grid from "@material-ui/core/Grid";
import React from "react";
import { Fragment } from "react";
import { useStyles } from "./loginStyles";
import Button from "../Common_Layout/Button/Button";
import Heading from "../Common_Layout/Typography/Heading";

function Header() {
  const classes = useStyles();
  return (
    <Fragment>
      <Grid container spacing={0}>
        <Grid item md={6} className={classes.backcontainer}>
          <Button type="back" text="back" href="/performtest" />
        </Grid>
        <Grid item md={6} className={classes.loginheadercontainer}>
          <Heading text="Login or Register with us!" />
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default Header;
