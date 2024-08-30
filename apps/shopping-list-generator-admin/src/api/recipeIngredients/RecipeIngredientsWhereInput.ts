import { StringFilter } from "../../util/StringFilter";
import { IngredientsWhereUniqueInput } from "../ingredients/IngredientsWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { RecipesWhereUniqueInput } from "../recipes/RecipesWhereUniqueInput";

export type RecipeIngredientsWhereInput = {
  id?: StringFilter;
  ingredient?: IngredientsWhereUniqueInput;
  quantity?: IntNullableFilter;
  recipe?: RecipesWhereUniqueInput;
};
