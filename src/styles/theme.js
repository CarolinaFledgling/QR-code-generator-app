import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
  mode: "light",
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
    body1: {
      fontSize: "0.9375rem",
      fontWeight: 400,
      letterSpacing: "0.00938rem",
      lineHeight: 1.5,
    },
    body2: {
      fontSize: "0.8125rem",
      fontWeight: 400,
      letterSpacing: "0.01071rem",
      lineHeight: 1.43,
    },

  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1040,
      lg: 1200,
      xl: 1536,
    },
  },

  palette: {
    primary: {
      main: "#011627",
    },
    secondary: {
      main: "#FFD43B",
    },
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.60)",
    },
    info: {
      main: "#2094D5",
    },
    error: {
      main: "#DD1C1A",
    },
  },
});

export default theme;

//#F1F2F6 bgc