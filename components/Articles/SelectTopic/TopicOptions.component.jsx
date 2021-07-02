import React, { Fragment, useRef } from "react";
import { useStyles } from "../Articles_styles";
import { articleSlice_Actions } from "../../../store/articlesSlice";
import { useDispatch } from "react-redux";
import DeleteIcon from "@material-ui/icons/Delete";

function TopicOptions({
  id,
  title,
  author,
  profileUrl = "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
}) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const idRef = useRef();
  const deleteHandler = (e) => {
    e.preventDefault();
    dispatch(articleSlice_Actions.setDeleteItem(idRef.current.id));
    dispatch(articleSlice_Actions.toggleIsDeleteClicked());
  };

  const handleClick = () => {
    dispatch(articleSlice_Actions.setTopicIdSelected(idRef.current.id));
  };

  return (
    <Fragment>
      <div onClick={handleClick} ref={idRef} id={id}>
        <div className={classes.topic_options}>
          <div className={classes.options_title}>{title}</div>
          <div
            type="submit"
            onClick={deleteHandler}
            className={classes.deletebutton}
          >
            <DeleteIcon />
          </div>
          <div>
            <img className={classes.authorimage} src={profileUrl} />
            <span className={classes.author}>Author: {author}</span>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default TopicOptions;
