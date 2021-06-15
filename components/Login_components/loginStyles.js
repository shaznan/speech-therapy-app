import { makeStyles } from "@material-ui/core/styles";
import loginBg from "../../assets/images/login_bg.jpg";

const useStyles = makeStyles({
  bgimage: {
    backgroundImage: `url(${loginBg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100rem ",
    backgroundPositionX: "25rem",
    backgroundPositionY: "25%",
    width: "100%",
    height: "100%",
    position: "relative",
    // bottom: "0",
  },
  container: {
    height: "100vh",
    width: "100vw",
  },
  backcontainer: {
    textAlign: "start",
    paddingLeft: "5rem",
    paddingTop: "2rem",
  },
  loginheadercontainer: {
    textAlign: "end",
    paddingRight: "5rem",
    paddingTop: "2rem",
  },
  textfield: {
    width: "100%",
    marginBottom: "1rem !important",
    "& label.Mui-focused": {
      color: "black",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderRadius: "13px",
      },
      "&.Mui-focused fieldset": {
        borderColor: "black",
      },
    },
  },
  formcontainer: {
    backgroundColor: "white",
    padding: "1rem 4rem 3rem 3rem",
    width: "30rem",
    height: "35rem",
    marginLeft: "8vw",
    borderRadius: "9px",
    boxShadow: "0px 3px 29px rgba(0,0,0,0.1)",
  },
  formheader: {
    textAlign: "center",
    fontSize: "1.5rem",
    color: "#FFD728",
    marginBottom: "2rem !important",
    marginTop: "2rem !important",
  },
  formbuttons_container: {
    marginTop: "1rem",
  },
  signupbtn: {
    textAlign: "end",
    paddingRight: "0.5rem",
    // transform: "scale(1.2)",
  },
  signinbtn: {
    paddingLeft: "0.5rem",
    // transform: "scale(1.2)",
  },
});

export { useStyles };
