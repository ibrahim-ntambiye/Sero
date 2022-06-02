import { Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { FC, useState } from "react";
import styles from "./InputComponent.module.css";

interface InputComponentProps {
  label?: string;
  type: string;
  value?: string;
  handleChange?: any;
  disableInput? : boolean
  inputStyle?: any
}

const InputComponent: FC<InputComponentProps> = ({
  label,
  type,
  handleChange,
  value,
  disableInput,
  inputStyle
}) => {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "500px" }
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        disabled={disableInput}
        label={label}
        type={type}
        variant="outlined"
        onChange={handleChange}
        value={value}
        style={{ ...inputStyle }}
      />
    </Box>
  );
};

export default InputComponent;
