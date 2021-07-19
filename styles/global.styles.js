import { makeStyles } from "@material-ui/core/styles";
import bgImageOne from "../assets/images/bg_image_one_light.png";
import coverImage from "../assets/images/home_coverpage.jpg";

const useStyles = makeStyles(
  {
    "@global": {
      body: {
        backgroundColor: "#f6f6f7",
        fontFamily: "product-sans",
      },
    },

    maincontainer: {
      display: "flex",
      ["@media (max-width:1280px)"]: {
        flexDirection: "column-reverse",
      },
    },
    "@global": {
      "*::-webkit-scrollbar": {
        width: "0.2em",
        height: "0.2em",
      },
    },
  },
  { index: 1 },
);

export { useStyles };
