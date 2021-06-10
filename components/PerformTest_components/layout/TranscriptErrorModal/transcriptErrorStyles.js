import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: "white",
    boxShadow: "rgba(0, 0, 0, 0.4)",
    border: "none",
    padding: "2rem 5rem",
    borderRadius: "5px",
    textAlign: "center",
    width: "35rem",
  },
}));
