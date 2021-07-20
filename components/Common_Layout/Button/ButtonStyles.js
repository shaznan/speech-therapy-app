import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(
  {
    primarybutton: {
      backgroundColor: "#FF4444",
      transition: "0.3s ease-in-out",
      "&:hover": {
        backgroundColor: "#ff0008",
        "& $icon": {
          transform: "TranslateX(5px)",
        },
      },
      padding: "0.3rem 1.5rem",
      fontWeight: "bold",
      color: "white",
      textTransform: "capitalize",
      borderRadius: "7px",
      ["@media (max-width:900px)"]: {
        fontSize: "0.8rem",
      },
    },
    backbutton: {
      transition: "0.3s ease-in-out",
      paddingLeft: "-2",
      "&:hover": {
        color: "black",
        fontWeight: "bold",
        backgroundColor: "none",
        "& $iconback": {
          transform: "TranslateX(-5px)",
        },
      },
      color: "#636363",
      ["@media (max-width:900px)"]: {
        fontSize: "0.8rem",
      },
    },
    primaryoutline: {
      backgroundColor: "white",
      border: "1px solid rgba(255,68,68,0.7)",
      color: "#FF4444",
      padding: "0.2rem 1.5rem",
      transition: "0.1s ease-in",
      "&:hover": {
        backgroundColor: "white",
        color: "#ff0008",
        // "& $icon": {
        //   transform: "TranslateX(5px)",
        // },
      },
      ["@media (max-width:900px)"]: {
        fontSize: "0.8rem",
      },
    },

    icon: {
      transition: "0.3s ease-in-out",
      fontSize: "2rem",
      ["@media (max-width:900px)"]: {
        fontSize: "0.8rem",
      },
    },
    iconback: {
      transition: "0.3s ease-in-out",
      fontSize: "2rem",
      marginLeft: "-1rem",
      ["@media (max-width:900px)"]: {
        fontSize: "0.8rem",
      },
    },
    carticon: {
      fontSize: "medium",
      marginLeft: "0.6rem",
      ["@media (max-width:900px)"]: {
        fontSize: "0.8rem",
      },
    },
  },
  { index: 1 },
);

export { useStyles };
