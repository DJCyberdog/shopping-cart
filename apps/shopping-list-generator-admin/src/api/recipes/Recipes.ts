import { RecipeIngredients } from "../recipeIngredients/RecipeIngredients";

export type Recipes = {
  cookingTime: number | null;
  createdAt: Date;
  id: string;
  isFavorite: boolean | null;
  name: string | null;
  recipeIngredientsItems?: Array<RecipeIngredients>;
  recipeType?: "Option1" | null;
  servings: number | null;
  updatedAt: Date;
};
