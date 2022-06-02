import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { FC } from "react";

interface SearchCriteriaSelectComponentProps {
  handleChange: any;
  value: string;
}

const SearchCriteriaSelectComponent: FC<SearchCriteriaSelectComponentProps> = ({
  handleChange,
  value,
}) => {
  return (
    <Box sx={{ width: 220 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Options</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={""}>-</MenuItem>
          <MenuItem value={"name"}>Recipe Name</MenuItem>
          <MenuItem value={"ingredient"}>Recipe Ingredient</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SearchCriteriaSelectComponent;
