import React from "react";
import Button from "@material-ui/core/Button";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import { useStyles } from "./ButtonStyles";

function DynamicButton({
  type = "primary",
  text = "",
  onClickHandler = () => {},
}) {
  const classes = useStyles();

  const conditionallyRenderClassName = (type) => {
    if (type === "primary" || type === "next") {
      return classes.primarybutton;
    }
    if (type === "back") {
      return classes.backbutton;
    }
  };

  return (
    <div>
      <Button
        onClick={onClickHandler}
        className={conditionallyRenderClassName(type)}
      >
        {" "}
        {type === "back" && <ArrowLeftIcon className={classes.iconback} />}
        {text}
        {type === "next" && <ArrowRightIcon className={classes.icon} />}
      </Button>
    </div>
  );
}

export default DynamicButton;
