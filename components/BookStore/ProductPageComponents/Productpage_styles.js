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
      borderRadius: "39px",
      boxShadow: "0px 9px 40px rgba(0,0,0,0.08)",
    },
    img_cont: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100%",
    },
    product_desc_cont: {
      display: "flex",
      flexDirection: "column",
      height: "50vh",
      // alignItems: "center",
      // justifyContent: "center",
    },
    back_btn: {
      position: "absolute",
      left: "4%",
      top: "7%",
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
      // paddingTop: "2rem",
    },
    description_txt: {
      height: "20vh",
      maxWidth: "35vw",
      overflowY: "scroll",
      marginBottom: "1rem",
      "&::-webkit-scrollbar": {
        width: "1em",
      },
    },
    price: {
      marginBottom: "0.75rem",
      // textAlign: "center",
      // fontWeight: "bold",
    },
    //   buttons_cont: {
    //   },
    addtocartBtn: {
      // display: "flex",
      // justifyContent: "center",
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
      display: "flex",
      marginTop: "0.9rem",
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
      boxShadow: "0px 9px 40px rgba(0,0,0,0.08)",
    },
  },
  { index: 1 },
);

export { useStyles };
