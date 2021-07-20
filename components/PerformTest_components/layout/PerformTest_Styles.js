import { makeStyles } from "@material-ui/core/styles";
import bgImage from "../../../assets/images/pf_bgimage.jpg";

const performtestStyles = makeStyles(
  {
    title: {
      marginTop: "4rem",
      width: "100%,",
      textAlign: "center",
      ["@media (max-width:960px)"]: {
        marginTop: "2rem",
      },
    },
    subtitle: {
      ["@media (max-width:960px)"]: {
        transform: "scale(0.6)",
        marginBottom: "-1rem",
      },
    },

    maintitle_cont: {
      width: "100vw",
      ["@media (max-width:960px)"]: {
        transform: "scale(0.6)",
      },
    },
    performtestbgimage: {
      backgroundImage: `url(${bgImage})`,
      height: "87vh",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "bottom ",
      width: "100%",
      ["@media (max-width:960px)"]: {
        height: "100%",
      },
    },
    container: {
      // height: "100vh",
      width: "100vw",
      overflow: "scroll",

      //   ["@media (max-width:960px)"]: {
      //     height: "100vh",
      //     // overflow: "scroll",
      //     // overflow: "scroll",
      //   },
    },

    timespinner: {
      width: "100vw",
      display: "flex",
      justifyContent: "center",
      marginLeft: "-3.1rem",
      marginTop: "6rem",
      marginBottom: "2rem",
      ["@media (max-width:800px)"]: {
        marginTop: "2rem",
      },
    },
    performtesthome_btncont: {
      display: "flex",
      justifyContent: "center",
      marginTop: "4rem",
      // marginRight: "2.4rem",
    },
    currentprogress: {
      display: "flex",
      justifyContent: "center",
    },
    wordcount: {
      marginTop: "3.5rem",
      textAlign: "center",
      backgroundColor: "white",
      padding: "1rem 5rem",
      borderRadius: 19,
      boxShadow: "1px 0px 15px rgba(90, 90, 90, 0.1)",
    },
    label: {
      fontSize: "1.3rem",
      opacity: "0.6",
    },
    // wordspermin: {
    //   fontSize: "3rem",
    //   fontFamily: "product-sans, sans-serif",
    //   fontWeight: "bold !important",
    // },
    startnowcontainer: {
      display: "flex",
      justifyContent: "center",
      marginTop: "3rem",
    },
    dashboardBtn: {
      marginTop: "0rem",
      borderRadius: "7px",
      padding: "0.3rem 0.9rem",
    },
  },
  { index: 1 },
);

export { performtestStyles };
