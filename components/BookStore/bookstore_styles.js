import { flexbox } from "@chakra-ui/react";
import { makeStyles } from "@material-ui/core/styles";
import backgroundCoverImage from "../../assets/images/bookstore_bgimage.jpg";

const useStyles = makeStyles({
  bgimage: {
    width: "100%",
    backgroundImage: `url(${backgroundCoverImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundSize: "120rem",
    backgroundPositionY: "-10rem",
    // backgroundPositionX: "-15rem",
    height: "50vh",
  },
  mainheading: {
    display: "flex",
    justifyContent: "center",
    marginTop: "7vh",
    opacity: 0.8,
  },
  searchbox_label: {
    width: "100vw",
    display: "flex",
    marginTop: "5rem",
    justifyContent: "center",
    fontFamily: "product-sans",
    fontSize: "1.4em",
  },
  searchcontainer: {
    display: "flex",
    marginTop: "1rem",
    justifyContent: "center",
  },
  searchbox: {
    backgroundColor: "rgba(255,255,255,0.3)",
    marginBottom: "2rem",
    width: "25%",
    // height: "20px",
    borderRadius: "13px",
    border: "none",
    "& label.Mui-focused": {
      color: "rgba(255,255,255,0.0)",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderRadius: "13px",
        borderColor: "rgba(255,255,255,0.3)",
        boxShadow: "0px 9px 40px rgba(0,0,0,0.08)",
        color: "black",
      },
      "&.Mui-focused fieldset": {
        opacity: 1,
        borderColor: "rgba(255,255,255,0.0)",
        color: "rgba(0,0,0,1)",
        backgroundColor: "rgba(255,255,255,0.5)",
      },
    },
  },
  collection_cont: {
    backgroundColor: "#F6F6F7",
    display: "flex",
    justifyContent: "center",
    height: "100vh",
  },

  collection_heading: {
    textAlign: "center",
    fontWeight: "5rem",
    fontSize: "3rem",
    marginTop: "5rem",
    fontFamily: "product-sans",
    // height: "4vh",
  },
  catergories_cont: {
    backgroundColor: "#F6F6F7",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  catergory: {
    display: "flex",
    justifyContent: "center",
    // marginTop: "5vh",
  },
  caterory_item: {
    opacity: "0.5",
    fontSize: "1.2em",
    textAlign: "center",
    transition: "0.3s ease-in-out",
    "&:hover": {
      opacity: 1,
      //   fontWeight: "bold",
      cursor: "pointer",
    },
  },
  catergory_active: {
    color: "orange",
    opacity: 1,
  },
  displaybook_cont: {
    display: "flex",
    justifyContent: "center",
  },
  displaybooks: {
    backgroundColor: "rgba(255,255,255,0.1)",
    padding: "3rem 10em",
    boxShadow: "0px 9px 40px rgba(0,0,0,0.08)",
    borderRadius: "39px",
    overflow: "scroll",
    "&::-webkit-scrollbar": {
      width: "0em",
    },
    width: "80vw",
    height: "70vh",
    display: "flex",
    justifyContent: "center",
  },
  bookcard: {
    backgroundColor: "white",
    boxShadow: "0px 9px 40px rgba(0,0,0,0.08)",
    borderRadius: "13px",
    marginRight: "2rem",
    marginBottom: "2rem",
    width: "20vw",
    height: "45vh",
    overflowY: "scroll",
    "&::-webkit-scrollbar": {
      width: "0em",
    },
  },
  book_imgcont: {
    width: "100%",
    height: "33vh",
    position: "relative",
  },
  book_img: {
    borderRadius: "13px 13px 0 0",
    width: "100%",
    position: "absolute",
    top: 0,
  },
  book_title: {
    fontFamily: "product-sans",
    textAlign: "center",
    padding: "0.5rem 1rem",
  },
  book_price: {
    fontFamily: "product-sans",
    textAlign: "center",
    fontWeight: "bold",
    padding: "0.5rem 1rem",
  },
});

export { useStyles };
