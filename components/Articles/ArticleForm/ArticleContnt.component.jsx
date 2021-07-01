// // import { EditorState } from "draft-js";
import dynamic from "next/dynamic";
import { useStyles } from "./ArticleForm_styles";
import { convertFromRaw, convertToRaw } from "draft-js";
import { EditorState } from "draft-js";
// import { stateToHTML } from "draft-js-export-html";
import draftToHtml from "draftjs-to-html";

import { useRef } from "react";

// //Render import only on client side
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
  const content = {
    entityMap: {},
    blocks: [
      {
        key: "637gr",
        text: "Initialized from content state.",
        type: "unstyled",
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
    ],
  };
  const [contentState, setContentState] = useState(content);
  //   const [rawState, setRawState] = useState(EditorState.createEmpty());

  const onContentStateChange = (contentState) => {
    console.log(contentState.blocks);
    setContentState(contentState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(stateToHTML(contentState));
    // setRawState(convertFromRaw(contentState));
  };

  return (
    <div>
      <Editor
        // EditorState={contentState}
        onContentStateChange={onContentStateChange}
        // onChange={onChange}
        toolbarClassName={classes.toolbarClass}
        wrapperClassName={classes.wrapperClass}
        editorClassName={classes.editorClass}
        className={classes.editor_container}
        // onEditorStateChange={onContentStateChange}
      />
      <div
        dangerouslySetInnerHTML={{ __html: draftToHtml(contentState) }}
      ></div>
      <button type="submit" onClick={handleSubmit}>
        submit
      </button>
    </div>
  );
}

export default ArticleContnt;
