import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { articleSlice_Actions } from "../../../store/articlesSlice";
import { useDispatch } from "react-redux";
import Zoom from "react-reveal/Zoom";
import Link from "next/link";

const useStyles = makeStyles(
  {
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
    CardContent: {
      height: "14vh",
      ["@media (max-width:800px)"]: {
        height: "20vh",
      },
    },
  },
  { index: 1 },
);

export default function MediaCard({ title, imgsrc, body, id }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleTopicSelected = (id) => {
    dispatch(articleSlice_Actions.setTopicIdSelected(id));
  };

  return (
    <Zoom duration={1000}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={imgsrc}
            title="Contemplative Reptile"
          />
          <CardContent className={classes.CardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {body}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link href="/articles">
            <Button
              onClick={() => {
                handleTopicSelected(id);
              }}
              size="small"
              color="primary">
              Read Article
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Zoom>
  );
}
