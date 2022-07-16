import { ItemData, ItemType } from "../types/item";
import _itemData from "../item-data/itemData.json";
import { createContext } from "react";
import DataContextType from "../types/dataContext";

const itemData: ItemData = _itemData;

const itemById: { [key: number]: ItemType } = {};

for (const category in itemData) {
  const curItems = itemData[category].items;
  for (const itemKey in curItems) {
    const item = curItems[itemKey];
    itemById[item.id] = item;
  }
}

const DataContext = createContext<DataContextType>({
  itemData: itemData,
  itemById: itemById,
});

export default DataContext;
