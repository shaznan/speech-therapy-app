import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "../homepage_styles";
import { Fragment } from "react";
import Card from "../Articles_Container/Card.component";
import { fetchArticleData } from "../../../store/articlesSlice";
import { useDispatch, useSelector } from "react-redux";

function Articles_container() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [verifiedArticles, setVerifiedArticles] = useState(null);
  const articlesData = useSelector((state) => state.article.articlesData);

  useEffect(() => {
    dispatch(fetchArticleData());
  }, []);

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
      <container className={classes.articles_MainContainer}>
        <Grid container spacing={8} className={classes.articles_cardContainer}>
          {verifiedArticles &&
            verifiedArticles.map((articleData, i) => {
              if (i > 2) return;
              return (
                <Grid item lg={3} md={12}>
                  <Card
                    key={articleData._id}
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
        </Grid>
      </container>
    </Fragment>
  );
}

export default Articles_container;
