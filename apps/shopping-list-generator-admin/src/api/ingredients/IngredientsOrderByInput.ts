import { SortOrder } from "../../util/SortOrder";

export type IngredientsOrderByInput = {
  createdAt?: SortOrder;
  expirationDate?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  price?: SortOrder;
  quantity?: SortOrder;
  updatedAt?: SortOrder;
};
