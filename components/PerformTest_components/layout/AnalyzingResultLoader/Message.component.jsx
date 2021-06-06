import React from "react";
import Typography from "@material-ui/core/Typography";
import { Fragment } from "react";

function Message() {
  return (
    <Fragment>
      <Typography style={{ marginTop: "-3rem", textAlign: "center" }}>
        <strong> Analyzing Your Performance... </strong>
      </Typography>
    </Fragment>
  );
}

export default Message;
