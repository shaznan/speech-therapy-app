import React, { useEffect, useState } from "react";
import { useField, ErrorMessage } from "formik";
import TextField from "@material-ui/core/TextField";
// import { useStyles } from "../../Login_components/loginStyles";
import { makeStyles } from "@material-ui/core/styles";

function TextInputFeild({ label, ...props }) {
  const [field, meta] = useField(props);
  const [inputError, setInputError] = useState(false);

  const useStyles = makeStyles({
    textfield: {
      width: "100%",
      marginBottom: "1rem !important",
      "& label.Mui-focused": {
        color: "black",
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderRadius: "13px",
        },
        "&.Mui-focused fieldset": {
          borderColor: "black",
        },
      },
    },
  });

  const classes = useStyles();
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
        autoComplete="off"
        helperText={inputError && <ErrorMessage name={field.name} />}
        {...field}
        {...props}
        className={classes.textfield}
      />
    </div>
  );
}

export default TextInputFeild;
