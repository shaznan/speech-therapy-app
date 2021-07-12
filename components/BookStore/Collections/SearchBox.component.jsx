import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "../bookstore_styles";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import { useEffect } from "react";
import { bookstoreSlice_Actions } from "../../../store/bookstoreSlice";
import { useDispatch } from "react-redux";

function SearchBox() {
  const dispatch = useDispatch();
  const classes = useStyles();

  const onChangeHandler = (e) => {
    dispatch(bookstoreSlice_Actions.setSearchboxQuery(e.target.value));
  };

  return (
    <Fragment>
      <div className={classes.searcbox_main_cont}>
        {/* <div className={classes.searchbox_label}>
          What book are you looking for ?
        </div> */}
        <Grid item md={12} className={classes.searchcontainer}>
          <TextField
            id="outlined-basic"
            onChange={onChangeHandler}
            variant="outlined"
            className={classes.searchbox}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      </div>
    </Fragment>
  );
}

export default SearchBox;
