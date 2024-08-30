import { FridgeItems as TFridgeItems } from "../api/fridgeItems/FridgeItems";

export const FRIDGEITEMS_TITLE_FIELD = "name";

export const FridgeItemsTitle = (record: TFridgeItems): string => {
  return record.name?.toString() || String(record.id);
};
