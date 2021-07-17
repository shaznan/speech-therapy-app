import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    backgroundColor: "black",
  },
  appbar: {
    backgroundColor: "black",
  },
  toolbar: {
    display: "flex",
    justifyContent: "center",
  },
  button: {
    border: "0.2px solid rgba(255,255,255,0.4)",
    padding: "auto 3rem",
  },
});

export { useStyles };
