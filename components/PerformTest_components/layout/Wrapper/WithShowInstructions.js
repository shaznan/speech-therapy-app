import { Grid } from "@material-ui/core";
import React from "react";
import { Fragment } from "react";
import { useSelector } from "react-redux";

function WithShowInstructions({ children }) {
  const showInstructions = useSelector(
    (state) => state.performtest.showInstructions,
  );

  return <Fragment>{showInstructions && children}</Fragment>;
}

export default WithShowInstructions;
