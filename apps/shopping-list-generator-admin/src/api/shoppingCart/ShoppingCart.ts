import { JsonValue } from "type-fest";

export type ShoppingCart = {
  createdAt: Date;
  createdTime: Date | null;
  id: string;
  ingredients: JsonValue;
  updatedAt: Date;
};
