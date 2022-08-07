import { Alert } from "@mui/material";


function ValidationText({ errors }) {
  return <>
    {errors.url && <Alert sx={{ mt: "10px" }} variant="standard" color="error">
      {errors.url}
    </Alert>}
  </>;
}
export default ValidationText;
