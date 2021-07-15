import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "../Articles_styles";
import Heading from "../../Common_Layout/Typography/Heading";
import TopicOptions from "./TopicOptions.component";
import ArticleTypeCheckbox from "./ArticleTypeCheckbox.component";
import { useSelector } from "react-redux";
import WriteArticle from "./WriteArticle.component";

function SelectTopic() {
  const classes = useStyles();
  const isVerifiedChecked = useSelector(
    (state) => state.article.isVerifiedChecked,
  );
  const articles = useSelector((state) => state.article.articlesData);
  console.log(articles);
  const filteredArticles = articles.filter((item) => {
    if (isVerifiedChecked) {
      return item.isVerified === true;
    }
    if (!isVerifiedChecked) {
      return item.isVerified === false;
    }
  });

  return (
    <Fragment>
      <Grid item md={5} className={classes.selecttopic_cont}>
        <div className={classes.selecttopic}>
          <div className={classes.heading}>
            <Heading text="Select your topic" fontsize="4rem" />
          </div>
          <ArticleTypeCheckbox />
          <WriteArticle />
          <div className={classes.topicoptions_cont}>
            {filteredArticles.map((item) => {
              return (
                <TopicOptions
                  key={item._id}
                  id={item._id}
                  title={item.article.title}
                  author={item.author}
                  profileUrl={item.authorUrl}
                />
              );
            })}
          </div>
        </div>
      </Grid>
    </Fragment>
  );
}

export default SelectTopic;
