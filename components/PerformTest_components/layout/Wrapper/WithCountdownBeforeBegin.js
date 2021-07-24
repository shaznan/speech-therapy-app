import { Grid } from "@material-ui/core";
import React from "react";
import { Fragment } from "react";
import { useSelector } from "react-redux";

function WithCountdownBeforeBegin({ children }) {
  const showCountdown = useSelector((state) => state.performtest.showCountdown);

  return <Fragment>{showCountdown && children}</Fragment>;
}

export default WithCountdownBeforeBegin;
