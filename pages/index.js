import React, { useEffect } from "react";
import { useStyles } from "../components/homepage_Components/homepage_styles";
import useHydrateState from "../components/useHydrateState";
import WelcomeMsg_Container from "../components/homepage_Components/WelcomeMsg_Container.component";
import Articles_container from "../components/homepage_Components/Articles_Container/Articles_container.component";
import { MongoClient } from "mongodb";
import { articleSlice_Actions } from "../store/articlesSlice";
import { useDispatch } from "react-redux";
import WhatBrainfogFeelsLike from "../components/homepage_Components/WhatBrainfogFeelsLike/WhatBrainfogFeelsLike.componrnt";
import WhySpeechTherapy from "../components/homepage_Components/WhySpeechTherapy/WhySpeechTherapy.component";
import Testimonials from "../components/homepage_Components/Testimonials/Testimonials.component";
import Footer from "../components/Common_Layout/Footer/Footer.component";
import Navbar from "../components/Common_Layout/Navbar/Navbar";

const Home = (props) => {
  const dispatch = useDispatch();
  const [hydrateWithLocalStorage] = useHydrateState();

  //avoid loosing user state on page refresh
  useEffect(() => {
    hydrateWithLocalStorage();
  }, []);

  //send page props to redux store
  useEffect(() => {
    dispatch(articleSlice_Actions.setArticles(props.articles));
  }, []);

  return (
    <div>
      <Navbar />
      <WelcomeMsg_Container />
      <Articles_container />
      <WhatBrainfogFeelsLike />
      <WhySpeechTherapy />
      <Testimonials />
      <Footer />
    </div>
  );
};

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
        _id: article._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

export default Home;
