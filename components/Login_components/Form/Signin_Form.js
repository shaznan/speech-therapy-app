import React from "react";
import { Formik, Form } from "formik";
import TextInputFeild from "./TextFeild.component";
import * as Yup from "yup";
import { useStyles } from "../loginStyles";
import FormBtn from "./FormBtn.component";
import useAuth from "./useAuth";
import ErrorModal from "./ErrorModal.component";
import { useSelector } from "react-redux";

function Signin_Form() {
  //TODO: Refactor with signup form
  const classes = useStyles();
  const isEmailError = useSelector((state) => state.login_signup.isEmailError);
  const { fireBaseAuth } = useAuth(
    "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA5BBFvXMN08rnAvoSmQz1LZmh5wD3H0mA"
  );
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
        fireBaseAuth(values.email, values.password);
      }}
    >
      {(formik) => (
        <div>
          <h1 className={classes.formheader}>Sign In</h1>
          {isEmailError && <ErrorModal />}

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
