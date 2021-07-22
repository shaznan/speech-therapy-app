import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  mainContainer: {
    backgroundColor: "#f6f6f7",
  },
  formheader: {
    textAlign: "center",
    fontSize: "1.5rem",
    color: "#FFD728",
    marginBottom: "2rem !important",
    marginTop: "2rem !important",
  },
  form_maincontainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "87vh",
    ["@media (max-width:600px)"]: {
      height: "60vh",
    },
  },
  formcontainer: {
    backgroundColor: "white",
    width: "30vw",
    padding: "2rem",
    borderRadius: "13px",
    boxShadow: "0px 3px 29px rgba(0,0,0,0.08)",
    ["@media (max-width:1280px)"]: {
      width: "50vw",
    },
    ["@media (max-width:600px)"]: {
      width: "100vw",
    },
  },
  Locationmap: {
    border: 0,
    width: "100%",
    height: "100vh",
    ["@media (max-width:600px)"]: {
      width: "100vw",
      height: "50vh",
    },
  },
});

export { useStyles };
