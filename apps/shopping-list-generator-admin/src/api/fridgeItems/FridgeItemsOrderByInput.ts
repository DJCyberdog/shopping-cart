import { SortOrder } from "../../util/SortOrder";

export type FridgeItemsOrderByInput = {
  createdAt?: SortOrder;
  expirationDate?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  quantity?: SortOrder;
  updatedAt?: SortOrder;
};
