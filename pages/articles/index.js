import React from "react";
import Navbar from "../../components/Common_Layout/Navbar/Navbar";
import { useStyles } from "../../components/Articles/Articles_styles";
import { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import SelectTopic from "../../components/Articles/SelectTopic/SelectTopic.component";
import DisplayArea from "../../components/Articles/DisplayArea/DisplayArea.component";
// import { v4 as uuidv4 } from "uuid";

function ArticlesPage() {
  const classes = useStyles();
  const articles = [
    {
      id: 1234,
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
    },
    {
      id: 5678,
      title: "How to avoid Brain fog",
      author: "Abdullah",
      profileUrl:
        "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      content: {
        coverImgUrl:
          "https://images.unsplash.com/photo-1624695174414-8256d37de927?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80",
        textbody:
          "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
      },
    },
  ];

  return (
    <Fragment>
      <div className={classes.container}>
        <Navbar />
        <Grid container className={classes.body}>
          <SelectTopic articles={articles} />
          <DisplayArea articles={articles} />
        </Grid>
      </div>
    </Fragment>
  );
}

export default ArticlesPage;
