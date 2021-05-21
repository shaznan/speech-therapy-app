import React, { Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  title: {
    fontFamily: "spydolls, sans-serif",
    fontSize: "5rem",
    lineHeight: "0.8em",
  },
});

function Heading({ text }) {
  const classes = useStyles();
  return (
    <Fragment>
      <Typography variant="h1" className={classes.title}>
        {text}
      </Typography>
    </Fragment>
  );
}

export default Heading;
