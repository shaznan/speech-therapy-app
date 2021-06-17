import React, { Fragment } from "react";
import Button from "@material-ui/core/Button";
import { useStyles } from "../loginStyles";

function FormBtn({ text, form }) {
  const classes = useStyles();

  return (
    <Fragment>
      <Button type="submit" form={form} className={classes.formbtn}>
        {text}
      </Button>
    </Fragment>
  );
}

export default FormBtn;
