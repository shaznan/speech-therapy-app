import { Grid } from "@material-ui/core";
import React from "react";
import { Fragment } from "react";
import { useSelector } from "react-redux";

function WithIsRecording({ children }) {
  const isTimeIsUp = useSelector((state) => state.performtest.isTimeIsUp);

  return <Fragment>{!isTimeIsUp && children}</Fragment>;
}

export default WithIsRecording;
