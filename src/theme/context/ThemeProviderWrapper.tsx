import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material';

import { lightTheme } from '../modes/lightTheme';
import { darkTheme } from '../modes/darkTheme';
import { ThemeContext } from './ThemeContext';

interface ThemeProviderWrapperProps {
    children: React.ReactNode;
  }

  
  export const ThemeProviderWrapper: React.FC<ThemeProviderWrapperProps> = ({ children }) => {
    const [themeMode, setThemeMode] = useState<'light' | 'dark'>('light');

  const theme = themeMode === 'light' ? lightTheme : darkTheme; // You can import the lightTheme and darkTheme you've defined earlier

  const toggleTheme = () => {
    setThemeMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
