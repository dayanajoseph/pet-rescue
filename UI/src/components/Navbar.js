import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Pet Rescue
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/signin">Sign In</Button>
        <Button color="inherit" component={Link} to="/signup">Sign Up</Button>
        <Button color="inherit" component={Link} to="/volunteers">Volunteers</Button>
        <Button color="inherit" component={Link} to="/pets">Donation</Button>
        <Button color="inherit" component={Link} to="/pets">Pets</Button>

      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
