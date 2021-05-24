import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

const useStyles = makeStyles({
  primarybutton: {
    backgroundColor: "#ED1C24",
    transition: "0.3s ease-in-out",
    "&:hover": {
      backgroundColor: "#ff0008",
      transform: "scale(1.03)",
      "& $icon": {
        transform: "TranslateX(5px)",
      },
    },
    padding: "0.5rem 1.5rem",
    fontWeight: "bold",
    color: "white",
    textTransform: "capitalize",
    borderRadius: "7px",
    ["@media (max-width:1280px)"]: {
      fontSize: "1.5rem",
    },
  },

  icon: {
    transition: "0.3s ease-in-out",
    fontSize: "2rem",
    // visibility: 'hidden'
  },
});

function DynamicButton({ type = "primary", text = "", onClickHandler = "" }) {
  const classes = useStyles();

  return (
    <div>
      <Button
        onClick={onClickHandler}
        className={
          type === "primary" || "primarywitharrow"
            ? classes.primarybutton
            : null
        }
      >
        {text}
        {type === "primarywitharrow" && (
          <ArrowRightIcon className={classes.icon} />
        )}
      </Button>
    </div>
  );
}

export default DynamicButton;
