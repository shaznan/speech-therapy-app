import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  mainContainer: {
    backgroundColor: "#f6f6f7",
  },
  admin_body: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "92vh",
    width: "100vw",
  },
  appbar: {
    backgroundColor: "black",
  },
  button_container: {
    display: "flex",
    justifyContent: "center",
  },
  nav_btn: {
    "&:hover": {
      backgroundColor: "#ff4444",
    },
  },
  articles_mainheading: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  articleTable_main_cont: {
    display: "flex",
    justifyContent: "center",
    height: "60vh",
  },
  articleTable_cont: {
    width: "60%",
    height: "90%",
    backgroundColor: "white",
    border: "none",
  },
  btn_cont: {
    padding: "0.5rem 3rem",
    display: "flex",
    justifyContent: "flex-end",
    backgroundColor: "#ffe0e2",
  },
  article_btn: {
    color: "red",
  },
  perfomtest_heading: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  adminform_cont: {
    display: "flex",
    flexDirection: "column",
  },
  performtest_input: {
    marginBottom: "1rem",
    // marginTop: "1rem",
  },
  gistinput: {
    width: "100%",
  },
  performtest_submitbtn: {
    border: "0.5px solid rgba(0,0,0,0.3)",
    marginBottom: "1rem",
  },
});

export { useStyles };
