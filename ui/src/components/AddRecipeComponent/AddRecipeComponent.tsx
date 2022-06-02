import React, { FC } from "react";
import InputComponent from "../InputComponent/InputComponent";
import styles from "./AddRecipeComponent.module.css";
import { useState } from "react";
import IRecipe from "../../models/IRecipe";
import { saveRecipe } from "../../services/recipeService";
import { Button, Divider } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { Box, textAlign } from "@mui/system";
import AddIngredientComponent from "../AddIngredientComponent/AddIngredientComponent";
import { IIngredients } from "../../models/IIngredients";
import { useHistory } from "react-router-dom";
import { IStep } from '../../models/IStep';
import AddStepComponent from "../AddStepComponent/AddStepComponent";

interface AddRecipeComponentProps {}

const AddRecipeComponent: FC<AddRecipeComponentProps> = () => {
  const history = useHistory();
  const [recipe, setRecipe] = useState<IRecipe>({} as IRecipe);
  const [Ingredients, setIngredientList] = useState<IIngredients[]>([]);
  const [recipeSteps, setStepsList] = useState<IStep[]>([]);

  const recipeOnSubmit = async () => {
    recipe.ingredients = Ingredients;
    recipe.steps = recipeSteps;
    console.log(recipeSteps)
    await saveRecipe(recipe);
    history.push("/");
  };

  const addIngredientsToRecipe = (Ingredient: IIngredients) => {
    if (Ingredient !== null) {
      setIngredientList([...Ingredients, Ingredient]);
    }
  };

  const addStepsToRecipe = (step: IStep) => {
    if (step !== null) {
      setStepsList([...recipeSteps, step]);
      console.log(recipeSteps)
    }
  };

  return (
    <Box sx={{ textAlign: "center" }} className={styles.AddRecipeComponent}>
      <h1>New Recipe</h1>
      <form>
        <InputComponent
          label="Recipe Name"
          type="text"
          handleChange={(event: React.FormEvent<HTMLInputElement>) =>
            setRecipe({ ...recipe, name: event.currentTarget.value })
          }
        />
        <InputComponent
          label="Cooking Method"
          type="text"
          handleChange={(event: React.FormEvent<HTMLInputElement>) =>
            setRecipe({ ...recipe, cookingMethod: event.currentTarget.value })
          }
        />
        <InputComponent
          label="Image Url"
          type="text"
          handleChange={(event: React.FormEvent<HTMLInputElement>) =>
            setRecipe({ ...recipe, imageUrl: event.currentTarget.value })
          }
        />
        <h3>Ingredients</h3>
        <AddIngredientComponent
          Ingredients={Ingredients}
          addIngredientsToRecipe={addIngredientsToRecipe}
        />
        <h3>Recipe steps</h3>
        <AddStepComponent
          steps={recipeSteps}
          addStepsToRecipe={addStepsToRecipe}
        />
        <Button
          onClick={recipeOnSubmit}
          variant="contained"
          endIcon={<SendIcon />}
        >
          Send
        </Button>
      </form>
    </Box>
  );
};

export default AddRecipeComponent;
