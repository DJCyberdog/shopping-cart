import { Ingredients as TIngredients } from "../api/ingredients/Ingredients";

export const INGREDIENTS_TITLE_FIELD = "name";

export const IngredientsTitle = (record: TIngredients): string => {
  return record.name?.toString() || String(record.id);
};
