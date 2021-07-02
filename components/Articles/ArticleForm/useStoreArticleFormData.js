import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { articleSlice_Actions } from "../../../store/articlesSlice";

function useStoreArticleFormData() {
  const formTitle = useSelector((state) => state.article.articleForm.formTitle);
  const formCoverImg = useSelector(
    (state) => state.article.articleForm.formCoverImg
  );
  const dispatch = useDispatch();
  const contentBody = useSelector(
    (state) => state.article.articleForm.contentBody
  );
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const isFormSubmit = useSelector((state) => state.article.isFormSubmit);
  const nickName = useSelector((state) => state.user.entities[0].nickName);
  const avatar = useSelector((state) => state.user.entities[0].avatarUrl);
  const isVerified = useSelector(
    (state) => state.article.articleForm.isVerified
  );

  useEffect(() => {
    if (isLoggedIn && isFormSubmit) {
      axios
        .post("/api/Article/StoreArticleData", {
          isVerified: isVerified,
          author: nickName,
          authorUrl: avatar,
          article: {
            title: formTitle,
            coverImg: formCoverImg,
            body: contentBody,
          },
        })
        .then((res) => {
          dispatch(articleSlice_Actions.toggleShowArticleForm());
          dispatch(articleSlice_Actions.setIsFormSubmit(false));
        })
        .catch((err) => console.error(err));
    }
  }, [isLoggedIn, isFormSubmit]);
}

export default useStoreArticleFormData;
