import { InputJsonValue } from "../../types";

export type ShoppingCartCreateInput = {
  createdTime?: Date | null;
  ingredients?: InputJsonValue;
};
