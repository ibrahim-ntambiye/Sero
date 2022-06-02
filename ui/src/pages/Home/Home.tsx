import { useEffect, useRef, useState } from "react";
import RecipeComponent from "../../components/RecipeComponent/RecipeComponent";
import IRecipe from "../../models/IRecipe";
import {
  getAllRecipes,
  removeRecipe,
  searchRecipes,
} from "../../services/recipeService";
import "./home.css";
import SearchComponent from "../../components/SearchComponent/SearchComponent";
import { Divider, Grid, SelectChangeEvent } from "@mui/material";
import SearchCriteriaSelectComponent from "../../components/SearchCriteriaSelectComponent/SearchCriteriaSelectComponent";
import { ObjectId } from "mongodb";

export const Home = () => {
  const isInitialMount = useRef(true);
  const [allRecipes, setAllRecipes] = useState<IRecipe[]>([]);

  const searchRecipe = (keyword: string, searchCriteria?: string) => {
    searchRecipes({ keyword, searchCriteria }).then((res) => {
      setAllRecipes(res);
    });
  };
  const [searchCriteria, setSearchCriteria] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setSearchCriteria(event.target.value as string);
  };

  const deleteRecipe = async (id: ObjectId) => {
    await removeRecipe(id);
    getAllRecipes().then((res) => {
      setAllRecipes(res);
    });
  };

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;

      getAllRecipes().then((res) => {
        setAllRecipes(res);
      });
    }
  });

  return (
    <Grid container spacing={2} direction={"column"}>
      <Grid item xs={12} display="flex" justifyContent="center">
        <h1>Welcome to Food Recipes</h1>
      </Grid>
      <Grid item xs={12} display="flex" justifyContent="center">
        <SearchCriteriaSelectComponent
          handleChange={handleChange}
          value={searchCriteria}
        />
        <SearchComponent
          handleChange={(event: React.FormEvent<HTMLInputElement>) => {
            let keyword = event.currentTarget.value;
            searchRecipe(keyword, searchCriteria);
          }}
        />
      </Grid>
      <Grid item xs={12} display="flex" justifyContent="center">
        <Divider style={{ width: "100%" }} />
      </Grid>

      <Grid item xs={12} spacing={2} container>
        {allRecipes.map((recipeItem) => (
          <Grid item xs={3}>
            <RecipeComponent onDelete={deleteRecipe} recipe={recipeItem} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};
