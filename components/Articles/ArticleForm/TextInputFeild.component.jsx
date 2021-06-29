import React, { useEffect, useState } from "react";
import { useField, ErrorMessage } from "formik";
import TextField from "@material-ui/core/TextField";
import { useStyles } from "../Articles_styles";

function TextInputFeild({ label, isSubmit, ...props }) {
  const [field, meta] = useField(props);
  const [inputError, setInputError] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    if (!isSubmit) return;
    if (meta.error && isSubmit) {
      setInputError(true);
    } else {
      setInputError(false);
    }
  }, [isSubmit, meta]);

  return (
    <div>
      <TextField
        label={label}
        variant="outlined"
        error={inputError}
        autoComplete="off"
        helperText={
          inputError && (
            <ErrorMessage name={field.name} className={classes.helpertext} />
          )
        }
        {...field}
        {...props}
        className={`${classes.textfeild} ${
          field.name === "content" && classes.textfeild_content
        }`}
      />
    </div>
  );
}

export default TextInputFeild;
