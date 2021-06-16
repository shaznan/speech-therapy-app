import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Link from "next/link";
import classes from "./NavbarLogo.module.css";
import logoImage from "../../../../assets/images/Logo.png";

function NavbarLogo() {
  return (
    <Fragment>
      <Grid item lg={2} xs={7} className={classes.logocontainer}>
        <Link href="/">
          <img className={classes.navlogo} src={logoImage} />
        </Link>
      </Grid>
    </Fragment>
  );
}

export default NavbarLogo;
