import Canvas from "./components/Canvas/Canvas";
import Footer from "./components/Footer/Footer";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";

import Box from '@mui/material/Box';

function App() {
  return (
    <Box>
      <main >
        <Header />
        <Form />
        <Canvas />
      </main>
      <Footer />
    </Box>
  );
}

export default App;
