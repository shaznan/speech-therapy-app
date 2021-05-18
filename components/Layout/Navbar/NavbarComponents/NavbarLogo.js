import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Link from "next/link";
import classes from "../navbar.module.css";
import logoImage from "../images/logo.png";

function NavbarLogo() {
  return (
    <Fragment>
      <Grid item lg={3} xs={12}>
        <Link href="/">
          <img className={classes.navlogo} src={logoImage} />
        </Link>
      </Grid>
    </Fragment>
  );
}

export default NavbarLogo;
