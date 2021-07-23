import React, { Fragment } from "react";
import VideoPlayerImage from "../../../assets/images/videowindow-01.png";
import Image from "next/image";
import { Grid } from "@material-ui/core";
import { useStyles } from "../homepage_styles";
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";
import Button from "@material-ui/core/Button";
import VideoIframe from "./VideoIframe.component";
import Zoom from "react-reveal/Zoom";

function VideoPlayer() {
  const classes = useStyles();
  const [play, setPlay] = React.useState(false);
  const setPlayHandler = (payload) => {
    setPlay(payload);
  };
  return (
    <Fragment>
      <Grid container spacing={0} className={classes.videoplayerImg_cont}>
        <Zoom>
          <img src={VideoPlayerImage} className={classes.videoplayerImg} />
        </Zoom>
        <Button
          onClick={() => setPlayHandler(true)}
          className={classes.player_iconbtm}>
          <PlayCircleFilledWhiteIcon className={classes.player_icon} />
        </Button>
      </Grid>
      <VideoIframe play={play} setPlayHandler={setPlayHandler} />
    </Fragment>
  );
}

export default VideoPlayer;
