import React from "react";
import Button from "@material-ui/core/Button";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { useStyles } from "./ButtonStyles";
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Link from "next/link";

const DynamicButton = ({
  type = "primary",
  text = "",
  onClickHandler = () => {},
  disabled = false,
  variant = null,
  href = "",
}) => {
  const classes = useStyles();

  const conditionallyRenderClassName = (type) => {
    if (disabled === true) return;
    if (type === "primary" || type === "next" || type === "cart") {
      return classes.primarybutton;
    }
    if (type === "back") {
      return classes.backbutton;
    }
    if (type === "primaryOutline") {
      return `${classes.primarybutton} ${classes.primaryoutline} `;
    } //TODO: Remove if not used
  };

  const theme = createTheme({
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
        {/* Instead of putting the `href` on both the <Link> and the <Button>,
        you can just put a `passHref` prop on the <Link> and it will share the
        href value with the <Button> */}
        <Link href={href}>
          <Button
            onClick={onClickHandler}
            disabled={disabled}
            className={conditionallyRenderClassName(type)}
            variant={variant}
            href={href}>
            {" "}
            {type === "back" && <ArrowLeftIcon className={classes.iconback} />}
            {text}
            {type === "next" && <ArrowRightIcon className={classes.icon} />}
            {type === "cart" && (
              <AddShoppingCartIcon className={classes.carticon} />
            )}
          </Button>
        </Link>
      </ThemeProvider>
    </div>
  );
};

export default DynamicButton;
