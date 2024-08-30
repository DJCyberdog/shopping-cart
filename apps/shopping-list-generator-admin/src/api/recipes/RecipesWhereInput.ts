import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { RecipeIngredientsListRelationFilter } from "../recipeIngredients/RecipeIngredientsListRelationFilter";

export type RecipesWhereInput = {
  cookingTime?: IntNullableFilter;
  id?: StringFilter;
  isFavorite?: BooleanNullableFilter;
  name?: StringNullableFilter;
  recipeIngredientsItems?: RecipeIngredientsListRelationFilter;
  recipeType?: "Option1";
  servings?: IntNullableFilter;
};
