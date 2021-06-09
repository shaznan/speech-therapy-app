import React, { Fragment } from "react";
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
    (state) => state.performtest.selectedOptfromList
  );

  return (
    <Fragment>
      <FormControl>
        <FormLabel className={classes.formlabelsub} component="legend">
          {mainLabel}
        </FormLabel>
        <div className={classes.selectcontainer}>
          <InputLabel
            id="demo-controlled-open-select-label"
            className={classes.selectlabel}
          >
            {subLabel}
          </InputLabel>
          <Select
            className={classes.options}
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            value={selectedOptfromList}
            onChange={handleChange}
          >
            {optionsList.map((option, i) => {
              return (
                <MenuItem key={i} value={option}>
                  {option}
                </MenuItem>
              );
            })}
            ;
          </Select>
        </div>
      </FormControl>
    </Fragment>
  );
}

export default SubCatergoryContent;
