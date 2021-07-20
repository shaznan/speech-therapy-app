import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(
  {
    wrapperClass: {
      padding: "1rem",
      ["@media (max-width:960px)"]: {
        padding: "0rem",
      },
    },
    editorClass: {
      backgroundColor: "white",
      padding: "1rem",
      height: "60vh",
      boxShadow: "0px 9px 40px rgba(0,0,0,0.08)",
    },
    toolbarClass: {
      boxShadow: "0px 9px 40px rgba(0,0,0,0.08)",
      backgroundColor: "rgba(250,250,250,0.9)",
      ["@media (max-width:960px)"]: {
        height: "15vh",
        overflow: "scroll",
      },
    },
    content_container: {},
  },
  { index: 1 },
);

export { useStyles };
