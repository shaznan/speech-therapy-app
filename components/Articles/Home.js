import React from "react";
import { Fragment } from "react";
import { useSelector } from "react-redux";

function Home({ children }) {
  const showArticleForm = useSelector((state) => state.article.showArticleForm);

  return <Fragment>{!showArticleForm && children}</Fragment>;
}

export default Home;
