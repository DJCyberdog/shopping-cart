import { RecipeIngredientsUpdateManyWithoutIngredientsItemsInput } from "./RecipeIngredientsUpdateManyWithoutIngredientsItemsInput";

export type IngredientsUpdateInput = {
  expirationDate?: Date | null;
  name?: string | null;
  price?: number | null;
  quantity?: number | null;
  recipeIngredientsItems?: RecipeIngredientsUpdateManyWithoutIngredientsItemsInput;
};
