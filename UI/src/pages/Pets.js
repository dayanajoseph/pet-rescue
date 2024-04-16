import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Grid, Container } from '@mui/material';
import axios from 'axios';

const Pets = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    // Placeholder for fetching pets data
    axios.get('/api/pets')
      .then(response => setPets(response.data))
      .catch(error => console.error('Error fetching pets:', error));
  }, []);

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" gutterBottom>
        Reported Pets
      </Typography>
      <Grid container spacing={2}>
        {pets.map((pet, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h2">
                  {pet.status}
                </Typography>
                <Typography color="textSecondary">
                  Location: {pet.location}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Pets;
