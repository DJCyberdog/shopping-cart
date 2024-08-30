import { FridgeItemsWhereInput } from "./FridgeItemsWhereInput";
import { FridgeItemsOrderByInput } from "./FridgeItemsOrderByInput";

export type FridgeItemsFindManyArgs = {
  where?: FridgeItemsWhereInput;
  orderBy?: Array<FridgeItemsOrderByInput>;
  skip?: number;
  take?: number;
};
