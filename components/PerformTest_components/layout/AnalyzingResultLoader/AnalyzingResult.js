import React from "react";
import WithAnalyzeResult from "../Wrapper/WithAnalyzeResult";
import CubeAnimation from "./CubeAnimation.component";
import Message from "./Message.component";

//Display loading until transcript is received and analyzed
function AnalyzingResult() {
  return (
    <WithAnalyzeResult>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          width: "100%",
        }}>
        <CubeAnimation />
        <Message />
      </div>
    </WithAnalyzeResult>
  );
}

export default AnalyzingResult;
