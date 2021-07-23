import emailjs from "emailjs-com";
import { useStyles } from "./ContactUsForm_styles";
import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import TextInputFeild from "../Common_Layout/Form/TextFeild.component";
import * as Yup from "yup";
import FormBtn from "../Common_Layout/Form/FormBtn.component";
import Fade from "react-reveal/Fade";

function ContactUsForm() {
  const classes = useStyles();

  //send email using email js
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_v60eow2",
        "template_f7kb6bm",
        e.target,
        "user_ezLMnqKoNMsuY2MxKxOij",
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );
  }

  const validate = Yup.object({
    user_name: Yup.string()
      .max(10, "name is too long")
      .required("name is required"),
    user_email: Yup.string()
      .email("Email is invalid")
      .required("Email is required"),
    message: Yup.string()
      .min(10, "Message too short")
      .required("message is required"),
  });

  return (
    <Formik
      initialValues={{
        user_name: "",
        user_email: "",
        message: "",
      }}
      validationSchema={validate}>
      {() => (
        <div className={classes.form_maincontainer}>
          <Fade duration={1000} left>
            <div className={classes.formcontainer}>
              <h1 className={classes.formheader}>Contact Us</h1>
              <Form id="contact_us" onSubmit={sendEmail}>
                <TextInputFeild label="Name" name="user_name" type="name" />
                <TextInputFeild label="Email" name="user_email" type="email" />
                <TextInputFeild label="Message" name="message" type="text" />
                <FormBtn text="Submit" form="contact_us" />
              </Form>
            </div>
          </Fade>
        </div>
      )}
    </Formik>
  );
}

export default ContactUsForm;
