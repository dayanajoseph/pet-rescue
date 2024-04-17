import React from 'react';
import { Box, Button, Typography, Container, Paper, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  const theme = useTheme(); // Access theme here to use throughout the component

  return (
    <Container maxWidth="xl" disableGutters>
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
          width: '100vw',
          minHeight: '60vh',
          color: theme.palette.common.white,
          textAlign: 'center',
          marginBottom: 4
        }}
      >
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          Welcome to Pet Rescue
        </Typography>
        <Button variant="contained" color="secondary" component={Link} to="/report">
          Report a Pet
        </Button>
      </Paper>

      {/* Services Section */}
      <ServicesSection theme={theme} />
    </Container>
  );
};

// Define a separate component for services section
const ServicesSection = ({ theme }) => (
  <Box sx={{ my: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', px: 2 }}>
    <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'medium' }}>
      Our Services
    </Typography>
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
        gap: 3,
        width: '100%'
      }}
    >
      <ServiceCard
        title="Pet Adoption"
        description="Find your new best friend with our pet adoption service."
        theme={theme}
      />
      <ServiceCard
        title="Lost & Found Pets"
        description="Report and search for lost and found pets in your area."
        theme={theme}
      />
      <ServiceCard
        title="Volunteer Opportunities"
        description="Join our volunteer program and help pets in need."
        theme={theme}
      />
    </Box>
  </Box>
);

// Update the ServiceCard to receive the theme as a prop
const ServiceCard = ({ title, description, theme }) => (
  <Paper sx={{
    p: 2,
    textAlign: 'center',
    backgroundColor: theme.palette.background.paper,
    boxShadow: 'none',
    border: '1px solid',
    borderColor: theme.palette.divider,
  }}>
    <Typography variant="h6" gutterBottom>
      {title}
    </Typography>
    <Typography variant="body1">
      {description}
    </Typography>
  </Paper>
);

export default Home;
