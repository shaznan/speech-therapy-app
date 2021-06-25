import React, { Fragment } from "react";
import { useStyles } from "../Articles_styles";

function TopicOptions({
  title,
  author,
  imageUrl = "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
}) {
  const classes = useStyles();
  return (
    <Fragment>
      <div className={classes.topic_options}>
        <div className={classes.options_title}>{title}</div>
        <div>
          <img className={classes.authorimage} src={imageUrl} />
          <span className={classes.author}>Author: {author}</span>
        </div>
      </div>
    </Fragment>
  );
}

export default TopicOptions;
