import React from 'react';
import { Box, Button, Typography, Container, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Container maxWidth="false" disableGutters>
      {/* Hero Section with Background Image */}
      <Paper
        sx={{
          py: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: 'url("https://source.unsplash.com/random/1600x900")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100vw', // Full viewport width
          minHeight: '100vh', // Full viewport height
          color: 'white',
          textAlign: 'center',
        }}
      >
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          Welcome to Pet Rescue
        </Typography>
        <Button variant="contained" color="primary" component={Link} to="/report" sx={{ backgroundColor: 'secondary.main' }}>
          Report a Pet
        </Button>
      </Paper>
      
      {/* Services Section */}
      <Box sx={{ my: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', px: 2 }}>
        <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'medium' }}>
          Our Services
        </Typography>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { sm: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' },
            gap: 3,
            width: '100%',
            p: 2,
          }}
        >
          <ServiceCard
            title="Pet Adoption"
            description="Find your new best friend with our pet adoption service."
          />
          <ServiceCard
            title="Lost & Found Pets"
            description="Report and search for lost and found pets in your area."
          />
          <ServiceCard
            title="Volunteer Opportunities"
            description="Join our volunteer program and help pets in need."
          />
        </Box>
      </Box>
    </Container>
  );
};

// Service Card Component for cleaner code
const ServiceCard = ({ title, description }) => {
  return (
    <Paper sx={{
      p: 2,
      textAlign: 'center',
      backgroundColor: 'background.paper',
      boxShadow: 'none',
      border: '1px solid',
      borderColor: 'divider',
    }}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1">
        {description}
      </Typography>
    </Paper>
  );
};

export default Home;
