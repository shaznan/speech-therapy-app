import React, { Fragment } from "react";
import FormLabel from "@material-ui/core/FormLabel";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { useStyles } from "./SelectForm_Styles";

function SubCatergory() {
  const classes = useStyles();

  return (
    <Fragment>
      <FormControl>
        <FormLabel className={classes.formlabelsub} component="legend">
          Select an alphabetical letter of your choice
        </FormLabel>
        <div className={classes.selectcontainer}>
          <InputLabel
            id="demo-controlled-open-select-label"
            className={classes.selectlabel}
          >
            Age
          </InputLabel>
          <Select
            className={classes.options}
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            //   open={open}
            //   onClose={handleClose}
            //   onOpen={handleOpen}
            //   value={age}
            //   onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
          </Select>
        </div>
      </FormControl>
    </Fragment>
  );
}

export default SubCatergory;
