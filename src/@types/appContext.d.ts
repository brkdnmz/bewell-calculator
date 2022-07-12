import Choices from "./choices";
import { ItemData, ItemType } from "./item";

export interface AppContextType {
  itemData: ItemData;
  itemById: { [key: number | string]: ItemType };
  choices: Choices;
  setChoices: any;
  lang: "en" | "tur";
  setLang: any;
  displayDirection: "horizontal" | "vertical";
  setDisplayDirection: any;
}

export default AppContextType;
