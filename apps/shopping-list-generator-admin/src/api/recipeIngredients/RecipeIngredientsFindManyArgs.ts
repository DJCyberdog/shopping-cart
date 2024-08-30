import { RecipeIngredientsWhereInput } from "./RecipeIngredientsWhereInput";
import { RecipeIngredientsOrderByInput } from "./RecipeIngredientsOrderByInput";

export type RecipeIngredientsFindManyArgs = {
  where?: RecipeIngredientsWhereInput;
  orderBy?: Array<RecipeIngredientsOrderByInput>;
  skip?: number;
  take?: number;
};
