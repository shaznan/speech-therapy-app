import React, { useState } from "react";
import { Fragment } from "react";
import Button from "../../Common_Layout/Button/Button";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "../loginStyles";

function FormButtons() {
  const [signUpActive, setSignUpActive] = useState(true);
  const classes = useStyles();
  const toggleActiveStatus = () => {
    setSignUpActive(!signUpActive);
  };

  return (
    <Fragment>
      <div className={classes.formbuttons_container}>
        <Grid container spacing={0}>
          <Grid
            item
            xl={6}
            className={classes.signupbtn}
            // onMouseEnter={toggleActiveStatus}
            // onMouseLeave={toggleActiveStatus}
          >
            <Button
              type={signUpActive ? "primary" : "primaryOutline"}
              text="Sign up"
              onClickHandler={toggleActiveStatus}
            />
          </Grid>
          <Grid
            item
            xl={6}
            className={classes.signinbtn}
            // onMouseEnter={toggleActiveStatus}
            // onMouseLeave={toggleActiveStatus}
          >
            <Button
              type={!signUpActive ? "primary" : "primaryOutline"}
              text="Sign In"
              onClickHandler={toggleActiveStatus}
            />
          </Grid>
        </Grid>
        <Grid container spacing={0}>
          <Grid item xl={6}>
            {/* <Button type="primary" text="Sign up" /> */}
          </Grid>
        </Grid>
      </div>
    </Fragment>
  );
}

export default FormButtons;
