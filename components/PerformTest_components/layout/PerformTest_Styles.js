import { makeStyles } from "@material-ui/core/styles";

const performtestStyles = makeStyles({
  title: {
    marginTop: "4rem",
    width: "100%,",
    textAlign: "center",
  },
  timespinner: {
    display: "flex",
    justifyContent: "center",
    marginTop: "6rem",
    marginLeft: "-9rem",
  },
  time: {
    color: "#FFD105 !important",
    width: "8rem !important",
    backgroundColor: "transparent",
    zIndex: 1,
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
  countdownsec: {
    fontSize: "3rem",
    fontFamily: "product-sans, sans-serif",
    fontWeight: "bold !important",
    backgroundColor: "white !important",
    padding: "1.5rem 2rem 2.5rem 2rem",
    borderRadius: 80,
  },
  countdownlabel: {
    marginLeft: "1.8rem !important",
    marginTop: "-3rem !important",
  },
  startnowcontainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "3rem",
  },
});

export { performtestStyles };
