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
    height: "35vh",
  },
  mainheading: {
    display: "flex",
    justifyContent: "center",
    marginTop: "7vh",
    opacity: 0.8,
  },
  viewcart_container: {
    position: "fixed",
    top: "16%",
    right: "3%",
    // marginLeft: "90%",
  },
  header_viewcartbtn: {
    padding: "1rem 1rem ",
    borderRadius: "9px",
    transition: "0.4s ease-in-out",
    "&:hover": {
      backgroundColor: "white",
      boxShadow: "0px 9px 40px rgba(0,0,0,0.03)",
    },
    "&:hover $header_viewcartIcon": {
      transition: "0.4s ease-in-out",
      color: "black",
    },
  },
  header_viewcartIcon: {
    marginRight: "0.7rem",
  },
  cart_cont: {
    position: "fixed",
    backgroundColor: "rgba(255,255,255,0.8)",
    height: "87vh",
    width: "20vw",
    right: 0,
    zIndex: "30",
    boxShadow: "0px 9px 40px rgba(0,0,0,0.09)",
    backdropFilter: "blur(5px)",
  },
  cart_heading: {
    display: "flex",
    width: "100%",
    marginTop: "1.5rem",
    justifyContent: "center",
  },
  cart_closeWindowBtn: {
    position: "absolute",
    left: "85%",
  },
  cart_items: {
    display: "flex",
    justifyContent: "center",
    borderRadius: "13px",
    width: "100%",
    height: "65vh",
    marginBottom: 0,
    marginTop: "2rem",
    overflowY: "scroll",
    "&::-webkit-scrollbar": {
      width: "0em",
    },
  },
  cart_items_cont: {
    width: "18vw",
    borderRadius: "9px",
    boxShadow: "0px 9px 40px rgba(0,0,0,0.08)",
    backgroundColor: "white",
  },
  cartitem_img: {
    width: "2.5vw",
  },
  closeBtn_cont: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  cartitem_closeBtn: {
    opacity: 0.7,
    "&:hover": {
      cursor: "pointer",
    },
  },
  cartitem_title_cont: {
    padding: "0.5rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  // cartitem_title: {},
  cartitem_price: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  cartItem_main_cont: {
    backgroundColor: "white",
    padding: "1rem 0.5rem",
    // marginBottom: "1rem",
    boxShadow: "0px 9px 40px rgba(0,0,0,0.05)",
    height: "11vh",
  },
  emptymessage_cont: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    width: "100%",
  },
  emptymessage: {},
  checkout_btn_cont: {
    marginBottom: "1rem",
    // marginTop: "1rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  checkout_btn: {
    fontWeight: "bold",
    fontSize: "1.1em",
    color: "white",
    borderRadius: "5px",
    backgroundColor: "#FF4444",
    padding: "0.6rem 4rem",
    "&:hover": {
      backgroundColor: "#ff0008",
      cursor: "pointer",
    },
  },
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
    left: "33%",
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

  // cartItem_cont: {
  //   height: "20%",
  // },
});

export { useStyles };
