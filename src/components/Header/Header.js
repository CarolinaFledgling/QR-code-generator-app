import { Box, Typography } from "@mui/material";

function Header() {
  return (
    <Box>
      <Typography variant="h1" sx={{ fontSize: "2rem", }}>QR Code Generator</Typography>
      <Typography variant="body1" sx={{ textAlign: "center", mt: "10px", mb: "10px" }}>Paste a url and create QR code</Typography>
    </Box>
  );
}

export default Header;
