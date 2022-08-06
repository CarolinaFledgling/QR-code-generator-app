import { Box, Link, Typography } from "@mui/material";

function Footer() {
  return (
    <Box sx={{
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      mt: "10px",

    }}>
      <Typography color="info" sx={{ mr: "5px", fontWeight: "500" }}>
        Made with ❤️ by
      </Typography>

      <Link
        color="inherit"
        className="linkedin-link"
        href="https://www.linkedin.com/in/karolina-kuli%C5%84ska-870124111/"
        target="_blank"
        rel="noopener noreferrer">
        Karolina Kulinska
      </Link>

    </Box>
  );
}

export default Footer;
