import { makeStyles } from "@material-ui/core/styles";
import bgImage from "../../assets/images/articles_cover_image-01.png";

const useStyles = makeStyles({
  container: {
    height: "100vh",
    overflow: "hidden",
  },
  body: {
    width: "100vw",
    height: "87vh",
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundSize: "120rem",
    backgroundPositionY: "-10rem",
    height: "92vh",
  },
  authorimage: {
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    objectFit: "cover",
    objectPosition: "center right",
  },

  footer_authorimg: {
    width: "50px",
    height: "50px",
    marginRight: "1rem",
    // opacity: "0.7",
  },

  selecttopic_cont: {
    display: "flex",
    justifyContent: "center",
  },
  selecttopic: {
    marginTop: "3rem",
    height: "45rem",
    width: "25vw",
    backgroundColor: "rgba(255,255,255,0.6)",
    backdropFilter: "blur(5px)",
    boxShadow: "0px 9px 40px rgba(0,0,0,0.08)",
    borderRadius: "13px",
    // overflowY: "scroll",
  },
  options_title: {
    fontSize: "1.2rem",
    fontWeight: "bold",
  },
  topicoptions_cont: {
    height: "60vh",
    overflowY: "scroll",
    "&::-webkit-scrollbar": {
      width: "0em",
    },
  },
  topic_options: {
    backgroundColor: "white",
    padding: "1rem",
    paddingLeft: "2rem",
    "&:hover": {
      backgroundColor: "rgba(240,240,240,1)",
      cursor: "pointer",
    },
  },
  heading: {
    display: "flex",
    justifyContent: "center",
    margin: "2rem 0rem",
  },
  author: {
    // marginBottom: "0.5rem",
    fontSize: "1rem",
    opacity: "0.7",
    marginLeft: "0.4rem",
    // marginTop: "-1rem",
  },
  displayarea: {
    backgroundColor: "white",
    marginTop: "3rem",
    height: "45rem",
    width: "55vw",
    borderRadius: "13px",
    // padding: "2rem 7rem",
    position: "relative",
    boxShadow: "0px 9px 40px rgba(0,0,0,0.08)",
    overflowY: "scroll",
    "&::-webkit-scrollbar": {
      width: "0em",
    },
    overflowX: "hidden",
  },
  displayarea_body: {
    padding: "2rem 7rem",
  },
  displayarea_heading: {
    textAlign: "start",
    fontSize: "3rem",
    fontFamily: "Roboto, sans-serif",
  },
  linedivider: {
    height: "0.2rem",
    backgroundColor: "rgba(0,0,0,0.05)",
    marginBottom: "2rem",
    // marginTop: "4rem",
  },
  footerlinedivider: {
    height: "0.2rem",
    backgroundColor: "rgba(0,0,0,0.05)",
    marginBottom: "2rem",
    marginTop: "5rem",
  },
  displayarea_paragraph: {
    lineHeight: "2rem",
    fontSize: "1rem",
    fontFamily: "Poppins,sans-serif",
    opacity: "0.8",
  },
  coverimage: {
    width: "100%",
    marginTop: "-23rem",
  },
  footertext: {
    fontSize: "1rem",
    opacity: "0.6",
    paddingTop: "0.8rem",
    fontFamily: "Poppins,sans-serif",
  },
  checkbox: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "rgba(255,255,255,0.7)",
  },
  writearticle_cont: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "rgba(255,255,255,0.7)",
    paddingTop: "0.8rem",
    paddingBottom: "0.8rem",
  },
  writearticle_btn: {
    backgroundColor: "white",
    padding: "0.3rem 0.8rem",
    color: "rgba(0,0,0,0.7)",
    boxShadow: "0px 9px 40px rgba(0,0,0,0.13)",
    borderRadius: "30rem",
    transition: "0.2s ease-in-out",
    "&:hover": {
      backgroundColor: "#FF4444",
      color: "white",
      cursor: "pointer",
    },
  },
  writearticle_icon: {
    fontSize: "large",
    marginRight: "0.3rem",
    // marginBottom: "-0.2rem",
  },
  form: {
    display: "flex",
    justifyContent: "center",
    marginTop: "5vh",
    // alignItems: "center",
  },
  form_container: {
    backgroundColor: "rgba(255,255,255,0.8)",
    width: "80vw",
    height: "90%",
    padding: "3rem 10em",
    boxShadow: "0px 9px 40px rgba(0,0,0,0.08)",
    borderRadius: "39px",
  },
  textfeild: {
    backgroundColor: "white",
    marginBottom: "2rem",
    width: "50%",
    border: "none",
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
  textfeild_content: {
    width: "100%",
    height: "30vh",
    borderRadius: "13px",
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderRadius: "13px",
        height: "30vh",
      },
    },
  },
  formbtn: {
    backgroundColor: "#FF4444",
    transition: "0.3s ease-in-out",
    "&:hover": {
      backgroundColor: "#ff0008",
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
  // helpertext: {
  //   backgroundColor: "yellow",
  // },
});

export { useStyles };