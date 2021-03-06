import { makeStyles } from "@material-ui/core/styles";
import dashboardBg from "../../../../assets/images/dashboard_bg-01-01.png";

const useStyles = makeStyles(
  {
    container: {
      width: "100vw",
      height: "100vh",
      backgroundColor: "rgba(0,0,0,0.0)",
      zIndex: "550",
      // transform: "translateY(100vh)",
      opacity: "1",
      transition: "0.4s ease-in-out",
      backgroundColor: "rgba(0,0,0,0.5)",
      position: "absolute",
    },

    dashboard_cont: {
      backgroundImage: `url(${dashboardBg})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundSize: "120rem ",
      height: "92vh",
      width: "90vw",
      marginTop: "2rem",
      transform: "translateX(-1%)",
      zIndex: "550",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "13px",
      margin: "auto",
      padding: "3rem 10em",
      boxShadow: "0px 9px 40px rgba(0,0,0,0.08)",
      overflowY: "scroll",
      "&::-webkit-scrollbar": {
        width: "1em",
      },
      ["@media (max-width:960px)"]: {
        padding: "0px",
      },
    },

    benchmark_cont: {
      backgroundColor: "white",
      boxShadow: "0px 3px 29px rgba(0,0,0,0.05)",
      borderRadius: "10px",
      width: "22vw",
      marginRight: "3rem",
      height: "17.5rem",
      paddingRight: "1rem",
      overflowY: "scroll",
      "&::-webkit-scrollbar": {
        width: "1em",
      },
      "&::-webkit-scrollbar-track": {
        backgroundColor: "black",
        borderRadius: "10px",
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "rgb(255, 68,68)",
        borderRadius: "10px",
      },
      ["@media (max-width:960px)"]: {
        width: "80vw",
        marginRight: "0rem",
        paddingRight: "0rem",
      },
    },
    scorebenchmark_subcont: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    scorebenchmark_cont: {
      display: "flex",
      flexDirection: "row",
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      height: "23rem",
      borderRadius: "13px",
      background: "rgba(255,255,255,0.4)",
      border: "1px solid rgba(255,255,255,0.2)",
      ["@media (max-width:960px)"]: {
        paddingLeft: "0rem",
        height: "100%",
        width: "100%",
      },
      // backdropFilter: "blur(1px)",
    },
    subheading: {
      fontWeight: "bold",
      opacity: "0.8",
      padding: "0.8rem",
    },
    scorebody_cont: {
      textAlign: "center",
      ["@media (max-width:960px)"]: {
        width: "45%",
      },
    },
    scorebenchmark_heading: {
      marginLeft: "3rem",
      marginTop: "-1rem",
      ["@media (max-width:960px)"]: {
        marginLeft: 0,
        textAlign: "center",
      },
    },
    scoreitems: {
      padding: "0.6rem",
      backgroundColor: "rgb(249,249,249)",
      margin: "0.4rem 0rem",
    },

    highlightitem: {
      backgroundColor: "#fff1b3",
      margin: "0.4rem 0rem",
      padding: "0.6rem",
    },

    scoreitems_one: {
      borderRadius: "11px 0 0 11px",
      marginLeft: "1rem",
      position: "relative",
    },
    scoreitems_two: {
      borderRadius: " 0 11px 11px 0",
    },
    acheivement_img: {
      width: "1rem",
      position: "absolute",
      left: "1rem",
    },
    summary_cont: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      // backgroundColor: "white",
      boxShadow: "0px 9px 40px rgba(0,0,0,0.08)",
      width: "15rem",
      padding: "1rem 0 1rem 0rem",
      borderRadius: "13px",
      background: "rgba(255,255,255,0.4)",
      border: "1px solid rgba(255,255,255,0.2)",
      backdropFilter: "blur(5px)",
      ["@media (max-width:960px)"]: {
        width: "100vw",
        flexDirection: "row",
      },
    },
    score_label: {
      backgroundColor: "black",
      color: "#FFD728",
      fontWeight: "bold",
      textAlign: "center",
      width: "10rem",
      padding: "0.7rem",
      borderRadius: "10px 10px 0 0",
    },
    score_result: {
      backgroundColor: "white",
      color: "black",
      padding: "1rem",
      textAlign: "center",
      width: "10rem",
      fontSize: "1.3rem",
      fontWeight: "bold",
      borderRadius: "0 0 10px 10px",
    },
    summaryTab: {
      width: "10rem",
      marginTop: "1rem",
      marginBottom: "1rem",
      boxShadow: "0px 9px 40px rgba(0,0,0,0.1)",
      borderRadius: "0 0 10px 10px",
      ["@media (max-width:960px)"]: {
        transform: "scale(0.7)",
      },
    },
    graph_cont: {
      background: "rgba(255,255,255,0.4)",
      border: "1px solid rgba(255,255,255,0.2)",
      // backdropFilter: "blur(5px)",
      paddingBottom: "2rem",
      display: "flex",
      borderRadius: "13px",
      marginTop: "-20rem",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    graph: {
      width: "40rem",
      borderRadius: "10px",
      // height: "rem !important",
      backgroundColor: "white",
      ["@media (max-width:960px)"]: {
        height: "100%",
      },
    },
    errorMessage: {
      textAlign: "center",
      fontWeight: "bold",
      fontSize: "1.2rem",
      marginLeft: "auto",
      marginTop: "2rem",
    },
    errorimage: {
      width: "7rem",
      opacity: "0.5",
      marginTop: "1rem",
    },
  },
  { index: 1 },
);

export { useStyles };
