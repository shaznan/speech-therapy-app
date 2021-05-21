import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
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
});

function BannerImage({ url, size = "large" }) {
  const classes = useStyles();
  return (
    <div>
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
    </div>
  );
}

export default BannerImage;
