import React, { Fragment, useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "../Articles_styles";
import { useSelector } from "react-redux";
import draftToHtml from "draftjs-to-html";

function DisplayArea({ articles }) {
  const [selectedTopic, setSelectedTopic] = useState(articles[0]);
  const classes = useStyles();
  const topicIdSelected = useSelector((state) => state.article.topicIdSelected);

  useEffect(() => {
    if (topicIdSelected === null) return;
    setSelectedTopic(
      articles.find((item) => {
        return item._id === topicIdSelected;
      })
    );
  }, [topicIdSelected]);

  return (
    <Fragment>
      <Grid className={classes.displayarea_cont} item md={7}>
        <div className={classes.displayarea}>
          <div className={classes.coverimgcontainer}>
            <img
              className={classes.coverimage}
              src={selectedTopic.article.coverImg}
            />
          </div>
          <div className={classes.displayarea_body}>
            <h1 className={classes.displayarea_heading}>
              {selectedTopic.article.title}
            </h1>
            <div className={classes.linedivider}></div>
            <div
              className={classes.displayarea_paragraph}
              dangerouslySetInnerHTML={{
                __html: draftToHtml(selectedTopic.article.body),
              }}
            ></div>
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
                    src={selectedTopic.authorUrl}
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
