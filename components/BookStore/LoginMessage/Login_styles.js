import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(
  {
    maincont: {
      backgroundColor: "rgba(0,0,0,0.4)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "87vh",
    },
    message_cont: {
      height: "30vh",
      // display: "inline",
      width: "30vw",
    },
    icon: {
      fontSize: "5rem",
      textAlign: "center",
    },
    icon_cont: {
      display: "flex",
      justifyContent: "center",
      margin: "2rem auto 1.5rem auto",
    },
    heading_cont: {
      display: "flex",
      justifyContent: "center",
      marginBottom: "1rem",
    },
    //   heading: {
    //     textAlign: "center",
    //   },
    login_btn: {
      display: "flex",
      justifyContent: "center",
    },
  },
  { index: 1 },
);

export { useStyles };
