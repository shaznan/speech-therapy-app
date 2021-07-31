import React, { Fragment, useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import classes from "../Navbar.module.css";
import { useRouter } from "next/router";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { login_signup_Actions } from "../../../../store/login_signupSlice";

function LoginRegisterbtn() {
  const router = useRouter();
  const dispatch = useDispatch();
  // const [showLoginRedisterBtn, setShowLoginRedisterBtn] = useState(true);

  const urlHandler = () => {
    dispatch(login_signup_Actions.setPreviousRoute(router.pathname));
  };

  return (
    <Fragment>
      <Grid item lg={3} xs={4}>
        {/* {showLoginRedisterBtn && ( */}
        <div className={classes.login_register}>
          <span className={classes.login_registertext}>
            <Link href="/login_signup">
              {/*
                Semantic HTML tip - Anything inside a <Link> should eventually
                render as either a <button> or a <a href> element in the final
                HTML. So I would replace the <span> with an <a> element (and the
                <Link> parent component will auto-fill the "href" attribute for you)
              */}
              <span onClick={urlHandler}>Login/Register</span>
            </Link>
          </span>
        </div>
        {/* )} */}
      </Grid>
    </Fragment>
  );
}

export default LoginRegisterbtn;
