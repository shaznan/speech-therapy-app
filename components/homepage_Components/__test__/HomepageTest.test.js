import React from "react";
import ReactDom from "react-dom";
import HomepageText from "../HomepageText";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDom.render(<HomepageText></HomepageText>, div);
});
