import { Button, Popover, Typography } from "@mui/material";
import React from 'react';



function PopoverButton() {
  // popover
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return <>
    <Button aria-describedby={id} variant="contained" onClick={handleClick}>
      Info
    </Button>
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
    >
      <Typography sx={{ p: 2 }}>100% ad-free 🤭</Typography>
    </Popover>
  </>;
}
export default PopoverButton;
