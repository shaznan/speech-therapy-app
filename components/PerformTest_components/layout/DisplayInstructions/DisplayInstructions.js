import React from "react";
import { Fragment } from "react";
import Paragraph from "../../../Common_Layout/Typography/Paragraph";
import Button from "../../../Common_Layout/Button/Button";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./DisplayInstructions_styles";
import { paragraphstyle } from "./DisplayInstructions_styles";
import { testActions } from "../../../../store/performTestSlice";
import { useDispatch } from "react-redux";
import Card from "../../../Common_Layout/Card/Card";

function DisplayInstructions() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const onClickHandler = (e) => {
    e.preventDefault();
    dispatch(testActions.setShowInstructions(false));
  };

  return (
    <Fragment>
      <Grid item lg={12} className={classes.container}>
        <Card>
          <Paragraph
            customstyle={paragraphstyle}
            text={[
              <h4 style={{ color: "#636363" }}>Instructions:</h4>,
              <p>
                Select a catergory from the next window and get prepared to
                <strong> speak out load 📢 </strong> as much words that comes to
                your mind. Words relating to a certain catergory, or words
                beggining with an alphabetical letter.
              </p>,
              <p>
                You will have 60 seconds to complete this challenge, good luck!
              </p>,
            ]}
          />
          <div className={classes.btncontainer}>
            <Button
              onClickHandler={onClickHandler}
              type="primarywitharrow"
              text="Select your catergory"
            />
          </div>
        </Card>
      </Grid>
    </Fragment>
  );
}

export default DisplayInstructions;
