import React from "react";
import { useStyles } from "./ContactUsForm_styles";

function Location() {
  const classes = useStyles();
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15843.268617108457!2d79.87019093505245!3d6.912453421871248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259a291b991db%3A0xe37fc789128a67fc!2sColombo%2008%2C%20Colombo!5e0!3m2!1sen!2slk!4v1626981164604!5m2!1sen!2slk"
        loading="lazy"
        className={classes.Locationmap}></iframe>
    </div>
  );
}

export default Location;
