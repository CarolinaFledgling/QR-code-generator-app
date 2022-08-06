import { Box } from "@mui/material";

function Footer() {
  return (
    <Box sx={{
      width:"100%",
      display: "flex",
      justifyContent: "center",
   

    }}>
      <p> Made with ❤ by
        <a
          className="App-link"
          href="https://www.linkedin.com/in/karolina-kuli%C5%84ska-870124111/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Karolina Kulinska
        </a>
      </p>
    </Box>
  );
}

export default Footer;
