import { IngredientsWhereInput } from "./IngredientsWhereInput";
import { IngredientsOrderByInput } from "./IngredientsOrderByInput";

export type IngredientsFindManyArgs = {
  where?: IngredientsWhereInput;
  orderBy?: Array<IngredientsOrderByInput>;
  skip?: number;
  take?: number;
};
