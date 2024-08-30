import { IngredientsWhereUniqueInput } from "../ingredients/IngredientsWhereUniqueInput";
import { RecipesWhereUniqueInput } from "../recipes/RecipesWhereUniqueInput";

export type RecipeIngredientsCreateInput = {
  ingredient?: IngredientsWhereUniqueInput | null;
  quantity?: number | null;
  recipe?: RecipesWhereUniqueInput | null;
};
