import React from "react";
import { Fragment } from "react";
import { useStyles } from "../homepage_styles";
import Button from "@material-ui/core/Button";
import { useRouter } from "next/router";
import Slide from "react-reveal/Slide";

function WriteArticleBanner() {
  const router = useRouter();
  const classes = useStyles();
  const writeArticleHandler = () => {
    router.push("/articles", null, { shallow: true });
  };
  return (
    <Fragment>
      <Slide duration={1000} bottom>
        <div className={classes.writearticleBanner}>
          <div className={classes.bannertxt}>
            Want to share your experience?
          </div>
          <div>
            <Button onClick={writeArticleHandler} className={classes.bannerbtn}>
              Write An Article
            </Button>
          </div>
        </div>
      </Slide>
    </Fragment>
  );
}

export default WriteArticleBanner;
