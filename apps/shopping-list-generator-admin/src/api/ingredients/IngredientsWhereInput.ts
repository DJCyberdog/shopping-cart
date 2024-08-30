import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { RecipeIngredientsListRelationFilter } from "../recipeIngredients/RecipeIngredientsListRelationFilter";

export type IngredientsWhereInput = {
  expirationDate?: DateTimeNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  price?: FloatNullableFilter;
  quantity?: IntNullableFilter;
  recipeIngredientsItems?: RecipeIngredientsListRelationFilter;
};
