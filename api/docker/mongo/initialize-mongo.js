
db = db.getSiblingDB("typescript-fullstack");
db.createUser({
  user: "admin",
  pwd: "sdTms34!d2JLs0",
  roles: [{ role: "readWrite", db: "typescript-fullstack" }],
});
db.getCollection("recipe").insert({
  Creator: "5e4ec427f070030001bac272",
  name: "Cranberry and Apple Stuffed Acorn Squash",
  cookingMethod: "Frying",
  ingredients: [
    {
      quantity: "2",
      name: "acorn squash",
      type: "IIngredientType.Produce"
    },
    {
      quantity: "1",
      name: "boiling water",
      type: "IIngredientType.Drinks"
    },
    {
      quantity: "2",
      name: "apples chopped into 1.4 inch pieces",
      type: "IIngredientType.Produce"
    },
    {
      quantity: "1/2 cup",
      name: "dried cranberries",
      type: "IIngredientType.Produce"
    },
    {
      quantity: "1 teaspoon",
      name: "cinnamon",
      type: "IIngredientType.Baking"
    },
    {
      quantity: "2 tablespoons",
      name: "melted butter",
      type: "IIngredientType.Dairy"
    }
  ],
  steps: [
    {
      stepDescription: "Cut squash in half, remove seeds.",
      stepTimer: 0
    },
    {
      stepDescription: "Place squash in baking dish, cut-side down.",
      stepTimer: 0
    },
    {
      stepDescription: "Pour 1/4-inch water into dish.",
      stepTimer: 0
    },
    {
      stepDescription: "Bake for 30 minutes at 350 degrees F.",
      stepTimer: 30
    },
    {
      stepDescription: "In large bowl, combine remaining ingredients.",
      stepTimer: 0
    },
    {
      stepDescription: "Remove squash from oven, fill with mix.",
      stepTimer: 0
    },
    {
      stepDescription: "Bake for 30-40 more minutes, until squash tender.",
      stepTimer: 30
    }
  ],
  imageUrl:
    "https://elanaspantry.com/wp-content/uploads/2008/10/acorn_squash_with_cranberry.jpg"
});
