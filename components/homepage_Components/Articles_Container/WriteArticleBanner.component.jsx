import React from "react";
import { Fragment } from "react";
import { useStyles } from "../homepage_styles";
import Button from "@material-ui/core/Button";
import Slide from "react-reveal/Slide";
import Link from "next/link";

function WriteArticleBanner() {
  const classes = useStyles();

  return (
    <Fragment>
      <Slide duration={1000} bottom>
        <div className={classes.writearticleBanner}>
          <div className={classes.bannertxt}>
            Want to share your experience?
          </div>
          <div>
            <Link href="/articles" passHref>
              <Button className={classes.bannerbtn}>Write An Article</Button>
            </Link>
          </div>
        </div>
      </Slide>
    </Fragment>
  );
}

export default WriteArticleBanner;
