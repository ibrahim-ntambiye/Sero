import { IIngredients } from "./IIngredients";
import { IStep } from './IStep';
import { ObjectId } from "mongodb";

export default interface IRecipe  {
    _id: ObjectId
    name: string;
    ingredients: IIngredients[];
    steps: IStep[];
    imageUrl: string;
    cookingMethod: string; 
} 