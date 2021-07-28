import React, { useEffect } from "react";
import Navbar from "../../components/Common_Layout/Navbar/Navbar";
import { useStyles } from "../../components/Articles/Articles_styles";
import { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import SelectTopic from "../../components/Articles/SelectTopic/SelectTopic.component";
import DisplayArea from "../../components/Articles/DisplayArea/DisplayArea.component";
import { useSelector, useDispatch } from "react-redux";
import ArticleForm from "../../components/Articles/ArticleForm/ArticleForm";
import { MongoClient } from "mongodb";
import DeleteItemModal from "../../components/Articles/DeleteItemModal/DeleteItemModal";
import useHydrateState from "../../components/useHydrateState";
import { articleSlice_Actions } from "../../store/articlesSlice";
import LoadSpinner from "../../components/Common_Layout/loadspinner/loadSpinner";
import AdminToolbar from "../../components/Common_Layout/AdminToolbar/AdminToolbar";
import Footer from "../../components/Common_Layout/Footer/Footer.component";
import ErrorModal from "../../components/Common_Layout/Modal/ErrorModal";
import Home from "../../components/Articles/Home";

function ArticlesPage(props) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const showArticleForm = useSelector((state) => state.article.showArticleForm);
  const loading = useSelector((state) => state.article.loading);
  const [hydrateWithLocalStorage] = useHydrateState();
  const isArticleError = useSelector((state) => state.article.isArticleError);
  const articleErrMsg = useSelector((state) => state.article.articleErrMsg);

  useEffect(() => {
    hydrateWithLocalStorage();
  }, []);

  useEffect(() => {
    dispatch(articleSlice_Actions.setArticles(props.articles));
  }, []);

  const clearErrorMsg = () => {
    dispatch(articleSlice_Actions.clearError());
  };

  return (
    <Fragment>
      <div className={classes.container}>
        <Navbar />
        <AdminToolbar />
        <LoadSpinner loading={loading} />
        <ErrorModal
          isError={isArticleError}
          errorMsg={articleErrMsg}
          dispatchFunc={clearErrorMsg}
        />
        <Grid container className={classes.body}>
          <Home>
            <SelectTopic />
            <DisplayArea />
          </Home>
          <DeleteItemModal />
          {showArticleForm && <ArticleForm />}
        </Grid>
      </div>
      <Footer />
    </Fragment>
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

export default ArticlesPage;
