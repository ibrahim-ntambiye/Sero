import { IRecipe } from "../models/IRecipe";
import {
  deleteFoodRecipe,
  findAllRecipes,
  findRecipeById,
  insertRecipe,
} from "../Repository/recipesRepository";

export const getAllRecipes = async (): Promise<IRecipe[]> => {
  const recipes = await findAllRecipes();
  console.log(recipes);
  return recipes;
};

export const searchRecipe = async (
  keyword: string,
  searchCriteria: string
): Promise<IRecipe[]> => {
  
  //NOTE  temporary solution
  const recipes = await findAllRecipes();

  const result = recipes.filter((rcp) => {
    if (searchCriteria === "name")
      return rcp.name.toLowerCase().includes(keyword.toLowerCase());
    if (searchCriteria === "ingredient") return filterIngredients(rcp, keyword);

    return (
      rcp.name.toLowerCase().includes(keyword.toLowerCase()) ||
      filterIngredients(rcp, keyword)
    );
  });
  return result;
};

export const getRecipeById = async (id: string): Promise<IRecipe> => {
  const recipe = await findRecipeById(id);
  return recipe;
};

export const deleteRecipe = async (id: string): Promise<boolean> => {
  return await deleteFoodRecipe(id);
};

export const addRecipe = async (recipe: IRecipe): Promise<boolean> => {
  return await insertRecipe(recipe);
};

export const filterIngredients = (
  recipe: IRecipe,
  keyword: string
): boolean => {
  return (
    recipe.ingredients.filter((ingredient) =>
      ingredient.name.toLowerCase().includes(keyword.toLowerCase())
    ).length !== 0
  );
};
