import { createContext } from "react";
import { AppContextType } from "../types";

export const AppContext = createContext<AppContextType>({
  choices: {},
  setChoices: null,
  lang: "tur",
  setLang: null,
  displayDirection: "vertical",
  toggleDisplayDirection: null,
});

export function AppContextProvider({ value, children }: any) {
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
