import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(
  {
    time: {
      width: "9rem !important",
      backgroundColor: "transparent",
      zIndex: 1,
    },
    yellowbar: {
      color: "#FFD105 !important",
    },
    redbar: {
      color: "#ff0008 !important",
    },
    threedigitcountdownsec: {
      marginLeft: "-0.5rem",
    },
    countdownsec: {
      fontSize: "3rem",
      fontFamily: "product-sans, sans-serif",
      fontWeight: "bold !important",
      borderRadius: 80,
    },
    circularbg: {
      position: "absolute",
      content: "''",
      height: 124,
      width: 124,
      backgroundColor: "white",
      borderRadius: 80,
      top: "-2.5rem",
      right: "-2.5rem",
    },

    countdownlabel: {
      marginLeft: "0rem !important",
      marginTop: "-0.4rem !important",
    },
  },
  { index: 1 },
);

export { useStyles };
