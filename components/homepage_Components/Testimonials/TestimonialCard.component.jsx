import React from "react";
import { Fragment } from "react";
import { useStyles } from "../homepage_styles";
import Card from "../../Common_Layout/Card/Card";
import { Typography } from "@material-ui/core";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";

function TestimonialCard({ message, name }) {
  const classes = useStyles();
  return (
    <Fragment>
      <div className={classes.caroosel_item}>
        <div className={classes.caroosel_item}>
          <Card>
            <div className={classes.card_container}>
              <Typography variant="h5">
                <FormatQuoteIcon />
                {message}
                <FormatQuoteIcon />
              </Typography>
              <span style={{ marginTop: "0.5rem" }}>~ {name}</span>
            </div>
          </Card>
        </div>
      </div>
    </Fragment>
  );
}

export default TestimonialCard;
