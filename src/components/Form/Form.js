import isValidUrl from "../../helpers/isValidUrl"
import React, { useState, useRef } from 'react';
import QRCode from 'qrcode'
import { Box, Button, TextField, Typography } from "@mui/material";



function Form() {
  const [url, setUrl] = useState('')
  const [errors, setErrors] = useState({
    url: '',
  })

  let canvasElementRef = useRef(null)

  const handleGenerateCode = () => {

    console.log(isValidUrl(url));

    if (!isValidUrl(url)) {
      setErrors({
        ...errors,
        url: 'enter a valid url format 😁'
      })
    }

    if (!url || !isValidUrl(url)) return;
    //   console.log(url);
    setErrors({
      ...errors,
      url: ''
    })

    QRCode.toCanvas(canvasElementRef.current, url)
      .then(url => {
        console.log(url)
      })
      .catch(err => {
        console.error(err)
      })
  }

  const handleResetBtn = () => {
    console.log(url)
    setUrl('')
    setErrors({
      ...errors,
      url: ''
    })
    const canvas = canvasElementRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

  }


  function fetchFile(url) {
    //fetching file & returning as blob object
    fetch(url)
      .then((res) => res.blob())
      .then((file) => {
        let tempUrl = URL.createObjectURL(file);
        console.log("file", file);
        console.log("tempUrl", tempUrl);
        let linkTag = document.createElement("a");
        linkTag.href = tempUrl;
        linkTag.download = "filename";
        document.body.appendChild(linkTag);
        linkTag.click();
        linkTag.remove();
      });
  }

  const handleDownloadFile = () => {
    // download file

    if (!url || !isValidUrl(url)) return;

    const dataURL = canvasElementRef.current.toDataURL();
    console.log("dataURL", dataURL);
    fetchFile(dataURL);
  }


  return (
    <Box>
      <form action="#">
        <Box>

          <TextField label="Enter url:" id="outlined-basic" variant="outlined" value={url}
            onChange={e => setUrl(e.target.value)} sx={{ mt: "10px", width: "100%" }} />
        </Box>

        <Typography color="error" sx={{ mt: "10px", width: "100%" }}>{errors.url}</Typography>
        <div>
          <Button sx={{ mt: "10px", width: "100%" }} color="secondary" variant="contained" onClick={handleGenerateCode} >Generate QR Code</Button>
          <Button sx={{ mt: "10px", width: "100%" }} color="primary" variant="contained" onClick={handleResetBtn} >Reset</Button>
        </div>
        <Button onClick={handleDownloadFile} sx={{ mt: "10px", width: "100%" }} color="info" variant="contained">Download File</Button>
      </form>
      <Box sx={{
        width: "300px", height: "300px", display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
        <canvas ref={canvasElementRef} width="300" height="300"></canvas>
      </Box>
    </Box>

  );
}

export default Form;

