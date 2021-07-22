import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(
  {
    productpage_maincont: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "87vh",
      backgroundColor: "#f6f6f7",
    },
    productpage_cont: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "5rem 6rem 5rem 6rem",
      position: "relative",
      backgroundColor: "white",
      height: "80vh",
      width: "80vw",
      borderRadius: "13px",
      boxShadow: "0px 9px 40px rgba(0,0,0,0.08)",
      overflow: "scroll",
      "&::-webkit-scrollbar": {
        width: "1em",
      },

      ["@media (max-width:900px)"]: {
        padding: "5rem 1rem 5rem 1rem",
        width: "100%",
      },
    },

    img_cont: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100%",
      ["@media (max-width:900px)"]: {
        height: "40%",
        marginTop: "3rem",
      },
    },
    img_subcontainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    img: {
      ["@media (max-width:900px)"]: {
        width: "50%",
      },
    },
    backbtn_cont: {
      ["@media (max-width:900px)"]: {
        width: "100%",
      },
    },
    back_btn: {
      position: "absolute",
      left: "4%",
      top: "7%",
    },
    product_desc_cont: {
      height: "50vh",
      display: "flex",
      flexDirection: "column",
      ["@media (max-width:900px)"]: {
        marginTop: "3rem",
        alignItems: "center",
      },
      // alignItems: "center",
      // justifyContent: "center",
    },
    product_desc: {
      // width: "85%",
      textAlign: "justify",
      lineHeight: "1.7em",
      fontSize: "1em",
      // alignItems: "center",
    },
    title: {
      marginBottom: "2rem",
      maxWidth: "35vw",
      ["@media (max-width:900px)"]: {
        fontSize: "1rem",
        maxWidth: "100%",
      },
    },
    description_txt: {
      height: "20vh",
      maxWidth: "35vw",
      overflowY: "scroll",
      marginBottom: "1rem",
      "&::-webkit-scrollbar": {
        width: "1em",
      },
      ["@media (max-width:900px)"]: {
        maxWidth: "100%",
      },
    },
    price_cont: {
      ["@media (max-width:900px)"]: {
        display: "flex",
        width: "100%",
        justifyContent: "center",
        flexDirection: "column",
      },
    },
    price: {
      marginBottom: "0.75rem",
      ["@media (max-width:900px)"]: {
        display: "flex",
        justifyContent: "center",
      },

      // display: "flex",
      // textAlign: "center",
      // fontWeight: "bold",
    },
    //   buttons_cont: {
    //   },
    addtocartBtn: {
      ["@media (max-width:900px)"]: {
        display: "flex",
        justifyContent: "center",
      },
      width: "100%",
      marginTop: "1rem",
    },
    additems_cont_main: {
      position: "relative",
      marginBottom: "1rem",
    },
    additems_cont: {
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "0.5rem 0.5rem",
      boxShadow: "0px 9px 40px rgba(0,0,0,0.08)",
      backgroundColor: "white",
      borderRadius: "9px",
      marginTop: "1rem",
      // border: "1px solid rgba(0,0,0,0.5)",
      // display: "flex",
      // justifyContent: "center",
      // alignItems: "center",
      // height: "5vh",
      // backgroundColor: "grey",
    },

    viewcart_btn: {
      // display: "flex",
      // justifyContent: "center",
      marginTop: "0.9rem",
      ["@media (max-width:900px)"]: {
        display: "flex",
        justifyContent: "center",
        width: "100%",
      },
      // marginLeft: "0.5rem",
      // justifyContent: "center",
    },
    counter: {
      fontWeight: "bold",
      fontSize: "1.2em",
    },
    error_message: {
      // color: "red",
      position: "absolute",
      right: "12%",
      top: "20%",
      padding: "0.7rem 1rem",
      fontWeight: "bold",
      backgroundColor: "white",
      borderRadius: "13px",
      zIndex: "10",
      boxShadow: "0px 9px 40px rgba(0,0,0,0.08)",
      ["@media (max-width:900px)"]: {
        top: "10vh",
        right: 0,
      },
    },
  },
  { index: 1 },
);

export { useStyles };
