import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(
  {
    container: {
      display: "flex",
      alignItems: "center",
      height: "30vh",
      padding: "2rem",
      backgroundColor: "#707070",
      ["@media (max-width:800px)"]: {
        flexDirection: "column",
        height: "100%",
      },
    },
    content_cont: {
      display: "flex",
      alignItems: "center",
      ["@media (max-width:800px)"]: {
        flexDirection: "column",
        //   width: "100vw",
      },
    },
    item: {
      display: "flex",
      alignItems: "cemter",
      flexDirection: "column",
    },
    bodytext: {
      marginTop: "1rem",
      color: "white",
      width: "30vw",
      color: "rgba(220,220,220,1)",
      ["@media (max-width:800px)"]: {
        width: "90vw",
        textAlign: "center",
        fontSize: "0.8rem",
      },
    },
    heading: {
      color: "white",
      ["@media (max-width:800px)"]: {
        textAlign: "center",
      },
    },
    copyright: {
      color: "rgba(200,200,200,0.8)",
      ["@media (max-width:800px)"]: {
        textAlign: "center",
        fontSize: "0.8rem",
      },
    },
    icon: {
      color: "white",
      marginLeft: "0.5rem",
      marginRight: "0.5rem",
    },
    btnCont: {
      display: "flex",
      justifyContent: "center",
    },
    copyrightSign: {
      fontSize: "2rem",
      verticalAlign: "middle",
      color: "#FF4444",
    },
  },
  { index: 1 },
);

export { useStyles };
