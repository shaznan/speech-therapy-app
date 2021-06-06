import React from "react";
import CubeAnimation from "./CubeAnimation.component";
import Message from "./Message.component";
import Box from "@material-ui/core/Box";

function AnalyzingResult() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <CubeAnimation />
      <Message />
    </div>
  );
}

export default AnalyzingResult;
