import Choices from "./choices";
import { Urun } from "./urun";

export type AppContextType = {
  choices: Choices;
  setChoices: any;
  urunById: { [key: number | string]: Urun };
  lang: string;
  setLang: any;
};

export default AppContextType;
