import { makeStyles } from "@material-ui/core/styles";
import bgImageOne from "../assets/images/bg_image_one_light.png";

const useStyles = makeStyles({
  "@global": {
    body: {
      backgroundColor: "#f6f6f7",
    },
  },

  maincontainer: {
    display: "flex",
    ["@media (max-width:1280px)"]: {
      flexDirection: "column-reverse",
    },
  },
  "@global": {
    "*::-webkit-scrollbar": {
      width: "0.2em",
      height: "0.2em",
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
  bgimage: {
    backgroundImage: `url(${bgImageOne})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundSize: "70rem ",
    backgroundPositionX: "-10rem",
    backgroundPositionY: "25%",
    zIndex: "100",
    position: "relative",
    // bottom: "0",
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
  subtextcontainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "35vh",
    ["@media (max-width:1280px)"]: {
      width: "100%",
    },
  },
});

export { useStyles };
