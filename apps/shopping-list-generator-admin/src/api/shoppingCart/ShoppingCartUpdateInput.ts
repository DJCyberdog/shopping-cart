import { InputJsonValue } from "../../types";

export type ShoppingCartUpdateInput = {
  createdTime?: Date | null;
  ingredients?: InputJsonValue;
};
