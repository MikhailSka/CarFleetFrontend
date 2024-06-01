import React from 'react';
import { Box, Typography } from '@mui/material';
import { useThemeContext } from 'theme/context/useThemeContext';

export const Footer: React.FC = () => {
  const { themeMode } = useThemeContext();

  const year = new Date().getFullYear();
  const text = `© ${year} Your Company - ${themeMode.toUpperCase()} Mode`;

  return (
    <Box
      component="footer"
      sx={{
        padding: 2,
        textAlign: 'center',
        borderRadius: 5,
        backgroundColor: 'primary.main',
        boxShadow: 5
      }}
    >
      <Typography variant="subtitle1">
        {text}
      </Typography>
    </Box>
  );
};
