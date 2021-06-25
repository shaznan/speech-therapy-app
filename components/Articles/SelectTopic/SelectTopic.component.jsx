import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "../Articles_styles";
import Heading from "../../Common_Layout/Typography/Heading";
import TopicOptions from "./TopicOptions.component";

function SelectTopic() {
  const classes = useStyles();
  return (
    <Fragment>
      <Grid item md={5} className={classes.selecttopic_cont}>
        <div className={classes.selecttopic}>
          <div className={classes.heading}>
            <Heading text="Select your topic" fontsize="4rem" />
          </div>
          <TopicOptions
            title="What is brain fog?"
            author="shaznan"
            imageUrl="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          />
          <TopicOptions
            title="What is brain fog?"
            author="shaznan"
            // imageUrl="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          />
          <TopicOptions
            title="What is brain fog?"
            author="shaznan"
            // imageUrl="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          />
          <TopicOptions
            title="What is brain fog?"
            author="shaznan"
            // imageUrl="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          />
          <TopicOptions
            title="What is brain fog?"
            author="shaznan"
            // imageUrl="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          />
          <TopicOptions
            title="What is brain fog?"
            author="shaznan"
            // imageUrl="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          />
        </div>
      </Grid>
    </Fragment>
  );
}

export default SelectTopic;
