import React from "react";
import NoteAddOutlinedIcon from "@material-ui/icons/NoteAddOutlined";
import { useStyles } from "../Articles_styles";
import Button from "@material-ui/core/Button";
import { articleSlice_Actions } from "../../../store/articlesSlice";
import { useDispatch } from "react-redux";

function WriteArticle() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const onHandleClick = () => {
    dispatch(articleSlice_Actions.toggleShowArticleForm());
  };

  return (
    <div>
      <div className={classes.writearticle_cont}>
        <Button className={classes.writearticle_btn} onClick={onHandleClick}>
          <NoteAddOutlinedIcon className={classes.writearticle_icon} />
          Write an article
        </Button>
      </div>
    </div>
  );
}

export default WriteArticle;
