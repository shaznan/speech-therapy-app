import React from "react";
import CubeAnimation from "./CubeAnimation.component";
import Message from "./Message.component";

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
