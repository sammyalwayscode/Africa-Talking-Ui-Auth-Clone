import React from 'react';
// import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Products
      </div>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>SMS</MenuItem>
        <MenuItem onClick={handleClose}>USSD</MenuItem>
        <MenuItem onClick={handleClose}>Voice</MenuItem>
        <MenuItem onClick={handleClose}>Airtime</MenuItem>
        <MenuItem onClick={handleClose}>iot</MenuItem>
      </Menu>
    </div>
  );
}
