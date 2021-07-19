import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(
  {
    container: {
      display: "flex",
      justifyContent: "center",
      marginTop: "4rem",
    },
    btncontainer: {
      display: "flex",
      justifyContent: "flex-end",
      marginTop: "2rem",
    },
  },
  { index: 1 },
);

export { useStyles };

export const paragraphstyle = {
  opacity: "0.9",
  marginBottom: "1rem",
  width: "36rem",
  color: "#636363 !important",
};
