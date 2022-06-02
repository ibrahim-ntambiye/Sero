import { MongoClient, ObjectId } from 'mongodb';
import { IRecipe } from "../models/IRecipe";

export const connect = async () => {
  let mongoClient;
  let db;
  mongoClient = new MongoClient(
    "mongodb://admin:sdTms34!d2JLs0@localhost/typescript-fullstack"
  );
  await mongoClient.connect();
  db = mongoClient.db("typescript-fullstack");
  return db
};

export const findAllRecipes = async () =>{
   const db = await connect()
  let recipeCollect = db.collection("recipe")
  var findResult = (await recipeCollect.find({}).toArray()) as IRecipe[]
  return findResult
}

export const insertRecipe = async (recipe: IRecipe ) =>{
  const db = await connect()
 let recipeCollect = db.collection("recipe")
  const created = await recipeCollect.insertOne(recipe)
  return created.acknowledged;
}

export const deleteFoodRecipe = async (_id:string ) =>{
  const db = await connect()
 let recipeCollect = db.collection("recipe")
 return (await recipeCollect.deleteOne({_id: new ObjectId(_id)})).acknowledged
}

export const findRecipeById = async (_id:string ) =>{
  const db = await connect()
 let recipeCollect = db.collection("recipe")
 var findResult = (await recipeCollect.findOne<IRecipe>({_id: new ObjectId(_id)}))
 return findResult
}

export const searchByName = async(keyword: string) =>{
  const db = await connect()
  let recipeCollect = db.collection("recipe")
  const findResult = recipeCollect.find<IRecipe[]>( { name: { $regex: /Matoke$/ } } )
  return findResult
}