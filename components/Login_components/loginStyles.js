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
});

export { useStyles };
