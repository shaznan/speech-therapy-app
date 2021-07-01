import React from "react";
import Navbar from "../../components/Common_Layout/Navbar/Navbar";
import { useStyles } from "../../components/Articles/Articles_styles";
import { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import SelectTopic from "../../components/Articles/SelectTopic/SelectTopic.component";
import DisplayArea from "../../components/Articles/DisplayArea/DisplayArea.component";
import { useSelector } from "react-redux";
import ArticleForm from "../../components/Articles/ArticleForm/ArticleForm";
import { MongoClient } from "mongodb";

function ArticlesPage(props) {
  const articleData = JSON.parse(props.articleData);
  const classes = useStyles();
  const showArticleForm = useSelector((state) => state.article.showArticleForm);

  return (
    <Fragment>
      <div className={classes.container}>
        <Navbar />
        <Grid container className={classes.body}>
          {!showArticleForm && <SelectTopic articles={articleData} />}
          {!showArticleForm && <DisplayArea articles={articleData} />}
          {showArticleForm && <ArticleForm />}
        </Grid>
      </div>
    </Fragment>
  );
}

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://shaznan:j77hFjvqaRPiva-@speech-therapy-app.mb1pc.mongodb.net/Article?retryWrites=true&w=majority"
  );
  const db = client.db();
  const ArticlesCollection = db.collection("Articles");
  const Articles = await ArticlesCollection.find({}).toArray();
  client.close();
  return {
    props: { articleData: JSON.stringify(Articles) },
    revalidate: 1,
  };
}

export default ArticlesPage;
