// NavigationContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";

interface NavigationContextProps {
  activePage: string;
  setActivePage: (page: string) => void;
}

const NavigationContext = createContext<NavigationContextProps | undefined>(undefined);

export const NavigationProvider = ({ children }: { children: ReactNode }) => {
  const [activePage, setActivePage] = useState<string>("Dashboard"); // Default page

  return (
    <NavigationContext.Provider value={{ activePage, setActivePage }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) throw new Error("useNavigation must be used within NavigationProvider");
  return context;
};
