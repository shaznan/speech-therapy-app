import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fade from "react-reveal/Fade";

const useStyles = makeStyles(
  {
    largeimage: {
      width: "31vw",
      ["@media (max-width:1280px)"]: {
        width: "90vw",
      },
    },
    mediumimage: {
      width: "25vw",
      ["@media (max-width:1280px)"]: {
        width: "90vw",
      },
    },
  },
  { index: 1 },
);

function BannerImage({ url, size = "large" }) {
  const classes = useStyles();
  return (
    <div>
      <Fade duration={1000}>
        <img
          src={url}
          className={
            size === "large"
              ? classes.largeimage
              : size === "medium"
              ? classes.mediumimage
              : null
          }
        />
      </Fade>
    </div>
  );
}

export default BannerImage;
