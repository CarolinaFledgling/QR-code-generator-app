import isValidUrl from "../../helpers/isValidUrl"
import React, { useState, useRef } from 'react';


function Form() {
  const [url, setUrl] = useState('')
  const [errors, setErrors] = useState({
    url: '',
  })

  //let spanElement = useRef("invalid url, check example in the placeholder")

  const handleGenerateCode = () => {
    console.log(isValidUrl(url));
    if (!isValidUrl(url)) {
      setErrors({
        ...errors,
        url: 'sorry invalid url 😊, check example in the placeholder'
      })
    }
  }

  return (
    <form action="#" >
      <label htmlFor="url">
        Enter url:
      </label>
      <input
        type="url"
        placeholder="https://example.com"
        value={url}
        onChange={e => setUrl(e.target.value)}
      />
      <p >{errors.url}</p>
      <div>
        <button onClick={handleGenerateCode} >Generate QR Code</button>
        <button >Reset</button>
      </div>
      <button>Download File</button>
    </form>
  );
}

export default Form;
