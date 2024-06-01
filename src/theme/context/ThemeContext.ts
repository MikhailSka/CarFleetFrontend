import React, { createContext } from 'react';

export const ThemeContext = createContext<{
  themeMode: 'light' | 'dark';
  toggleTheme: () => void;
}>({
  themeMode: 'light',
  toggleTheme: () => {},
});
