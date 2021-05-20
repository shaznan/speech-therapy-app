import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  homecontainer: {
    display: "flex",
    backgroundColor: "#f6f6f7;",
    ["@media (max-width:1280px)"]: {
      flexDirection: "column-reverse",
    },
  },
  textcontainer: {
    height: "87vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 5,
    ["@media (max-width:1280px)"]: {
      transform: "scale(0.7)",
      textAlign: "center",
      width: "100%",
      height: "100vh",
    },
  },
  mainheading: {
    fontFamily: "product-sans, sans-serif",
    marginBottom: "2rem",
  },
  textdecoration: {
    fontFamily: "spydolls, sans-serif",
    fontSize: "7rem",
    lineHeight: "0.8em",
  },
  subtitle: {
    fontSize: "1.2rem",
    marginBottom: "3rem",
    opacity: 0.6,
  },
  primarybutton: {
    backgroundColor: "#ED1C24",
    padding: "0.5rem 1.5rem",
    fontWeight: "bold",
    color: "white",
    textTransform: "capitalize",
    borderRadius: "7px",
    ["@media (max-width:1280px)"]: {
      fontSize: "1.5rem",
    },
  },
  imagecontainer: {
    height: "87vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 5,
    ["@media (max-width:1280px)"]: {
      transform: "scale(0.7)",
      textAlign: "center",
      width: "100%",
      marginBottom: "-6rem",
    },
  },
  homepageimage: {
    width: "31vw",
    ["@media (max-width:1280px)"]: {
      width: "90vw",
    },
  },
  linebreak: {
    display: "static",
    ["@media (max-width:1280px)"]: {
      display: "none",
    },
  },
});

export { useStyles };
