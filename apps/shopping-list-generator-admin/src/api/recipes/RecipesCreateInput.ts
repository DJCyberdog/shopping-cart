import { RecipeIngredientsCreateNestedManyWithoutRecipesItemsInput } from "./RecipeIngredientsCreateNestedManyWithoutRecipesItemsInput";

export type RecipesCreateInput = {
  cookingTime?: number | null;
  isFavorite?: boolean | null;
  name?: string | null;
  recipeIngredientsItems?: RecipeIngredientsCreateNestedManyWithoutRecipesItemsInput;
  recipeType?: "Option1" | null;
  servings?: number | null;
};
