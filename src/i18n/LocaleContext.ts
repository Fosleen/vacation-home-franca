import { createContext } from "react";
import { LocaleContextType } from "../common/types";

export const LocaleContext = createContext<LocaleContextType>({
  locale: "",
  setLocale: () => {},
});
