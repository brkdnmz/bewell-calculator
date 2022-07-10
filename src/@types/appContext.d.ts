import Choices from "./choices";
import { Urun } from "./urun";

export type AppContextType = {
  choices: Choices;
  setChoices: any;
  urunById: { [key: number | string]: Urun };
  lang: "en" | "tur";
  setLang: any;
  displayDirection: "horizontal" | "vertical";
  setDisplayDirection: any;
};

export default AppContextType;
