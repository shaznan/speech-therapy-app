import React, { Fragment, useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "../Articles_styles";
import { useSelector } from "react-redux";
import draftToHtml from "draftjs-to-html";
import Fade from "react-reveal/Fade";

function DisplayArea() {
  const articles = useSelector((state) => state.article.articlesData);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const classes = useStyles();
  const topicIdSelected = useSelector((state) => state.article.topicIdSelected);

  useEffect(() => {
    if (!topicIdSelected) return;
    setSelectedTopic(
      articles.find((item) => {
        return item._id === topicIdSelected;
      }),
    );
  }, [topicIdSelected]);

  return (
    <Fragment>
      {selectedTopic && (
        <Grid className={classes.displayarea_cont} item md={7} sm={12}>
          <Fade duration={1000} right>
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
                  }}></div>
                <footer>
                  <div className={classes.footerlinedivider}></div>
                  <Grid container>
                    <Grid
                      item
                      md={10}
                      style={{
                        display: "flex",
                        justifyContent: "flex-end",
                      }}>
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
          </Fade>
        </Grid>
      )}
    </Fragment>
  );
}

export default DisplayArea;
