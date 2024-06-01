import React from 'react';
import { AppBar, Toolbar, Typography, Switch, FormControlLabel } from '@mui/material';
import { useThemeContext } from 'theme/context/useThemeContext';

export const Header: React.FC = () => {
  const { themeMode, toggleTheme } = useThemeContext(); 

  return (
    <AppBar position="static" color="primary" sx={{ borderRadius: 5}}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Theme Switcher Header
        </Typography>
        <FormControlLabel
          control={
            <Switch
              checked={themeMode === 'dark'}
              onChange={toggleTheme} 
            />
          }
          label={themeMode === 'dark' ? 'Dark Mode' : 'Light Mode'}
        />
      </Toolbar>
    </AppBar>
  );
};
