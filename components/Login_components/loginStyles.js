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
  headercontainer: {
    marginBottom: "-7rem",
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
  },
  loginLogoImage: {
    width: "12rem",
    marginLeft: "15vw",
    marginBottom: "-7rem",
    transition: "0.3s ease-in-out",
  },

  //   @media only screen and (max-width: 1280px) {
  //     .loginLogoImage {
  //       width: 9rem;
  //       margin-left: 24%;
  //     }
  //   }

  signinbtn: {
    paddingLeft: "0.5rem",
    // transform: "scale(1.2)",
  },
  signup_in_container: {
    height: "3vh",
  },
  loginwithgoogle_btn: {
    "&:hover": {
      backgroundColor: "#0069d9",
      borderColor: "black",
      boxShadow: "none",
    },
  },
  googleicon: {
    width: "1.5rem",
    marginLeft: "0.4rem",
  },
  loginwithgoogle_cont: {
    marginTop: "1.5rem",
    display: "flex",
    justifyContent: "center",
  },
});

export { useStyles };
