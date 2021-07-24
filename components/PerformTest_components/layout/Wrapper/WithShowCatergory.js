import { Grid } from "@material-ui/core";
import React from "react";
import { Fragment } from "react";
import { useSelector } from "react-redux";

function WithShowCatergory({ children }) {
  const showCatergoryForm = useSelector(
    (state) => state.performtest.showCatergoryForm,
  );

  return <Fragment>{showCatergoryForm && children}</Fragment>;
}

export default WithShowCatergory;
