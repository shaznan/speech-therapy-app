import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { articleSlice_Actions } from "../../../store/articlesSlice";
import { fetchArticleData } from "../../../store/articlesSlice";

function useStoreArticleFormData() {
  const formTitle = useSelector((state) => state.article.articleForm.formTitle);
  const formCoverImg = useSelector(
    (state) => state.article.articleForm.formCoverImg,
  );
  const [isVerified, setIsVerified] = useState(false);
  const dispatch = useDispatch();
  const contentBody = useSelector(
    (state) => state.article.articleForm.contentBody,
  );
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const userRole = useSelector((state) => state.user.entities[0].userRole);
  const isFormSubmit = useSelector((state) => state.article.isFormSubmit);
  const nickName = useSelector((state) => state.user.entities[0].nickName);
  const avatar = useSelector((state) => state.user.entities[0].avatarUrl);
  const email = useSelector((state) => state.user.entities[0].email);

  useEffect(() => {
    if (userRole === "Admin") {
      setIsVerified(true);
    } else {
      setIsVerified(false);
    }
  }, [userRole]);

  useEffect(() => {
    if (isLoggedIn && isFormSubmit) {
      axios
        .post("/api/Article/StoreArticleData", {
          isVerified: isVerified,
          author: nickName,
          authorEmail: email,
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
          dispatch(fetchArticleData());
        })
        .catch((err) => console.error(err));
    }
  }, [isLoggedIn, isFormSubmit]);
}

export default useStoreArticleFormData;
