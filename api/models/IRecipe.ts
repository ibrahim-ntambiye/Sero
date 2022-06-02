import { ObjectId } from "mongodb";
import { IIngredients } from "./IIngredients";
import { IStep } from './IStep';

export interface IRecipe  {
    _id: ObjectId;
    name: string;
    ingredients: IIngredients[];
    steps: IStep[];
    imageUrl: string; 
    cookingMethod: string;
} 