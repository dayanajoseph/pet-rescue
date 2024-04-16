import { createTheme } from '@mui/material/styles';

const pastelGreen = '#a2d5ab'; // A soft green color
const darkGreen = '#689f38'; // A more saturated green for contrast

const theme = createTheme({
  palette: {
    primary: {
      main: pastelGreen,
      contrastText: '#ffffff', // Ensuring text is always legible on pastel backgrounds
    },
    secondary: {
      main: darkGreen,
    },
    background: {
      default: '#f6fff8', // A very light green, almost white, for the overall background
      paper: '#e7f6e4', // Slightly darker shade for paper components
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    button: {
      textTransform: 'none', // Buttons with normal casing
    },
  },
  shape: {
    borderRadius: 8, // Rounded corners for all components
  },
});

export default theme;
