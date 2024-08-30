import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type FridgeItemsWhereInput = {
  expirationDate?: IntNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  quantity?: IntNullableFilter;
};
