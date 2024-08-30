import { RecipesWhereInput } from "./RecipesWhereInput";
import { RecipesOrderByInput } from "./RecipesOrderByInput";

export type RecipesFindManyArgs = {
  where?: RecipesWhereInput;
  orderBy?: Array<RecipesOrderByInput>;
  skip?: number;
  take?: number;
};
