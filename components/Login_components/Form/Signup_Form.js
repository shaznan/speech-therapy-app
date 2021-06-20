import React from "react";
import { Formik, Form } from "formik";
import TextInputFeild from "./TextFeild.component";
import * as Yup from "yup";
import { useStyles } from "../loginStyles";
import FormBtn from "./FormBtn.component";
import useAuth from "./useAuth";
import ErrorModal from "./ErrorModal.component";
import { useSelector, useDispatch } from "react-redux";
import { login_signup_Actions } from "../../../store/login_signupSlice";
import { userSlice_Actions } from "../../../store/userSlice";

function Signup_Form() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const isEmailError = useSelector((state) => state.login_signup.isEmailError);
  const { fireBaseAuth } = useAuth(
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA5BBFvXMN08rnAvoSmQz1LZmh5wD3H0mA"
  );

  const validate = Yup.object({
    nickName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    email: Yup.string().email("Email is Invalid").required("Email is Required"),
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
        fireBaseAuth(values.email, values.password);
        dispatch(userSlice_Actions.setNickName(values.nickName));
      }}
    >
      {(formik) => (
        <div>
          <h1 className={classes.formheader}>Create Account</h1>
          {isEmailError && <ErrorModal />}
          <Form id="signupform">
            <TextInputFeild label="Nick Name" name="nickName" type="text" />
            <TextInputFeild label="Email" name="email" type="email" />
            <TextInputFeild label="Password" name="password" type="password" />
            <TextInputFeild
              label="Confirm Password"
              name="confirmPassword"
              type="password"
            />
            <FormBtn text="Sign up" form="signupform" />
          </Form>
        </div>
      )}
    </Formik>
  );
}

export default Signup_Form;
