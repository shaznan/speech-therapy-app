import { makeStyles } from "@material-ui/core/styles";
import bgImage from "../../../assets/images/pf_bgimage.jpg";

const performtestStyles = makeStyles(
  {
    title: {
      marginTop: "4rem",
      width: "100%,",
      textAlign: "center",
    },
    performtestbgimage: {
      backgroundImage: `url(${bgImage})`,
      height: "87vh",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "bottom ",

      width: "100%",
    },
    container: {
      height: "100vh",
      width: "100vw",
      overflow: "hidden", //TODO: Enable this!!!
    },
    timespinner: {
      display: "flex",
      justifyContent: "center",
      marginTop: "6rem",
      marginLeft: "-9rem",
      marginBottom: "2rem",
    },
    performtesthome_btncont: {
      display: "flex",
      marginTop: "4rem",
      marginRight: "2.4rem",
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
    wordspermin: {
      fontSize: "3rem",
      fontFamily: "product-sans, sans-serif",
      fontWeight: "bold !important",
    },
    startnowcontainer: {
      display: "flex",
      justifyContent: "center",
      marginTop: "3rem",
      marginRight: "2rem",
    },
  },
  { index: 1 },
);

export { performtestStyles };
