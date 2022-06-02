import { FC } from "react";
import { TextField } from "@mui/material";

interface SearchComponentProps {
  handleChange: any;
  label?: string;
}

const SearchComponent: FC<SearchComponentProps> = ({ handleChange }) => {
  return (
    <TextField
      id="outlined-basic"
      label="Search Recipe"
      variant="outlined"
      onChange={handleChange}
    />
  );
};

export default SearchComponent;
