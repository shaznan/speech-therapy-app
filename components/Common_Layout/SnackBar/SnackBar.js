import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles({
  root: {
    width: "100%",
    "& > * + *": {
      // marginTop: theme.spacing(2),
    },
  },
});

export default function CustomizedSnackbars({ status }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  console.log(status);

  useEffect(() => {
    status !== null ? setOpen(true) : setOpen(false);
  }, [status]);

  return (
    <div className={classes.root}>
      <Snackbar
        onClick={() => {
          setOpen(close);
        }}
        open={open}
        autoHideDuration={1000}>
        <Alert severity={status === "success" ? "success" : "error"}>
          {status}
        </Alert>
      </Snackbar>
    </div>
  );
}
