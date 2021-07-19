import React, { Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(
  {
    paragraph: {
      fontSize: "1.2rem",
      marginBottom: "3rem",
      marginTop: "2rem",
      opacity: 0.9,
      width: "30rem",
      lineHeight: 1.5,
      ["@media (max-width:1280px)"]: {
        marginLeft: "auto",
        marginRight: "auto",
        //   fontSize: "2vw",
      },
    },
  },
  { index: 1 },
);

function Paragraph({ text, customstyle = {} }) {
  const classes = useStyles();
  return (
    <Fragment>
      <Typography
        variant="subtitle1"
        className={classes.paragraph}
        style={customstyle}>
        {text}
      </Typography>
    </Fragment>
  );
}

export default Paragraph;
