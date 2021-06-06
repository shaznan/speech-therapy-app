import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

function CubeAnimation() {
  return (
    <div>
      <Player
        autoplay={true}
        loop={true}
        controls={false}
        src="https://assets4.lottiefiles.com/private_files/lf30_ijlzmjq6.json"
        style={{ height: "300px", width: "300px" }}
      ></Player>
    </div>
  );
}

export default CubeAnimation;
