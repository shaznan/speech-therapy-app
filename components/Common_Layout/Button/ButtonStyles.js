import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  primarybutton: {
    backgroundColor: "#ED1C24",
    transition: "0.3s ease-in-out",
    "&:hover": {
      backgroundColor: "#ff0008",
      "& $icon": {
        transform: "TranslateX(5px)",
      },
    },
    padding: "0.3rem 1.5rem",
    fontWeight: "bold",
    color: "white",
    textTransform: "capitalize",
    borderRadius: "7px",
    ["@media (max-width:1280px)"]: {
      fontSize: "1.5rem",
    },
  },
  backbutton: {
    transition: "0.3s ease-in-out",
    paddingLeft: "-2",
    "&:hover": {
      color: "black",
      fontWeight: "bold",
      backgroundColor: "none",
      "& $iconback": {
        transform: "TranslateX(-5px)",
      },
    },
    color: "#636363",
    ["@media (max-width:1280px)"]: {
      fontSize: "1.5rem",
    },
  },

  icon: {
    transition: "0.3s ease-in-out",
    fontSize: "2rem",
  },
  iconback: {
    transition: "0.3s ease-in-out",
    fontSize: "2rem",
    marginLeft: "-1rem",
  },
});

export { useStyles };
