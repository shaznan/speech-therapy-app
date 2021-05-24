import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  primarybutton: {
    backgroundColor: "#ED1C24",
    transition: "0.3s ease-in-out",
    "&:hover": {
      backgroundColor: "#ff0008",
      transform: "scale(1.03)",
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
});

function DynamicButton({ type, text }) {
  const classes = useStyles();

  return (
    <div>
      <Button className={type === "primary" ? classes.primarybutton : null}>
        {text}
      </Button>
    </div>
  );
}

export default DynamicButton;
