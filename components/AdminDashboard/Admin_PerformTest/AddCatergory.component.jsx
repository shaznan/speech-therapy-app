import React from "react";
import { Fragment } from "react";
import Card from "../../Common_Layout/Card/Card";
import TextField from "@material-ui/core/TextField";
import { Typography } from "@material-ui/core";
import { useStyles } from "../AdminDashboard_styles";
import Button from "@material-ui/core/Button";
import { useState } from "react";
// import { storeGistData } from "../../../store/adminSlice";
import { useDispatch, useSelector } from "react-redux";
import LoadSpinner from "../../Common_Layout/loadspinner/loadSpinner";
import CustomizedSnackbars from "../../Common_Layout/SnackBar/SnackBar";
import useStoreGistData from "./useStoreGistData";

function AddCatergory() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [catergoryName, setCatergoryName] = useState(null);
  const [gistUrl, setGistUrl] = useState(null);
  //   const loading = useSelector((state) => state.adminDashboard.loading);
  //   const storeGistStatus = useSelector(
  //     (state) => state.adminDashboard.storeGistStatus,
  //   );

  const [resStatus, loading, storeGistData] = useStoreGistData();

  const localId = useSelector((state) => state.user.entities[0].localId);

  const catergoryInputHandler = (e) => {
    setCatergoryName(e.target.value);
  };

  const gistInputHandler = (e) => {
    setGistUrl(e.target.value);
  };

  const data = { catergoryName, gistUrl, localId };

  const onSubmitHandler = () => {
    storeGistData(data);
  };

  return (
    <Fragment>
      <div>
        <LoadSpinner loading={loading} />
        <Card>
          <Typography variant="h5" style={{ marginBottom: "1rem" }}>
            Add Catergory
          </Typography>
          <form
            noValidate
            // onSubmit={onSubmitHandler}
            autoComplete="off"
            className={classes.adminform_cont}>
            <div className={classes.performtest_input}>
              <TextField
                id="outlined-basic"
                label="Catergory Name"
                variant="outlined"
                onChange={catergoryInputHandler}
              />
            </div>
            <div
              className={`${classes.performtest_input} ${classes.gistinput}`}>
              <TextField
                id="outlined-basic"
                label="Link to Gist (URL)"
                variant="outlined"
                style={{ width: "100%" }}
                onChange={gistInputHandler}
              />
            </div>
            <Button
              onClick={onSubmitHandler}
              className={classes.performtest_submitbtn}>
              Submit
            </Button>
            <CustomizedSnackbars status={resStatus} />
          </form>
        </Card>
      </div>
    </Fragment>
  );
}

export default AddCatergory;
