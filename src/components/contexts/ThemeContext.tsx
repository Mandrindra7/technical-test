'use client';

import { createContext, useContext, PropsWithChildren, useState } from 'react';

export declare type ThemeValue = 'dark' | 'light';

export interface ThemeContextValue<T extends string> {
  theme: T;
  toggleTheme?: () => void 
}

export const ThemeContext = createContext<ThemeContextValue<ThemeValue>>({
  theme: 'light'
});

export const ThemeProvider = ({ children }: PropsWithChildren<ThemeValue>) => {
  const [theme, setTheme] = useState<ThemeValue>('light');
 
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  
  return (
    <ThemeContext.Provider
      value={{
        theme ,
        toggleTheme
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
