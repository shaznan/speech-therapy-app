import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(
  {
    container: {
      display: "flex",
      justifyContent: "center",
      marginTop: "4rem",
      // height: "41vh",
      overflow: "scroll",
      ["@media (max-width:960px)"]: {
        width: "100%",
      },
    },

    btncontainer: {
      display: "flex",
      justifyContent: "flex-end",
      marginTop: "2rem",
    },
    closebtncontainer: {
      position: "relative",
    },
    closeWindowBtn: {
      position: "absolute",
      right: "2rem",
      ["@media (max-width:960px)"]: {
        right: "3rem",
      },
    },
    paragraphtxt: {
      ["@media (max-width:1650px)"]: {
        fontSize: "0.95rem",
      },
      ["@media (max-width:960px)"]: {
        fontSize: "0.95rem",
      },
    },
  },
  { index: 1 },
);

export { useStyles };

export const paragraphstyle = {
  opacity: "0.9",
  marginBottom: "1rem",
  width: "95%",
  color: "#636363 !important",
};
