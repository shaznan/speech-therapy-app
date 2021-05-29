import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  timespinner: {
    display: "flex",
    justifyContent: "center",
    marginTop: "7rem",
    transform: "scale(1.5)",
    marginRight: "10rem",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    marginTop: "5rem",
  },
  title: {
    textAlign: "center",
  },
});

export { useStyles };
