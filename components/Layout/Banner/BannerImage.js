import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  homepageimage: {
    width: "31vw",
    ["@media (max-width:1280px)"]: {
      width: "90vw",
    },
  },
});

function BannerImage({ url }) {
  const classes = useStyles();
  return (
    <div>
      <img src={url} className={classes.homepageimage} />
    </div>
  );
}

export default BannerImage;
