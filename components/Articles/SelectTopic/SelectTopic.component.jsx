import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "../Articles_styles";
import Heading from "../../Common_Layout/Typography/Heading";
import TopicOptions from "./TopicOptions.component";
import ArticleTypeCheckbox from "./ArticleTypeCheckbox.component";
import { useSelector } from "react-redux";
import WriteArticle from "./WriteArticle.component";
import { useState } from "react";
import { useEffect } from "react";
import Fade from "react-reveal/Fade";

function SelectTopic() {
  const classes = useStyles();
  const [filteredArticles, setFilteredArticles] = useState(null);
  const isVerifiedChecked = useSelector(
    (state) => state.article.isVerifiedChecked,
  );
  const articles = useSelector((state) => state.article.articlesData);

  //filter articles based on selected option
  useEffect(() => {
    if (!articles) return;
    const filterArticles = articles.filter((item) => {
      return isVerifiedChecked
        ? item.isVerified === true
        : item.isVerified === false;
    });
    setFilteredArticles(filterArticles);
  }, [articles, isVerifiedChecked]);

  return (
    <Fragment>
      <Grid item md={5} sm={12} className={classes.selecttopic_cont}>
        <Fade duration={500}>
          <div className={classes.selecttopic}>
            <div className={classes.heading}>
              <Heading text="Select your topic" fontsize="4rem" />
            </div>
            <ArticleTypeCheckbox />
            <WriteArticle />
            <div className={classes.topicoptions_cont}>
              {filteredArticles &&
                filteredArticles.map((item) => {
                  return (
                    <TopicOptions
                      key={item._id}
                      id={item._id}
                      title={item.article.title}
                      author={item.author}
                      profileUrl={item.authorUrl}
                      authorEmail={item.authorEmail}
                    />
                  );
                })}
            </div>
          </div>
        </Fade>
      </Grid>
    </Fragment>
  );
}

export default SelectTopic;
