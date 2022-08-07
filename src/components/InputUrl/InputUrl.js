import { Box, TextField } from "@mui/material";



function InputUrl({ url, setUrl }) {
  return <Box>
    <TextField label="Enter url: https://example.com" id="outlined-basic" variant="outlined" value={url}
      onChange={e => setUrl(e.target.value)} sx={{ mt: "10px", width: "100%" }} />
  </Box>;
}
export default InputUrl;
