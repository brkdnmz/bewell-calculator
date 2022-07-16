import Choices from "./choices";

export interface AppContextType {
  choices: Choices;
  setChoices: any;
  lang: "en" | "tur";
  setLang: any;
  displayDirection: "horizontal" | "vertical";
  toggleDisplayDirection: any;
}

export default AppContextType;
