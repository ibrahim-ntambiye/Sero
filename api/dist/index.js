"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Application = void 0;
const body_parser_1 = require("body-parser");
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const recipesService_1 = require("./services/recipesService");
const app = express_1.default();
class Application {
    constructor() {
        this.setupApplicationSettings();
        this.setupControllers();
    }
    setupApplicationSettings() {
        app.use(cors_1.default());
        app.use(body_parser_1.urlencoded({ extended: false }));
        app.use(body_parser_1.json());
    }
    listen() {
        app.listen(3080, () => console.log("Listening on port 3080"));
    }
    setupControllers() {
        app.get("/recipes", (req, res) => {
            const allRecipes = recipesService_1.getAllRecipes();
            res.status(200).send(allRecipes);
        });
        app.get("/recipes/:id", (req, res) => {
            const id = req.params.id;
            const result = recipesService_1.getRecipeById(id);
            res.status(200).send(result);
        });
        app.post("/recipes", (req, res) => {
            const id = req.params;
            console.log(req.body);
            const result = recipesService_1.addRecipe(req.body);
            res.status(201).send(result);
        });
        app.delete("/recipes/:id", (req, res) => {
            const id = req.params.id;
            const result = recipesService_1.deleteRecipe(id);
            res.status(200).send(result);
        });
        app.get("/search", (req, res) => {
            const { keyword, searchCriteria } = req.query;
            console.log(keyword, "---", searchCriteria);
            const recipes = recipesService_1.searchRecipe(keyword, searchCriteria);
            res.status(200).send(recipes);
        });
        app;
    }
}
exports.Application = Application;
const application = new Application();
application.listen();
//# sourceMappingURL=index.js.map