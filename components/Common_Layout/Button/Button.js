import React from "react";
import Button from "@material-ui/core/Button";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import { useStyles } from "./ButtonStyles";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Link from "next/link";

const DynamicButton = ({
  type = "primary",
  text = "",
  onClickHandler = () => {},
  disabled = false,
  href = "",
}) => {
  const classes = useStyles();

  const conditionallyRenderClassName = (type) => {
    if (disabled === true) return;
    if (type === "primary" || type === "next") {
      return classes.primarybutton;
    }
    if (type === "back") {
      return classes.backbutton;
    }
    if (type === "primaryOutline") {
      return `${classes.primarybutton} ${classes.primaryoutline} `;
    }
  };

  const theme = createMuiTheme({
    palette: {
      action: {
        disabledBackground: "white",
        disabled: "lightgrey",
      },
    },
  });

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Link href={href}>
          <Button
            onClick={onClickHandler}
            disabled={disabled}
            className={conditionallyRenderClassName(type)}
            href={href}
          >
            {" "}
            {type === "back" && <ArrowLeftIcon className={classes.iconback} />}
            {text}
            {type === "next" && <ArrowRightIcon className={classes.icon} />}
          </Button>
        </Link>
      </ThemeProvider>
    </div>
  );
};

export default DynamicButton;
