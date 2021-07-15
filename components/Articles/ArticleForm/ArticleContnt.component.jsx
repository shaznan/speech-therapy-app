import dynamic from "next/dynamic";
import { useStyles } from "./ArticleForm_styles";
import draftToHtml from "draftjs-to-html";
import { useSelector, useDispatch } from "react-redux";
import { articleSlice_Actions } from "../../../store/articlesSlice";

// //Render import only on client side
const Editor = dynamic(
  () => {
    return import("react-draft-wysiwyg").then((mod) => mod.Editor);
  },
  { ssr: false },
);

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import React from "react";

function ArticleContnt() {
  const classes = useStyles();
  const articleContentBody = useSelector(
    (state) => state.article.articleForm.contentBody,
  );
  const dispatch = useDispatch();

  const onContentStateChange = (contentState) => {
    dispatch(articleSlice_Actions.setArticleContentBody(contentState));
  };

  return (
    <div>
      <Editor
        onContentStateChange={onContentStateChange}
        toolbarClassName={classes.toolbarClass}
        wrapperClassName={classes.wrapperClass}
        editorClassName={classes.editorClass}
        className={classes.editor_container}
      />
    </div>
  );
}

export default ArticleContnt;
