import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

function AnimationFeedback({ link }) {
  return (
    <div>
      <Player
        autoplay={true}
        loop={true}
        controls={false}
        src={link}
        style={{ height: "200px", width: "200px" }}></Player>
    </div>
  );
}

export default AnimationFeedback;
