import { RecipeIngredientsCreateNestedManyWithoutIngredientsItemsInput } from "./RecipeIngredientsCreateNestedManyWithoutIngredientsItemsInput";

export type IngredientsCreateInput = {
  expirationDate?: Date | null;
  name?: string | null;
  price?: number | null;
  quantity?: number | null;
  recipeIngredientsItems?: RecipeIngredientsCreateNestedManyWithoutIngredientsItemsInput;
};
