import React, { Fragment } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { useStyles } from "../Articles_styles";
import { articleSlice_Actions } from "../../../store/articlesSlice";
import { useDispatch, useSelector } from "react-redux";

function ArticleTypeCheckbox() {
  const dispatch = useDispatch();
  const isVerifiedChecked = useSelector(
    (state) => state.article.isVerifiedChecked
  );
  const isCommunityChecked = useSelector(
    (state) => state.article.isCommunityChecked
  );
  const handleChange = (e) => {
    if (isVerifiedChecked) {
      dispatch(articleSlice_Actions.toggleCheckbox("verified"));
    }
    if (isCommunityChecked) {
      dispatch(articleSlice_Actions.toggleCheckbox("community"));
    }
    dispatch(articleSlice_Actions.toggleCheckbox(e.target.name));
  };

  const classes = useStyles();
  return (
    <Fragment>
      <div className={classes.checkbox}>
        <FormControlLabel
          control={
            <Checkbox
              checked={isVerifiedChecked}
              onChange={handleChange}
              name="verified"
              color="default"
            />
          }
          label="Verified"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={isCommunityChecked}
              onChange={handleChange}
              name="community"
              color="default"
            />
          }
          label="Community"
        />
      </div>
    </Fragment>
  );
}

export default ArticleTypeCheckbox;
