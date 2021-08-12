import Grid from "@material-ui/core/Grid";
import { useStyles } from "../../components/AdminDashboard/AdminDashboard_styles";
import React, { useEffect, useState } from "react";
import Navigation from "../../components/AdminDashboard/Navigation.component";
import AdminPerformtes from "../../components/AdminDashboard/Admin_PerformTest/AdminPerformtest";
import AdminArticles from "../../components/AdminDashboard/Admin_Articles/AdminArticles";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import useVerifyUserAdmin from "../../components/AdminDashboard/useVerifyUserAdmin";
import { articleSlice_Actions } from "../../store/articlesSlice";
import { MongoClient } from "mongodb";

function HomePage(props) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [isAdmin, verifyAdmin] = useVerifyUserAdmin();
  const userRole = useSelector((state) => state.user.entities[0].userRole);

  useEffect(() => {
    dispatch(articleSlice_Actions.setArticles(props.articles));
  }, []);

  useEffect(() => {
    verifyAdmin();
  }, [userRole]);

  return (
    <div>
      {isAdmin && (
        <Grid container className={classes.mainContainer}>
          <Navigation />
          <Grid container className={classes.admin_body}>
            <AdminArticles />
          </Grid>
        </Grid>
      )}
    </div>
  );
}

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://shaznan:j77hFjvqaRPiva-@speech-therapy-app.mb1pc.mongodb.net/Article?retryWrites=true&w=majority",
    { useUnifiedTopology: true, useNewUrlParser: true },
  );
  const db = client.db();
  const ArticlesCollection = db.collection("Articles");
  const Articles = await ArticlesCollection.find({}).toArray();
  client.close();
  return {
    props: {
      articles: Articles.map((article) => ({
        article: article.article,
        author: article.author,
        authorEmail: article.authorEmail,
        authorUrl: article.authorUrl,
        isVerified: article.isVerified,
        articleId: article.articleId,
        _id: article._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

export default HomePage;
