import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type ShoppingCartWhereInput = {
  createdTime?: DateTimeNullableFilter;
  id?: StringFilter;
  ingredients?: JsonFilter;
};
