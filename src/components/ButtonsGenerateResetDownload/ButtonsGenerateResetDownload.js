import { Box, Button } from "@mui/material";


//[TODO] to fix: when we enter url into input we are able to download an empty file png, solution after generating qr code and displaying 
// we should have the possibility to download file, not just when we write url 

function ButtonsGenerateResetDownload({ handleGenerateCode, handleResetBtn, handleDownloadFile }) {
  return <>
    <Box sx={{ mt: "10px", display: "flex", flexDirection: { xs: 'column', md: 'row' }, justifyContent: "space-between" }}>
      <Button sx={{ mt: "10px", width: { xs: '100%', md: '70%' } }} color="secondary" variant="contained" onClick={handleGenerateCode}>Generate QR Code</Button>
      <Button sx={{ mt: "10px", width: { xs: '100%', md: '25%' } }} color="primary" variant="contained" onClick={handleResetBtn}>Reset</Button>
    </Box>
    <Button onClick={handleDownloadFile} sx={{ mt: "10px", width: "100%" }} color="info" variant="contained">Download File</Button>
  </>;
}
export default ButtonsGenerateResetDownload;
