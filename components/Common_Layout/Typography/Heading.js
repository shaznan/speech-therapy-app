import React, { Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(
  {
    title: {
      fontFamily: "spydolls, sans-serif",
      // fontSize: "5rem",
      lineHeight: "0.8em",
    },
  },
  { index: 1 },
);

function Heading({ text, fontsize = "5rem" }) {
  const classes = useStyles();
  return (
    <Fragment>
      <Typography
        variant="h1"
        style={{ fontSize: fontsize }}
        className={classes.title}>
        {text}
      </Typography>
    </Fragment>
  );
}

export default Heading;
