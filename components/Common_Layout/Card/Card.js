import React from "react";
import { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(
  {
    card: {
      backgroundColor: "white",
      padding: "1rem 4rem 3rem 3rem",
      width: "43rem",
      borderRadius: "9px",
      boxShadow: "0px 3px 29px rgba(0,0,0,0.1)",
    },
  },
  { index: 1 },
);

function PerformTestCard(props) {
  const classes = useStyles();
  return (
    <Fragment>
      <div className={classes.card}>{props.children}</div>
    </Fragment>
  );
}

export default PerformTestCard;
