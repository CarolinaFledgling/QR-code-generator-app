import { Box } from "@mui/material";

function Canvas({canvasElementRef}) {
  return <Box sx={{
    width: "300px", height: "300px", display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }}>
    <canvas ref={canvasElementRef} width="300" height="300"></canvas>
  </Box>;
}

export default Canvas;
