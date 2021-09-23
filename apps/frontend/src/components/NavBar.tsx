import React from 'react';
import { MenuItem, Menu, Button, Grid, Box } from '@mui/material';

const NavBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  // const handleClick = (event: MouseEv) => {
  //     setAnchorEl(event.currentTarget);
  // };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ px: 10, py: 2, borderTop: 1, borderBottom: 1, borderColor: 'primary.main' }}>
      <Grid container direction="row">
        <Button aria-controls="simple-menu" aria-haspopup="true">
          Women Ethnic
        </Button>
        <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
        <Button>
          Women Western
        </Button>
        <Button>
          Women Western
        </Button>      <Button aria-controls="simple-menu" aria-haspopup="true">
          Women Western
        </Button>      <Button aria-controls="simple-menu" aria-haspopup="true">
          Women Western
        </Button>      <Button aria-controls="simple-menu" aria-haspopup="true">
          Women Western
        </Button>
        <Button aria-controls="simple-menu" aria-haspopup="true">
          Women Western
        </Button>
        <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
        <Button aria-controls="simple-menu" aria-haspopup="true">
          Jewellery & Accessories
        </Button>
        <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </Grid>
    </Box>
  );
};

export default NavBar;
