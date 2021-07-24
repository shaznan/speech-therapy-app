import { Grid } from "@material-ui/core";
import React from "react";
import { Fragment } from "react";
import { useSelector } from "react-redux";

function WithStartPage({ children }) {
  const showStartBtn = useSelector((state) => state.performtest.showStartBtn);

  return <Grid container>{showStartBtn && children}</Grid>;
}

export default WithStartPage;
