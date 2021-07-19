import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(
  {
    container: {
      display: "flex",
      justifyContent: "center",
      marginTop: "8rem",
      position: "relative",
    },
    inputtext: {
      paddingTop: "1rem",
      fontFamily: "product-sans",
      fontSize: "2rem",
      marginLeft: "1.5rem",
      opacity: "0.5",
      marginBottom: "-1.5rem !important",
      border: "none",
      outline: "none",
      width: "32rem",
    },
    inputcontainer: {
      display: "flex",
      flexDirection: "row",
      position: "relative",
    },
    iconcontainer: {
      "&::before": {
        display: "inline-block",
        position: "absolute",
        content: "''",
        width: "4.5rem",
        height: "4.5rem",
        borderRadius: "50%",
        border: "4px solid rgba(0,0,0,0.1)",
        left: "-0.8rem",
        top: "0.2rem",
      },
    },
    icon: {
      color: "red",
      fontSize: "3rem !important",
      marginTop: "1rem !important",
      marginBottom: "-1.5rem !important",
    },
    closebtn: {
      position: "absolute",
      right: "-1rem",
      top: "-1rem",
      opacity: 0.5,
    },
  },
  { index: 1 },
);

export { useStyles };
