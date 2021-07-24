import React from "react";
import { Fragment } from "react";
import { useSelector } from "react-redux";

function WithAnalyzeResult({ children }) {
  const isAnalyzing = useSelector((state) => state.performtest.isAnalyzing);

  return <Fragment>{isAnalyzing && children}</Fragment>;
}

export default WithAnalyzeResult;
