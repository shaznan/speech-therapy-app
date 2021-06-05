import { makeStyles } from "@material-ui/core/styles";
import bgImage from "../../../assets/images/pf_bgimage.png";

const performtestStyles = makeStyles({
  title: {
    marginTop: "4rem",
    width: "100%,",
    textAlign: "center",
  },
  performtestbgimage: {
    backgroundImage: `url(${bgImage})`,
    height: "83vh",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom",
    width: "100%",
  },
  timespinner: {
    display: "flex",
    justifyContent: "center",
    marginTop: "6rem",
    marginLeft: "-9rem",
    marginBottom: "2rem",
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
});

export { performtestStyles };
