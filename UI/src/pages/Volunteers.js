import React, { useState, useEffect } from 'react';
import { List, ListItem, ListItemText, Container, Typography } from '@mui/material';
import axios from 'axios';

const Volunteers = () => {
  const [volunteers, setVolunteers] = useState([]);

  useEffect(() => {
    // Placeholder for fetching volunteer data
    axios.get('/api/volunteers')
      .then(response => setVolunteers(response.data))
      .catch(error => console.error('Error fetching volunteers:', error));
  }, []);

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Volunteers
      </Typography>
      <List>
        {volunteers.map((volunteer, index) => (
          <ListItem key={index}>
            <ListItemText primary={volunteer.name} secondary={volunteer.email} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Volunteers;
