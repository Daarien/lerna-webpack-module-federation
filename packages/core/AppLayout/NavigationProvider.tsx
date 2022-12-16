import { createContext, ReactNode } from "react";

export type NavigationScheme = Array<{ label: string; path: string }>;

interface NavigationProviderValue {
  scheme: NavigationScheme;
}

export const NavigationContext = createContext<
  NavigationProviderValue | undefined
>(undefined);

interface NavigationProviderProps {
  navigationScheme?: NavigationScheme;
  children: ReactNode;
}

export default function NavigationProvider({
  navigationScheme,
  children,
}: NavigationProviderProps) {
  return (
    <NavigationContext.Provider value={{ scheme: navigationScheme }}>
      {children}
    </NavigationContext.Provider>
  );
}
