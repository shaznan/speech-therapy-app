import React, { Fragment, useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "../Articles_styles";
import { useSelector } from "react-redux";

function DisplayArea({ articles }) {
  const [selectedTopic, setSelectedTopic] = useState({
    id: 5678,
    title: "what is brain fog",
    author: "shaznan",
    profileUrl:
      "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    content: {
      coverImgUrl:
        "https://images.unsplash.com/photo-1624470807069-496787340a7b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      textbody:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    },
  });
  const classes = useStyles();
  const topicIdSelected = useSelector((state) => state.article.topicIdSelected);

  useEffect(() => {
    if (topicIdSelected === null) return;
    setSelectedTopic(
      articles.find((item) => {
        return item.id === +topicIdSelected;
      })
    );
  }, [topicIdSelected]);

  return (
    <Fragment>
      <Grid className={classes.displayarea_cont} item md={7}>
        <div className={classes.displayarea}>
          <img
            className={classes.coverimage}
            src={selectedTopic.content.coverImgUrl}
          />
          <div className={classes.displayarea_body}>
            <h1 className={classes.displayarea_heading}>
              {selectedTopic.title}
            </h1>
            <div className={classes.linedivider}></div>
            <p className={classes.displayarea_paragraph}>
              {selectedTopic.content.textbody}
            </p>
            <footer>
              <div className={classes.footerlinedivider}></div>
              <Grid container>
                <Grid
                  item
                  md={10}
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <img
                    className={`${classes.authorimage} ${classes.footer_authorimg}`}
                    src={selectedTopic.profileUrl}
                  />
                </Grid>
                <Grid item md={2} className={classes.footertext}>
                  {selectedTopic.author}
                </Grid>
              </Grid>
            </footer>
          </div>
        </div>
      </Grid>
    </Fragment>
  );
}

export default DisplayArea;
