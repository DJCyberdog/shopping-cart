import { Recipes as TRecipes } from "../api/recipes/Recipes";

export const RECIPES_TITLE_FIELD = "name";

export const RecipesTitle = (record: TRecipes): string => {
  return record.name?.toString() || String(record.id);
};
