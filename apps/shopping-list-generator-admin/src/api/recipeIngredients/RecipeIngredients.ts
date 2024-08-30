import { Ingredients } from "../ingredients/Ingredients";
import { Recipes } from "../recipes/Recipes";

export type RecipeIngredients = {
  createdAt: Date;
  id: string;
  ingredient?: Ingredients | null;
  quantity: number | null;
  recipe?: Recipes | null;
  updatedAt: Date;
};
