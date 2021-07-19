import { makeStyles } from "@material-ui/core/styles";
import coverImage from "../../assets/images/home_coverpage.jpg";
import whyST from "../../assets/images/whyspeechtherapy_bg.jpg";
import videoPlayerbg from "../../assets/images/videoplayer_bg.jpg";

const useStyles = makeStyles(
  {
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
      ["@media (max-width:800px)"]: {
        transform: "scale(0.7)",
        textAlign: "center",
        width: "100%",
        height: "100vh",
        marginTop: "3rem",
      },
    },
    // bgimage: {
    //   backgroundImage: `url(${bgImageOne})`,
    //   backgroundSize: "cover",
    //   backgroundRepeat: "no-repeat",
    //   backgroundSize: "70rem ",
    //   backgroundPositionX: "-10rem",
    //   backgroundPositionY: "24.5%",
    //   zIndex: "100",
    //   position: "relative",
    //   // bottom: "0",
    // },

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
      height: "35vh",
      ["@media (max-width:1280px)"]: {
        width: "100%",
      },
    },
    articles_MainContainer: {
      height: "100%",
      display: "flex",
      backgroundColor: "#f6f6f7",
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
      backgroundColor: "#707070",
      height: "15vh",
      width: "100vw",
      display: "flex",
      marginBottom: "-1rem",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    bannertxt: {
      textAlign: "center",
      color: "rgba(200,200,201,1)",
      fontSize: "1.24rem",
      marginBottom: "1rem",
      // width: "100vw",
    },
    bannerbtn: {
      color: "rgba(255,255,255,0.9)",
      border: "0.5px solid rgba(200,200,200,1)",
      // width: "100vw",
    },
    feelsLike_cont: {
      height: "100vh",
      backgroundColor: "#f6f6f7",
      backgroundImage: `url(${videoPlayerbg})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundSize: "70rem ",
      backgroundPositionX: "60rem",
      backgroundPositionY: "25%",
      zIndex: "100",
      position: "relative",
      backgroundColor: "#f6f6f7",
      ["@media (max-width:800px)"]: {
        backgroundPositionX: "-16rem",
        height: "100%",
      },
    },
    feelsLike_txtContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100%",
    },
    feelsLike_subtxt_cont: {
      width: "60%",
      ["@media (max-width:800px)"]: {
        width: "80%",
      },
    },
    feelsLike_heading_cont: {
      marginBottom: "2rem",
      ["@media (max-width:800px)"]: {
        textAlign: "center",
        marginTop: "3rem",
      },
    },
    feelsLike_heading: {
      ["@media (max-width:800px)"]: {
        fontSize: "2rem",
      },
    },
    feelsLiketxt_cont: {
      lineHeight: "1.8rem",
      fontSize: "1.1rem",
      opacity: "0.75",
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
        marginLeft: "1.5rem",
      },
    },
    player_iconbtm: {
      position: "absolute",
      color: "#FF4444",
    },
    player_icon: {
      fontSize: "4.5rem",
    },
    whySpeech_cont: {
      height: "80vh",
      backgroundColor: "#f6f6f7",
      backgroundImage: `url(${whyST})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundSize: "70rem ",
      backgroundPositionX: "-10rem",
      backgroundPositionY: "25%",
      zIndex: "100",
      position: "relative",
      ["@media (max-width:800px)"]: {
        display: "flex",
        flexDirection: "column-reverse",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundPositionX: "-15rem",
      },
    },
    whySpeech_img: {
      width: "100%",
    },
    whySPeech_imgcont: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    whyspeech_txtcont: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      width: "100%",
    },
    whyspeech_txtsubcont: {
      width: "60%",
      ["@media (max-width:800px)"]: {
        width: "80%",
      },
    },
    whyspeech_heading: {
      textAlign: "right",
      marginBottom: "2rem",
      ["@media (max-width:800px)"]: {
        textAlign: "center",
        fontSize: "2rem",
      },
    },
    whyspeech_txt: {
      lineHeight: "1.8rem",
      textAlign: "right",
      // fontSize: "1.1rem",
      opacity: "0.75",
      ["@media (max-width:800px)"]: {
        textAlign: "center",
      },
    },
    testimonial_cont: {
      height: "50vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f6f6f7",
      overflow: "hidden",
    },
    Carousel: {
      height: "35vh",
      ["@media (max-width:800px)"]: {
        transform: "scale(0.5)",
      },
    },
    caroosel_itemcont: {
      height: "32vh",
    },
    caroosel_item: {
      height: "30vh",
      display: "flex",
      justifyContent: "center",
    },
    card_container: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      height: "100%",
      opacity: "0.75",
    },
  },
  { index: 1 },
);

export { useStyles };
