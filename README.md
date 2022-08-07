# QR Code Generator app

To practice React ❤️ , MUI, Canvas and Download Files feature in the browser I created a QR Code Generator app that is FREE for anyone to use with no sign-up or account required - fully functional, 100% ad-free.

## Installation

Install my-project with npm

```bash
  npm install my-project
  cd my-project
```

## Lessons Learned

Downloading files is an essential aspect of surfing the internet. Tons of files are downloaded from the internet every day

To download a file using Javascript fetch, return the result as a blob, and create a download link to the blob object.

```javascript
function fetchFile(url) {
  fetch(url)
    .then((res) => res.blob())
    .then((file) => {
      let tempUrl = URL.createObjectURL(file);
      let linkTag = document.createElement("a");
      linkTag.href = tempUrl;
      linkTag.download = "filename";
      document.body.appendChild(linkTag);
      linkTag.click();
      linkTag.remove();
    });
}
```

The HTMLCanvasElement.toDataURL() method returns a data URL containing a representation of the image in the format specified by the type parameter.

```javascript
const dataURL = canvasElementRef.current.toDataURL();
```

The `<canvas>` element allows you to draw graphics on a web page using JavaScript.
Every canvas has two elements that describes the height and width of the canvas i.e. height and width respectively.
To clear HTML canvas we use The clearRect() method to clear the pixels in a given rectangle

```javascript
const ctx = canvas.getContext("2d");
ctx.clearRect(0, 0, canvas.width, canvas.height);
```

## DEMO Link

[QR Code Generator](https://qr-code-tool.netlify.app/)
