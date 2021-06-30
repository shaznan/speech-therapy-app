// import { EditorState } from "draft-js";
import dynamic from "next/dynamic";
import { useStyles } from "./ArticleForm_styles";

//Render import only on client side
const Editor = dynamic(
  () => {
    return import("react-draft-wysiwyg").then((mod) => mod.Editor);
  },
  { ssr: false }
);
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import React, { useState } from "react";

function ArticleContnt() {
  const classes = useStyles();
  const [editorState, setEditorState] = useState(null);
  const handleEditorStateChange = (contentState) => {
    setEditorState(contentState);
  };

  //implement editor toolbar and content area
  return (
    <div>
      <Editor
        editorState={editorState}
        toolbarClassName={classes.toolbarClass}
        wrapperClassName={classes.wrapperClass}
        editorClassName={classes.editorClass}
        className={classes.editor_container}
        onEditorStateChange={handleEditorStateChange}
      />
    </div>
  );
}

export default ArticleContnt;
