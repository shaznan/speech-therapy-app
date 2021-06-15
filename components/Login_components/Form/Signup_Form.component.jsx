import React from "react";
import { Formik, Form } from "formik";
import TextInputFeild from "./TextFeild.component";
import * as Yup from "yup";
import { useStyles } from "../loginStyles";
import FormButtons from "./FormButtons.component";

function Signup_Form() {
  const classes = useStyles();
  const validate = Yup.object({
    nickName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    email: Yup.string().email("Email is invalid").required("Email is Required"),
    password: Yup.string()
      .min(6, "Password must be atleast 6 characters")
      .required("Password is Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password must match")
      .required("Confirm password is required"),
  });
  return (
    <Formik
      initialValues={{
        nickName: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(formik) => (
        <div className={classes.formcontainer}>
          <h1 className={classes.formheader}>Create Account</h1>
          <Form>
            <TextInputFeild label="Nick Name" name="nickName" type="text" />
            <TextInputFeild label="Email" name="email" type="email" />
            <TextInputFeild label="Password" name="password" type="password" />
            <TextInputFeild
              label="Confirm Password"
              name="confirmPassword"
              type="password"
            />
            <FormButtons />
          </Form>
        </div>
      )}
    </Formik>
  );
}

export default Signup_Form;
