import React, { useEffect } from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "../../Common_Layout/Button/Button";
import { useStyles } from "./DeleteItemModal_Styles";
import { useSelector, useDispatch } from "react-redux";
import { articleSlice_Actions } from "../../../store/articlesSlice";
import { deleteArticleItem } from "../../../store/articlesSlice";
import axios from "axios";
import { fetchArticleData } from "../../../store/articlesSlice";

export default function DeleteItemModal() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const isDeleteClicked = useSelector((state) => state.article.isDeleteClicked);
  const deleteItemId = useSelector((state) => state.article.deleteItemId);
  const isArticleDeleted = useSelector(
    (state) => state.article.isArticleDeleted,
  );

  //open delete modal window when delete btn clicked
  useEffect(() => {
    isDeleteClicked ? setOpen(true) : setOpen(false);
  }, [isDeleteClicked]);

  const handleClose = () => {
    dispatch(articleSlice_Actions.toggleIsDeleteClicked());
    setOpen(false);
  };

  const handleBackBtn = () => {
    dispatch(articleSlice_Actions.toggleIsDeleteClicked());
    setOpen(false);
  };

  const handleDeleteArticle = () => {
    dispatch(deleteArticleItem(deleteItemId));
    setOpen(false);
  };

  //populate store with updated article data once item is deleted
  useEffect(() => {
    isArticleDeleted && dispatch(fetchArticleData());
  }, [isArticleDeleted]);

  return (
    <div>
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}>
        <Fade in={open}>
          <div className={classes.background}>
            <h2 id="transition-modal-title">
              Are you sure you want to permanently remove this article?
            </h2>
            <div className={classes.deletebtn_cont}>
              <Button
                type="back"
                text="Cancel"
                onClickHandler={handleBackBtn}
              />
              <Button
                type="primary"
                text="Yes, Go Ahead"
                onClickHandler={handleDeleteArticle}
              />
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
