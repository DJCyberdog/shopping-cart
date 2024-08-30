import { SortOrder } from "../../util/SortOrder";

export type RecipesOrderByInput = {
  cookingTime?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  isFavorite?: SortOrder;
  name?: SortOrder;
  recipeType?: SortOrder;
  servings?: SortOrder;
  updatedAt?: SortOrder;
};
