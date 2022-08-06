
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
        height: "100vh",
        width: "100%",
        backgroundColor: "#F1F2F6"
      }}>
        <Box sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: "50%",

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
