import { json, urlencoded } from "body-parser";
import cors from "cors";
import express, { Request, Response } from "express";
import { addRecipe, deleteRecipe, searchRecipe } from './services/recipesService';
import {
  getAllRecipes, getRecipeById,

} from "./services/recipesService";

const app = express();

export class Application {
  constructor() {
    this.setupApplicationSettings();
    this.setupControllers();
  }

  setupApplicationSettings() {
    app.use(cors());
    app.use(urlencoded({ extended: false }));
    app.use(json());
  }

  listen() {
    app.listen(3080, () => console.log("Listening on port 3080"));
  }

  setupControllers() {

    app.get("/recipes", async (req: Request, res: Response) => {
      const allRecipes = await getAllRecipes();
      console.log(allRecipes)
      res.status(200).json(allRecipes);
    });

    app.get("/recipes/:id", async (req: Request, res: Response) => {
      const id = req.params.id;
      const result = await getRecipeById(id);
      res.status(200).send(result);
    });

    app.post("/recipes", (req: Request, res: Response) => {
      const id = req.params;
      const result = addRecipe(req.body);
      res.status(201).send(result);
    });

    app.delete("/recipes/:id", async (req: Request, res: Response) => {
      const id = req.params.id;
      const result = await deleteRecipe(id);
      res.status(200).send(result);
    });

    app.get("/search", async (req: Request, res: Response) => {
      const { keyword, searchCriteria } = req.query;
      const recipes = await searchRecipe(keyword as string, searchCriteria as string);
      res.status(200).send(recipes);

    });

    app;
  }
}

const application = new Application();

application.listen();
