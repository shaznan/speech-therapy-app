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
    padding: "3rem 3.2rem",
    borderRadius: "5px",
    textAlign: "center",
    width: "40rem",
    position: "relative",
  },
  body: {
    marginTop: "1.3rem",
  },
  typography: {
    // lineHeight: "2.5rem",
    color: "rgba(0,0,0,0.6)",
  },
  maintext: {
    fontSize: "1.1rem",
  },
  score: {
    marginBottom: "0.4rem",
  },
  highlight: {
    backgroundColor: "#FFE98A",
    fontWeight: "bolder",
    marginLeft: "0.2rem",
    color: "black",
  },
  alerttext: {
    marginTop: "0.6rem",
  },
  captiontext: {
    marginTop: "0.6rem",
    marginBottom: "0.6rem",
  },
  btn: {
    transition: "0.3s ease-in-out",
    marginTop: "1rem",
    padding: "0.3rem 1.1rem",
    fontWeight: "bold",
    color: "white",
    textTransform: "capitalize",
    ["@media (max-width:1280px)"]: {
      fontSize: "1.5rem",
    },
  },
  tryagainbtn: {
    backgroundColor: "#FF4444",
    borderRadius: "7px 0px 0px 7px ",
    "&:hover": {
      backgroundColor: "#ff0008",
      "& $icon": {
        transform: "TranslateX(5px)",
      },
    },
  },
  dashboardbtn: {
    backgroundColor: "rgb(20,146,230)",
    borderRadius: "0px 7px 7px 0px",
    "&:hover": {
      backgroundColor: "rgb(7,130,212)",
      "& $icon": {
        transform: "TranslateX(5px)",
      },
    },
  },
  closebtn: {
    position: "absolute",
    right: "10%",
    top: "3%",
  },
  accuracyrate: {
    fontWeight: "bolder",
    color: "black",
  },
  icon: {
    marginBottom: "-0.3rem",
  },
}));
