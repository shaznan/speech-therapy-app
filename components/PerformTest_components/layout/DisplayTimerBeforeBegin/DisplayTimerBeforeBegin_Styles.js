import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  timespinner: {
    display: "flex",
    justifyContent: "center",
    marginTop: "7rem",
    transform: "scale(1.5)",
    marginRight: "8rem",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    marginTop: "2rem",
  },
  title: {
    textAlign: "center",
  },
});

export { useStyles };
