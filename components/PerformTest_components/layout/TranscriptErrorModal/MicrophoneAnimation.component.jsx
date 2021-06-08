import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

function MicrophoneAnimation() {
  return (
    <div>
      <Player
        autoplay={true}
        loop={true}
        controls={false}
        src="https://assets10.lottiefiles.com/private_files/lf30_4rmx4y8w.json"
        style={{ height: "200px", width: "200px" }}
      ></Player>
    </div>
  );
}

export default MicrophoneAnimation;
