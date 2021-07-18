import { makeStyles } from "@material-ui/core/styles";
import bgImageOne from "../../assets/images/bg_image_one_light.png";
import coverImage from "../../assets/images/home_coverpage.jpg";

const useStyles = makeStyles({
  "@global": {
    body: {
      backgroundColor: "#f6f6f7",
      fontFamily: "product-sans",
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
  container: {
    height: "100vh",
  },
  coverImage: {
    backgroundImage: `url(${coverImage})`,
    height: "87vh",
    backgroundRepeat: "no-repeat",
    backgroundPositionX: "-16rem",
    // backgroundPosition: "bottom ",
    width: "100%",
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
    ["@media (max-width:400px)"]: {
      transform: "scale(0.7)",
      textAlign: "center",
      width: "100%",
      height: "100vh",
      marginTop: "3rem",
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
    marginBottom: "3rem",
  },
  textdecoration: {
    fontFamily: "spydolls, sans-serif",
    fontSize: "5rem",
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
  articles_MainContainer: {
    // height: "100vh",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#f6f6f7",
    marginBottom: "1rem",
  },
  articles_cardContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "11vh",
  },
  writearticleBanner: {
    backgroundColor: "black",
    height: "15vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  bannertxt: {
    textAlign: "center",
    color: "rgba(200,200,201,1)",
    fontSize: "1.25rem",
    marginBottom: "1rem",
    // width: "100vw",
  },
  bannerbtn: {
    color: "rgba(255,255,255,0.9)",
    border: "0.5px solid rgba(200,200,200,1)",
    // width: "100vw",
  },
  feelsLike_cont: {
    // display: "flex",
    // justifyContent: "center",
    height: "80vh",
    backgroundColor: "#f6f6f7",
  },
  feelsLike_txtContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  feelsLike_subtxt_cont: {
    width: "59%",
  },
  feelsLike_heading: {
    marginBottom: "2rem",
    ["@media (max-width:800px)"]: {
      textAlign: "center",
      marginTop: "3rem",
    },
  },
  feelsLike_txt: {
    lineHeight: "1.8rem",
    fontSize: "1.1rem",
    opacity: "0.8",
    ["@media (max-width:800px)"]: {
      textAlign: "center",
    },
  },
  videoplayerImg_cont: {
    display: "flex",
    justifyContent: "center",
    height: "100%",
    alignItems: "center",
    position: "relative",
  },
  videoplayerImg: {
    width: "50vw",
    ["@media (max-width:800px)"]: {
      width: "90vw",
      marginLeft: "2.5rem",
    },
  },
  player_iconbtm: {
    position: "absolute",
    color: "#FF4444",
  },
  player_icon: {
    fontSize: "4.5rem",
  },
});

export { useStyles };
