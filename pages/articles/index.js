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
import { fetchArticleData } from "../../store/articlesSlice";

function ArticlesPage(props) {
  const dispatch = useDispatch();
  const articleData = props.articles;
  dispatch(articleSlice_Actions.setArticles(props.articles));
  console.log(articleData);
  const classes = useStyles();
  const showArticleForm = useSelector((state) => state.article.showArticleForm);
  const isFormSubmit = useSelector((state) => state.article.isFormSubmit);
  const [hydrateWithLocalStorage] = useHydrateState();
  useEffect(() => {
    hydrateWithLocalStorage();
  }, []);

  //if user submits writearticle form, fetch updated article data
  useEffect(() => {
    isFormSubmit && dispatch(fetchArticleData());
  }, [isFormSubmit]);

  return (
    <Fragment>
      <div className={classes.container}>
        <Navbar />
        <Grid container className={classes.body}>
          {!showArticleForm && <SelectTopic />}
          {!showArticleForm && <DisplayArea />}
          <DeleteItemModal />
          {showArticleForm && <ArticleForm />}
        </Grid>
      </div>
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
    // props: { articleData: JSON.stringify(Articles) },
    props: {
      articles: Articles.map((article) => ({
        article: article.article,
        author: article.author,
        authorUrl: article.authorUrl,
        isVerified: article.isVerified,
        _id: article._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

export default ArticlesPage;
