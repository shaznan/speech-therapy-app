import React, { Fragment, useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import classes from "../Navbar.module.css";
import { useRouter } from "next/router";

function LoginRegisterbtn() {
  const router = useRouter();
  const [isPerformTestPage, setIsPerformTestPage] = useState(false);

  useEffect(() => {
    router.pathname === "/performtest"
      ? setIsPerformTestPage(true)
      : setIsPerformTestPage(false);
  }, [router.pathname]);

  return (
    <Fragment>
      <Grid item lg={3} xs={4}>
        {isPerformTestPage && (
          <div className={classes.login_register}>
            <span className={classes.login_registertext}>Login/Register</span>
          </div>
        )}
        {/*render login/signup btn only in perform test page  */}
      </Grid>
    </Fragment>
  );
}

export default LoginRegisterbtn;
