import { SortOrder } from "../../util/SortOrder";

export type RecipeIngredientsOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  ingredientId?: SortOrder;
  quantity?: SortOrder;
  recipeId?: SortOrder;
  updatedAt?: SortOrder;
};
