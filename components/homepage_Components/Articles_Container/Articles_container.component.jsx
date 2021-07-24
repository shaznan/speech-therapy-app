import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "../homepage_styles";
import { Fragment } from "react";
import Card from "../Articles_Container/Card.component";
import { useSelector } from "react-redux";
import WriteArticleBanner from "./WriteArticleBanner.component";

function Articles_container() {
  const classes = useStyles();
  const [verifiedArticles, setVerifiedArticles] = useState(null);
  const articlesData = useSelector((state) => state.article.articlesData);

  //filter verified articles only
  useEffect(() => {
    if (!articlesData) return;
    setVerifiedArticles(
      articlesData.filter((articleData) => {
        return articleData.isVerified === true;
      }),
    );
  }, [articlesData]);

  return (
    <Fragment>
      <div className={classes.articles_MainContainer}>
        <Grid container spacing={8} className={classes.articles_cardContainer}>
          {/* return only first 3 verified article data and render as card */}
          {verifiedArticles &&
            verifiedArticles.map((articleData, i) => {
              if (i > 2) return;
              return (
                <Grid key={articleData._id} item lg={3} md={12}>
                  <Card
                    title={articleData.article.title}
                    body={`${articleData.article.body.blocks[0].text.slice(
                      0,
                      85,
                    )}...`}
                    imgsrc={articleData.article.coverImg}
                    id={articleData._id}
                  />
                </Grid>
              );
            })}
          <Grid item sm={12} lg={12}>
            <WriteArticleBanner />
          </Grid>
        </Grid>
      </div>
    </Fragment>
  );
}

export default Articles_container;
