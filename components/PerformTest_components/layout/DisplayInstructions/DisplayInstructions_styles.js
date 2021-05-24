import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    marginTop: "4rem",
  },
  card: {
    backgroundColor: "white",
    padding: "1rem 3rem 3rem 2rem",
    width: "40rem",
    borderRadius: "9px",
    boxShadow: "0px 3px 29px rgba(0,0,0,0.1)",
  },
  btncontainer: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "2rem",
  },
});

export { useStyles };

export const paragraphstyle = {
  opacity: "0.9",
  marginBottom: "1rem",
  width: "36rem",
};
