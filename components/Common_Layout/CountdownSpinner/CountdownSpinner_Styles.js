import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(
  {
    container: {
      ["@media (max-width:800px)"]: {
        transform: "scale(0.7)",
        marginLeft: "1.5rem",
      },
    },
    time: {
      width: "9rem !important",
      backgroundColor: "transparent",
      zIndex: 1,
      ["@media (max-width:800px)"]: {
        width: "9rem !important",
      },
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
      height: 134,
      width: 134,
      backgroundColor: "white",
      borderRadius: 80,
      top: "-2.8rem",
      right: "-2.8rem",
    },

    countdownlabel: {
      marginLeft: "0rem !important",
      marginTop: "-0.4rem !important",
    },
  },
  { index: 1 },
);

export { useStyles };
