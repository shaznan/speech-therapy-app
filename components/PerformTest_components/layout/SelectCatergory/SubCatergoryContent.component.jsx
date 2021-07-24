import React, { Fragment, useEffect } from "react";
import FormLabel from "@material-ui/core/FormLabel";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { useStyles } from "./SelectForm_Styles";
import { useDispatch, useSelector } from "react-redux";
import { testActions } from "../../../../store/performTestSlice";

function SubCatergoryContent({ mainLabel, subLabel, optionsList }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(testActions.setSelectedOptfromList(e.target.value));
    dispatch(testActions.setIsOptionSelected(true));
  };

  const selectedOptfromList = useSelector(
    (state) => state.performtest.selectedOptfromList,
  );
  const isAlphabetChecked = useSelector(
    (state) => state.performtest.isAlphabetChecked,
  );

  // console.log(optionsList);

  useEffect(() => {
    if (isAlphabetChecked === true) {
      const randomLetter = Math.round(Math.random() * optionsList.length);
      dispatch(testActions.setSelectedOptfromList(optionsList[randomLetter]));
      dispatch(testActions.setIsOptionSelected(true));
    }
  }, [isAlphabetChecked]);

  const renderMenuItem = (optionlist) => {
    if (!optionsList) {
      return <MenuItem>loading..</MenuItem>;
    } else {
      return optionsList.map((option, i) => {
        return (
          <MenuItem key={i} value={option}>
            {option}
          </MenuItem>
        );
      });
    }
  };

  if (subLabel === "alphabet") {
    return (
      <Fragment>
        <FormControl>
          <FormLabel className={classes.formlabelsub} component="legend">
            {mainLabel}
          </FormLabel>
        </FormControl>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <FormControl>
        <FormLabel className={classes.formlabelsub} component="legend">
          {mainLabel}
        </FormLabel>
        <div className={classes.selectcontainer}>
          <InputLabel
            id="demo-controlled-open-select-label"
            className={classes.selectlabel}>
            {subLabel}
          </InputLabel>
          <Select
            className={classes.options}
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            value={selectedOptfromList}
            onChange={handleChange}>
            {renderMenuItem(optionsList)}
          </Select>
        </div>
      </FormControl>
    </Fragment>
  );
}

export default SubCatergoryContent;
