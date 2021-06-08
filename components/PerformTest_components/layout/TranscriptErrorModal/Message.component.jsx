import React from "react";
import { Fragment } from "react";

function Message() {
  return (
    <Fragment>
      <h2 id="transition-modal-title">
        Ooops! Roses are red, your mouth is too, you tried to talk, but we
        couldn't hear you!
      </h2>
      <p id="transition-modal-description">
        It is Recommended that you use an external mic to talk, if you are using
        one, please make sure to bring the mic closer to your mouth 🙂
      </p>
    </Fragment>
  );
}

export default Message;
