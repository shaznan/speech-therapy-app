import React, { Fragment } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

function FormBtn({ text, form }) {
  const useStyles = makeStyles({
    formbtn: {
      backgroundColor: "#FF4444 !important",
      marginTop: "1rem !important",
      marginBottom: "1rem !important",
      transition: "0.3s ease-in-out",
      "&:hover": {
        backgroundColor: "#ff0008 !important",
      },
      padding: "0.3rem 1.5rem !important",
      fontWeight: "bold",
      color: "white !important",
      textTransform: "capitalize",
      borderRadius: "7px !important",
      ["@media (max-width:1280px)"]: {
        fontSize: "1.5rem",
      },
      ["@media (max-width:600px)"]: {
        fontSize: "0.8rem",
      },
    },
  });

  const classes = useStyles();
  return (
    <Fragment>
      <Button type="submit" form={form} className={classes.formbtn}>
        {text}
      </Button>
    </Fragment>
  );
}

export default FormBtn;
