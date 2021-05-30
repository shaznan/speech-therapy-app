import React from "react";
import { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  speaknow: {
    backgroundColor: "#FFD105",
    fontFamily: "product-sans",
    fontSize: "1.1rem",
    position: "absolute",
    padding: "0.6rem",
    top: "-2.5rem",
    left: "45rem",
    animation: "$bounce-out-down 1.5s ease infinite",
    zIndex: 1,
    "&::after": {
      content: "''",
      width: 0,
      height: 0,
      border: "10px solid transparent",
      borderTop: "15px solid #FFD105",
      borderBottom: 0,
      position: "absolute",
      top: "2.7rem",
      right: "2.8rem",
    },
  },
  "@keyframes bounce-out-down": {
    "0%": { transform: "translateY(0)" },
    "20%": {
      opacity: 1,
      transform: "translateY(-20px)",
    },
    "100%": {
      opacity: 0.4,
      transform: "translateY(20px)",
    },
  },
});

function Tooltip() {
  const classes = useStyles();
  return (
    <Fragment>
      <div className={classes.speaknow}>Speak Now</div>
    </Fragment>
  );
}

export default Tooltip;
