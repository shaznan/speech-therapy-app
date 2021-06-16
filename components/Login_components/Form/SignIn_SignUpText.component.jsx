import React from "react";
import { Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "../loginStyles";

function SignIn_SignUpText({ text, highlightText, onClickHandler }) {
  const classes = useStyles();
  return (
    <Fragment>
      <Typography
        variant="subtitle1"
        style={{ fontSize: "0.9rem", marginBottom: "-0.5rem" }}
      >
        {text}
        <span onClick={onClickHandler} className={classes.highlight}>
          {highlightText}
        </span>
      </Typography>
    </Fragment>
  );
}

export default SignIn_SignUpText;
