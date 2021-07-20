import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(
  {
    cardcontainer: {
      display: "flex",
      justifyContent: "center",
      marginTop: "4rem",
      width: "35rem !important",
      position: "relative",
      ["@media (max-width:960px)"]: {
        // position: "absolute",
        // width: "100%",
      },
    },
    container: {
      display: "flex",
      justifyContent: "center",
      ["@media (max-width:960px)"]: {
        // position: "absolute",
        width: "100%",
      },
    },
    formlabel: {
      fontSize: "1rem !important",
      color: "#636363 !important",
      marginBottom: "0.6rem",
      paddingTop: "2rem !important",
    },
    formlabelsub: {
      fontSize: "0.9rem !important",
      color: "#636363 !important",
      marginTop: "1rem",
    },
    options: {
      width: "6rem !important",
    },
    selectlabel: {
      marginTop: "1.8rem",
    },
    formgroup: {
      display: "flex !important",
      flexDirection: "row",
    },
    button: {
      marginTop: "1rem",
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "-1rem",
    },
  },
  { index: 1 },
);

export { useStyles };
