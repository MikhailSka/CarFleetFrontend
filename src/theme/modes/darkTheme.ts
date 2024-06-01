import { createTheme } from '@mui/material';



// Define the dark theme properties
export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9', // Example: light blue
    },
    secondary: {
      main: '#f48fb1', // Example: light pink
    },
    text: {
      primary: '#e0e0e0', // Light text for dark background
      secondary: '#bdbdbd', // Slightly darker text
    },
    background: {
      paper: '#424242', // Dark grey background for components
      default: '#303030', // Even darker grey background for the page
    },
  },
});