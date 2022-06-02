"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addRecipe = exports.deleteRecipe = exports.getRecipeById = exports.searchRecipe = exports.getAllRecipes = void 0;
const fake_recipes_1 = require("../FakeData/fake-recipes");
let recipes = [fake_recipes_1.Cranberry_and_Apple_Stuffed_Acorn_Squash, fake_recipes_1.green_bananas];
const getAllRecipes = () => {
    return recipes;
};
exports.getAllRecipes = getAllRecipes;
const searchRecipe = (keyword, searchCriteria) => {
    const result = recipes.filter((rcp) => {
        if (searchCriteria === "name")
            return rcp.name.toLowerCase().includes(keyword.toLowerCase());
        if (searchCriteria === "ingredient")
            return rcp.ingredients.filter((ingredient) => ingredient.name.toLowerCase().includes(keyword.toLowerCase()));
        return (rcp.name.toLowerCase().includes(keyword.toLowerCase()) ||
            rcp.ingredients.filter((ingredient) => ingredient.name.toLowerCase().includes(keyword.toLowerCase())));
    });
    return result;
};
exports.searchRecipe = searchRecipe;
const getRecipeById = (id) => {
    return recipes.find((item) => item.id == id);
};
exports.getRecipeById = getRecipeById;
const deleteRecipe = (id) => {
    const itemToDelete = recipes.find((item) => item.id == id);
    const indexOfItem = recipes.indexOf(itemToDelete);
    recipes.splice(indexOfItem, 1);
    return recipes;
};
exports.deleteRecipe = deleteRecipe;
const addRecipe = (recipe) => {
    recipes.push(recipe);
    console.log(recipes);
    return recipes;
};
exports.addRecipe = addRecipe;
//# sourceMappingURL=recipesService.js.map