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
  // const articles = [
  //   {
  //     id: 1234,
  //     isVerified: true,
  //     title: "what is brain fog",
  //     author: "shaznan",
  //     profileUrl:
  //       "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  //     content: {
  //       coverImgUrl:
  //         "https://images.unsplash.com/photo-1624470807069-496787340a7b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  //       textbody:
  //         "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
  //     },
  //   },
  // ];

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
  };
}

export default ArticlesPage;
