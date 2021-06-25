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
  selecttopic_cont: {
    display: "flex",
    justifyContent: "center",
  },
  selecttopic: {
    marginTop: "3rem",
    height: "45rem",
    width: "25vw",
    backgroundColor: "rgba(255,255,255,0.5)",
    boxShadow: "0px 9px 40px rgba(0,0,0,0.08)",
    borderRadius: "13px",
  },
  options_title: {
    fontSize: "1.2rem",
    fontWeight: "bold",
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
});

export { useStyles };
