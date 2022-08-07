
import Footer from "./components/Footer/Footer";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";

import Box from '@mui/material/Box';
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "../src/styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <Box sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "#F1F2F6"
      }}>
        <Box sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          borderRadius: "4px",
          background: "#FBFAF8",
          padding: "30px",
          transition: "height 0.2s ease",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
        }} >
          <Header />
          <Form />
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
