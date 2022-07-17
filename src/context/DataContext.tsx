import { DataContextType, ItemData, ItemType } from "../types";
import _itemData from "../item-data/itemData.json";
import { createContext } from "react";

const itemData: ItemData = _itemData;

const itemById: { [key: number]: ItemType } = {};

for (const category in itemData) {
  const curItems = itemData[category].items;
  for (const itemKey in curItems) {
    const item = curItems[itemKey];
    itemById[item.id] = item;
  }
}

export const DataContext = createContext<DataContextType>({
  itemData: itemData,
  itemById: itemById,
});
