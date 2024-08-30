import { RecipeIngredients as TRecipeIngredients } from "../api/recipeIngredients/RecipeIngredients";

export const RECIPEINGREDIENTS_TITLE_FIELD = "id";

export const RecipeIngredientsTitle = (record: TRecipeIngredients): string => {
  return record.id?.toString() || String(record.id);
};
