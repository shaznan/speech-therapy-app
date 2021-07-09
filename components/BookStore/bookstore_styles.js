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
    backgroundPositionY: "-20rem",
    // backgroundPositionX: "-15rem",
    height: "35vh",
  },
  mainheading: {
    display: "flex",
    justifyContent: "center",
    marginTop: "7vh",
    opacity: 0.8,
  },
  // searchbox_label: {
  //   width: "100vw",
  //   display: "flex",
  //   marginTop: "3rem",
  //   justifyContent: "center",
  //   fontFamily: "product-sans",
  //   fontSize: "2em",
  // },
  searchcontainer: {
    display: "flex",
    marginTop: "2rem",
    // width: "100%",
    justifyContent: "center",
  },
  searcbox_main_cont: {
    backgroundColor: "#F6F6F7",
  },
  searchbox: {
    backgroundColor: "rgba(255,255,255,1)",
    // marginBottom: "2rem",
    marginTop: "-12%",
    width: "25vw",
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
        boxShadow: "0px 9px 40px rgba(0,0,0,0.1)",
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
    marginTop: "4rem",
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
    marginTop: "4vh",
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
    width: "85vw",
    height: "75vh",
    display: "flex",
    marginTop: "2rem",
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
    overflow: "hidden",

    "&:hover $img_overlay": {
      opacity: "1",
      transition: "0.5s ease-in-out",
    },
    "&:hover $addtocart_btn": {
      opacity: 1,
      transition: "0.5s ease-in-out",
      top: "50%",
    },
    "&:hover $book_img": {
      transform: "scale(1.1)",
      transition: "0.5s ease-in-out",
    },
  },

  img_overlay: {
    position: "relative",
    content: '""',
    display: "block",
    position: "absolute",
    top: 0,
    left: 0,
    opacity: 0,
    height: "100%",
    width: "100%",
    background:
      "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%,rgba(50,50,50,0.8) 100%)",
    // },
  },
  addtocart_btn: {
    position: "absolute",
    top: "30%",
    opacity: 0,
    left: "18%",
  },
  book_img: {
    borderRadius: "13px 13px 0 0",
    width: "100%",
    position: "absolute",
    bottom: 0,
  },
  book_title: {
    fontFamily: "product-sans",
    textAlign: "center",
    padding: "0.1rem 1rem",
  },
  book_price: {
    fontFamily: "product-sans",
    textAlign: "center",
    fontWeight: "bold",
    padding: "0.5rem 1rem",
  },
  more_btn: {
    display: "flex",
    justifyContent: "center",
  },
});

export { useStyles };
