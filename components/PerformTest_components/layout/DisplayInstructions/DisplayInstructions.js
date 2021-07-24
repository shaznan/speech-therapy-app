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
import CloseWindowBtn from "../../../Common_Layout/Button/CloseWindowBtn";
import CloseBtn from "../SelectCatergory/CloseBtn.component";
import Fade from "react-reveal/Fade";
import WithShowInstructions from "../Wrapper/WithShowInstructions";

function DisplayInstructions() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(testActions.setShowInstructions(false));
    dispatch(testActions.setShowCatergoryForm(true));
  };

  const closeBtnOnClickHandler = () => {
    dispatch(testActions.setShowInstructions(false));
    dispatch(testActions.setShowStartBtn(true));
  };

  return (
    <WithShowInstructions>
      <Grid item lg={12} sm={12} className={classes.container}>
        <Fade duration={500} left>
          <Card className={classes.cardcontainer}>
            <CloseBtn onClickHandler={closeBtnOnClickHandler} />
            <Paragraph
              customstyle={paragraphstyle}
              text={[
                <div
                  key={"heading"}
                  style={{ color: "#636363", fontSize: "1.3rem" }}>
                  Instructions:
                </div>,
                <p key={"paragraph1"} className={classes.paragraphtxt}>
                  Select a catergory from the next window and get prepared to
                  <strong> speak out load 📢 </strong> as much words that comes
                  to your mind. Words relating to a certain catergory, or words
                  beggining with an alphabetical letter.
                </p>,
                <p key={"paragraph2"} className={classes.paragraphtxt}>
                  You will have 60 seconds to complete this challenge, good
                  luck!
                </p>,
              ]}
            />
            <div className={classes.btncontainer}>
              <Button
                onClickHandler={onClickHandler}
                type="next"
                text="Select your catergory"
              />
            </div>
          </Card>
        </Fade>
      </Grid>
    </WithShowInstructions>
  );
}

export default DisplayInstructions;
