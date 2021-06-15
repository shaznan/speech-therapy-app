import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import TextInputFeild from "./TextFeild.component";
import * as Yup from "yup";

function Signup_Form() {
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
        <div>
          <h1>Create Account</h1>
          {/* {console.log(formik.values)} */}
          <Form>
            <TextInputFeild label="Nick Name" name="nickName" type="text" />
            <TextInputFeild label="Email" name="email" type="email" />
            <TextInputFeild label="Password" name="password" type="password" />
            <TextInputFeild
              label="Confirm Password"
              name="confirmPassword"
              type="password"
            />
            <button type="submit">Register</button>
            <button type="button">Reset</button>
          </Form>
        </div>
      )}
    </Formik>
  );
}

export default Signup_Form;
