import React, { Fragment, useState } from "react";
import { useStyles } from "../Articles_styles";
import Heading from "../../Common_Layout/Typography/Heading";
import Grid from "@material-ui/core/Grid";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Button from "@material-ui/core/Button";
import TextInputFeild from "./TextInputFeild.component";

function ArticleForm() {
  const classes = useStyles();
  const [isSubmit, setIsSubmit] = useState(false);
  const submitHandler = () => {
    setIsSubmit(true);
  };
  const validate = Yup.object({
    title: Yup.string()
      .max(70, "Must be short and to the point")
      .required("Required"),
    coverimage: Yup.string().required("Required"),
    content: Yup.string()
      .min(200, "must have atleast 200 characters")
      .required("Required"),
  });

  return (
    <Formik
      initialValues={{
        title: "",
        tags: "",
        coverimage: "",
        content: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {() => (
        <Fragment>
          <Grid container className={classes.form}>
            <div className={classes.form_container}>
              <Heading text="Create your article" />
              <Form id="articleform" style={{ marginTop: "2rem" }}>
                <TextInputFeild
                  label="Title"
                  name="title"
                  type="text"
                  isSubmit={isSubmit}
                />
                <TextInputFeild
                  label="Cover Image"
                  name="coverimage"
                  type="text"
                  isSubmit={isSubmit}
                />
                <TextInputFeild
                  label="Content"
                  name="content"
                  type="text"
                  isSubmit={isSubmit}
                />
                <Button
                  type="submit"
                  form="articleform"
                  className={classes.formbtn}
                  onClick={submitHandler}
                >
                  submit
                </Button>
              </Form>
            </div>
          </Grid>
        </Fragment>
      )}
    </Formik>
  );
}

export default ArticleForm;
