import { createContext } from "react";

export const Context = createContext({ app: "none" });

export default function ContextProvider({ children }) {
  return <Context.Provider>{children}</Context.Provider>;
}
