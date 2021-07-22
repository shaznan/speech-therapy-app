import React from "react";
import { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./Login_styles";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import Typography from "@material-ui/core/Typography";
import Button from "../../Common_Layout/Button/Button";
import Card from "../../Common_Layout/Card/Card";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { login_signup_Actions } from "../../../store/login_signupSlice";

function LoginMessage() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const router = useRouter();
  const goToLoginHandler = (e) => {
    e.preventDefault();
    router.push("/login_signup", null, { shallow: true });
    dispatch(login_signup_Actions.setPreviousRoute(router.pathname));
  };

  return (
    <Fragment>
      <Grid container spacing={0} className={classes.maincont}>
        <Grid container spacing={0} className={classes.message_cont}>
          <Card>
            <Grid item md={12} className={classes.icon_cont}>
              <LockOpenIcon className={classes.icon} />
            </Grid>
            <Grid item md={12} className={classes.heading_cont}>
              <h1 className={classes.heading}>Please login to continue</h1>
            </Grid>
            <Grid item md={12} className={classes.login_btn}>
              <Button
                onClickHandler={goToLoginHandler}
                type="primary"
                text="Login"
              />
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default LoginMessage;
