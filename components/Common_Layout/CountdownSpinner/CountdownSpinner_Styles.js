import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  time: {
    width: "9rem !important",
    backgroundColor: "transparent",
    zIndex: 1,
  },
  yellowbar: {
    color: "#FFD105",
  },
  redbar: {
    color: "#ff0008",
  },
  threedigitcountdownsec: {
    fontSize: "3rem",
    fontFamily: "product-sans, sans-serif",
    fontWeight: "bold !important",
    backgroundColor: "white !important",
    padding: "1.5rem 1.7rem 2.5rem 1.4rem",
    borderRadius: 80,
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
});

export { useStyles };
