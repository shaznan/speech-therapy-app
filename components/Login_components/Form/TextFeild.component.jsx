import React, { useEffect, useState } from "react";
import { useField, ErrorMessage } from "formik";
import TextField from "@material-ui/core/TextField";

function TextInputFeild({ label, ...props }) {
  const [field, meta] = useField(props);
  const [inputError, setInputError] = useState(false);

  useEffect(() => {
    if (meta.touched && meta.error) {
      setInputError(true);
    } else {
      setInputError(false);
    }
  }, [meta]);

  return (
    <div>
      <TextField
        label={label}
        variant="outlined"
        error={inputError}
        helperText={inputError && <ErrorMessage name={field.name} />}
        {...field}
        {...props}
      />
    </div>
  );
}

export default TextInputFeild;
