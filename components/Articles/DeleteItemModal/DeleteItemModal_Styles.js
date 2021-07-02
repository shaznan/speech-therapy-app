import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    width: "25vw",
    backgroundColor: "white",
    padding: "1.4rem 3rem",
    border: "none !important",
    borderRadius: "1rem",
    outline: "none !important",
    boxShadow: "2px 2px 55px rgba(0,0,0,0.3)",
  },
  deletebtn_cont: {
    display: "flex",
    marginTop: "3rem",
    justifyContent: "space-between",
  },
});

export { useStyles };
