import { createTheme, ThemeProvider, Switch, FormControlLabel } from '@mui/material';


// Define the light theme properties
export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2', // Example: blue
    },
    secondary: {
      main: '#dc004e', // Example: pink
    },
    text: {
      primary: '#0d0d0d', // Dark text for light background
      secondary: '#5f6368', // Slightly lighter text
    },
    background: {
      paper: '#ffffff', // White background for components
      default: '#f4f5f7', // Light grey background for the page
    },
  },
});