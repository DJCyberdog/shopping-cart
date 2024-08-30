import { RecipeIngredientsUpdateManyWithoutRecipesItemsInput } from "./RecipeIngredientsUpdateManyWithoutRecipesItemsInput";

export type RecipesUpdateInput = {
  cookingTime?: number | null;
  isFavorite?: boolean | null;
  name?: string | null;
  recipeIngredientsItems?: RecipeIngredientsUpdateManyWithoutRecipesItemsInput;
  recipeType?: "Option1" | null;
  servings?: number | null;
};
