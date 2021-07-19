import { makeStyles } from "@material-ui/core/styles";
import bgImageOne from "../../assets/images/bg_image_one_light.png";

const useStyles = makeStyles({
  maincontainer: {
    display: "flex",
    ["@media (max-width:1280px)"]: {
      flexDirection: "column-reverse",
    },
  },
  textcontainer: {
    height: "87vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    ["@media (max-width:1280px)"]: {
      transform: "scale(0.7)",
      textAlign: "center",
      width: "100%",
      height: "100vh",
    },
    ["@media (max-width:800px)"]: {
      transform: "scale(0.7)",
      textAlign: "center",
      width: "100%",
      height: "100vh",
      marginTop: "3rem",
    },
  },
  mainheading: {
    fontFamily: "product-sans, sans-serif",
    marginBottom: "3rem",
    ["@media (max-width:800px)"]: {
      fontSize: "2rem",
    },
  },
  textdecoration: {
    fontFamily: "spydolls, sans-serif",
    fontSize: "5rem",
    lineHeight: "0.8em",
    ["@media (max-width:800px)"]: {
      fontSize: "4rem",
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
  subtextcontainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    height: "35vh",
    ["@media (max-width:440px)"]: {
      //   minWidth: "100vw",
      marginLeft: "-2rem",
    },
  },
  bgimage: {
    backgroundImage: `url(${bgImageOne})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundSize: "70rem ",
    backgroundPositionX: "-10rem",
    backgroundPositionY: "24.5%",
    zIndex: "100",
    position: "relative",
    // bottom: "0",
  },
});

export { useStyles };
