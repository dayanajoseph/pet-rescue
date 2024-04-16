import React from 'react';
import { Box, Button, Typography, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Welcome to Pet Rescue
        </Typography>
        <Button variant="contained" color="primary" component={Link} to="/report">
          Report a Pet
        </Button>
        <Typography variant="h5" component="h2" sx={{ mt: 4 }}>
          Services
        </Typography>
        {/* Add service details here */}
      </Box>
    </Container>
  );
};

export default Home;
