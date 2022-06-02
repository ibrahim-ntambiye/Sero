import axios from "axios";
import { ObjectId } from "mongodb";
import IRecipe from "../models/IRecipe";

interface ISearchObject {
  keyword: string;
  searchCriteria?: string;
}

export const getAllRecipes = async (): Promise<IRecipe[]> => {
  return axios.get("http://localhost:3080/recipes").then((res) => {
    return res.data;
  });
};

export const saveRecipe = async (recipe: IRecipe) => {
  axios
    .post("http://localhost:3080/recipes", recipe)
    .catch((err) => console.log(err.message));
};

export const removeRecipe = (id: ObjectId) => {
  console.log(id)
  return axios.delete(`http://localhost:3080/recipes/${id}`).then((res) => {
    console.log(res.data);
    return res.data;
  });
};

export const searchRecipes = (search: ISearchObject): Promise<IRecipe[]> => {
  return axios
    .get(
      `http://localhost:3080/search?keyword=${search.keyword}&searchCriteria=${search.searchCriteria}`
    )
    .then((res) => {
      return res.data;
    });
};
