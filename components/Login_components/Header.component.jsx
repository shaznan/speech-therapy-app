import Grid from "@material-ui/core/Grid";
import React from "react";
import { Fragment } from "react";
import { useStyles } from "./loginStyles";
import Button from "../Common_Layout/Button/Button";
import Heading from "../Common_Layout/Typography/Heading";
import Link from "next/link";
import useWindowDimensions from "../useWindowDimension";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

function Header() {
  const classes = useStyles();
  const router = useRouter();
  const { screenWidth } = useWindowDimensions();
  const previousRoute = useSelector(
    (state) => state.login_signup.previousRoute,
  );
  const redirectHandler = () => {
    router.push(previousRoute, null, { shallow: true });
  };
  return (
    <Fragment>
      <Grid container spacing={0} className={classes.headercontainer}>
        <Grid item md={6} className={classes.backcontainer}>
          {/* <Link href="/performtest"> */}
          <Button onClickHandler={redirectHandler} type="back" text="back" />
          {/* </Link> */}
        </Grid>
        <Grid item md={6} className={classes.loginheadercontainer}>
          {screenWidth > 800 && <Heading text="Login or Register with us!" />}
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default Header;
