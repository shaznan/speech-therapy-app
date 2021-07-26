import React, { Fragment, useState } from "react";
import { useStyles } from "../Articles_styles";
import Heading from "../../Common_Layout/Typography/Heading";
import Grid from "@material-ui/core/Grid";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Button from "@material-ui/core/Button";
import TextInputFeild from "./TextInputFeild.component";
import ArticleContnt from "./ArticleContnt.component";
import { articleSlice_Actions } from "../../../store/articlesSlice";
import { useDispatch } from "react-redux";
import useStoreArticleFormData from "./useStoreArticleFormData";
import CloseWindowBtn from "../../Common_Layout/Button/CloseWindowBtn";
import Fade from "react-reveal/Fade";

function ArticleForm() {
  const classes = useStyles();
  const dispatch = useDispatch();
  // store form data to backend
  useStoreArticleFormData();
  const [isSubmit, setIsSubmit] = useState(false);
  const submitHandler = () => {
    setIsSubmit(true);
  };
  const closeHandler = () => {
    dispatch(articleSlice_Actions.toggleShowArticleForm());
    dispatch(articleSlice_Actions.setIsFormSubmit(false));
  };
  const validate = Yup.object({
    title: Yup.string()
      .max(70, "Must be short and to the point")
      .required("Required"),
    coverimageurl: Yup.string().required("Required"),
  });

  return (
    <Formik
      initialValues={{
        title: "",
        coverimageurl: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        dispatch(articleSlice_Actions.setArticleFormTitle(values.title));
        dispatch(
          articleSlice_Actions.setArticleFormCoverImg(values.coverimageurl),
        );
        dispatch(articleSlice_Actions.setIsFormSubmit(true));
      }}>
      {() => (
        <Fragment>
          <Grid container className={classes.form}>
            <Fade duration={1000} bottom>
              <div className={classes.form_container}>
                <div className={classes.headingcont}>
                  <Heading text="Create your article" />
                </div>
                <div className={classes.closwindowbtn}>
                  <CloseWindowBtn onClickHandler={closeHandler} />
                </div>
                <Form id="articleform" style={{ marginTop: "2rem" }}>
                  <TextInputFeild
                    label="Title"
                    name="title"
                    type="text"
                    issubmit={isSubmit}
                  />
                  <TextInputFeild
                    label="Cover Image URL"
                    name="coverimageurl"
                    type="text"
                    issubmit={isSubmit}
                  />
                  <ArticleContnt />
                  <div className={classes.formbtn_cont}>
                    <Button
                      type="submit"
                      form="articleform"
                      className={classes.formbtn}
                      onClick={submitHandler}>
                      submit
                    </Button>
                  </div>
                </Form>
              </div>
            </Fade>
          </Grid>
        </Fragment>
      )}
    </Formik>
  );
}

export default ArticleForm;
