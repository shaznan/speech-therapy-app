import React, { Fragment, useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import classes from "../Navbar.module.css";
import { useRouter } from "next/router";
import Link from "next/link";

function LoginRegisterbtn() {
  const router = useRouter();
  const [showLoginRedisterBtn, setShowLoginRedisterBtn] = useState(true);

  //render button only in perform test page for now
  // useEffect(() => {
  //   router.pathname === "/performtest" || router.pathname === "/articles"
  //     ? setShowLoginRedisterBtn(true)
  //     : setShowLoginRedisterBtn(false);
  // }, [router.pathname]);

  return (
    <Fragment>
      <Grid item lg={3} xs={4}>
        {showLoginRedisterBtn && (
          <Link href="/login_signup">
            <div className={classes.login_register}>
              <span className={classes.login_registertext}>Login/Register</span>
            </div>
          </Link>
        )}
        {/*render login/signup btn only in perform test page  */}
      </Grid>
    </Fragment>
  );
}

export default LoginRegisterbtn;
