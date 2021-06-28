import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "../Articles_styles";
import Heading from "../../Common_Layout/Typography/Heading";
import TopicOptions from "./TopicOptions.component";

function SelectTopic({ articles, handleClick, idRef }) {
  const classes = useStyles();

  return (
    <Fragment>
      <Grid item md={5} className={classes.selecttopic_cont}>
        <div className={classes.selecttopic}>
          <div className={classes.heading}>
            <Heading text="Select your topic" fontsize="4rem" />
          </div>
          <div className={classes.topicoptions_cont}>
            {articles.map((item) => {
              return (
                <TopicOptions
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  author={item.author}
                  profileUrl={item.profileUrl}
                />
              );
            })}
          </div>
        </div>
      </Grid>
    </Fragment>
  );
}

export default SelectTopic;
