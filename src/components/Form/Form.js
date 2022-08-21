import isValidUrl from "../../helpers/isValidUrl"
import React, { useState, useRef } from 'react';
import QRCode from 'qrcode'
import { Box } from "@mui/material";
import Canvas from "../Canvas/Canvas";
import ValidationText from "../ValidationText/ValidationText";
import InputUrl from "../InputUrl/InputUrl";
import ButtonsGenerateResetDownload from "../ButtonsGenerateResetDownload/ButtonsGenerateResetDownload";
import PopoverButton from "../PopoverButton/PopoverButton";



function Form() {
  const [url, setUrl] = useState('')
  const [isDisableBtn, setIsDisableBtn] = useState(true)
  const [errors, setErrors] = useState({
    url: '',
  })

  let canvasElementRef = useRef(null)

  const handleGenerateCode = () => {

    console.log(isValidUrl(url));

    if (!isValidUrl(url)) {
      setErrors({
        ...errors,
        url: 'enter a valid url format 😥'
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
        setIsDisableBtn(false)
      })
      .catch(err => {
        console.error(err)
      })
  }

  const handleResetBtn = () => {
    setIsDisableBtn(true)
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


    if (!url || !isValidUrl(url)) return;

    const dataURL = canvasElementRef.current.toDataURL();
    console.log("dataURL", dataURL);
    fetchFile(dataURL);
  }




  return (
    <Box>
      <form action="#">
        <InputUrl url={url} setUrl={setUrl} />
        <ValidationText errors={errors} />
        <ButtonsGenerateResetDownload
          handleGenerateCode={handleGenerateCode}
          handleResetBtn={handleResetBtn}
          handleDownloadFile={handleDownloadFile}
          isDisableBtn={isDisableBtn}
        />
      </form>
      <Canvas canvasElementRef={canvasElementRef} />
      <PopoverButton />
    </Box>

  );
}

export default Form;











