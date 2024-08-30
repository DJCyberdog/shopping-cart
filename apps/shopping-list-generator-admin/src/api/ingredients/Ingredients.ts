import { RecipeIngredients } from "../recipeIngredients/RecipeIngredients";

export type Ingredients = {
  createdAt: Date;
  expirationDate: Date | null;
  id: string;
  name: string | null;
  price: number | null;
  quantity: number | null;
  recipeIngredientsItems?: Array<RecipeIngredients>;
  updatedAt: Date;
};
