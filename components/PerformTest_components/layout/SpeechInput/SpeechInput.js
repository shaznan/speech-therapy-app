import React from "react";
import { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Card from "../../../Common_Layout/Card/Card";
import MicNoneTwoToneIcon from "@material-ui/icons/MicNoneTwoTone";
import Tooltip from "./Tooltip.component";
import CloseWindowBtn from "../../../Common_Layout/Button/CloseWindowBtn";

const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    marginTop: "8rem",
    position: "relative",
  },
  inputtext: {
    paddingTop: "1rem",
    fontFamily: "product-sans",
    fontSize: "2rem",
    marginLeft: "1.5rem",
    opacity: "0.5",
    marginBottom: "-1.5rem !important",
  },
  inputcontainer: {
    display: "flex",
    flexDirection: "row",
    position: "relative",
  },
  iconcontainer: {
    "&::before": {
      display: "inline-block",
      position: "absolute",
      content: "''",
      width: "4.5rem",
      height: "4.5rem",
      borderRadius: "50%",
      border: "4px solid rgba(0,0,0,0.1)",
      left: "-0.8rem",
      top: "0.2rem",
    },
  },
  icon: {
    color: "red",
    fontSize: "3rem !important",
    marginTop: "1rem !important",
    marginBottom: "-1.5rem !important",
  },
  closebtn: {
    position: "absolute",
    right: "-1rem",
    top: "-1rem",
    opacity: 0.5,
  },
});

//

function SpeechInput() {
  const classes = useStyles();
  return (
    <Fragment>
      <Grid container spacing={0} className={classes.container}>
        {/*FIXME: Speak out loud words should come here  */}

        <Tooltip />
        <Card>
          <div className={classes.inputcontainer}>
            <div className={classes.closebtn}>
              <CloseWindowBtn />
            </div>
            <Grid item lg={1} className={classes.iconcontainer}>
              <MicNoneTwoToneIcon className={classes.icon} />
            </Grid>
            <Grid item lg={7} className={classes.inputtext}>
              Listening
            </Grid>
          </div>
        </Card>
      </Grid>
    </Fragment>
  );
}

export default SpeechInput;
