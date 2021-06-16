import React from "react";
import { Formik, Form } from "formik";
import TextInputFeild from "./TextFeild.component";
import * as Yup from "yup";
import { useStyles } from "../loginStyles";
import FormButtons from "./FormButtons.component";
import { useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import FormBtn from "./FormBtn.component";

function Signin_Form() {
  const classes = useStyles();
  const validate = Yup.object({
    email: Yup.string().email("Email is invalid").required("Email is Required"),
    password: Yup.string()
      .min(6, "Password must be atleast 6 characters")
      .required("Password is Required"),
  });

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(formik) => (
        <div>
          <h1 className={classes.formheader}>Sign In</h1>
          <Form id="signinform">
            <TextInputFeild label="Email" name="email" type="email" />
            <TextInputFeild label="Password" name="password" type="password" />
            <FormBtn text="Sign In" form="signinform" />
          </Form>
        </div>
      )}
    </Formik>
  );
}

export default Signin_Form;
