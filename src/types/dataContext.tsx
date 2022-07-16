import { ItemData, ItemType } from "./item";

export interface DataContextType {
  itemData: ItemData;
  itemById: { [key: number | string]: ItemType };
}

export default DataContextType;
