import React, { useState } from 'react';
import { Button, TextField, Box, Typography, Container } from '@mui/material';
import axios from 'axios';

const ReportPet = () => {
  const [formData, setFormData] = useState({
    location: '',
    phone: '',
    status: '',
    image: null
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (event) => {
    setFormData({ ...formData, image: event.target.files[0] });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData();
    data.append('location', formData.location);
    data.append('phone', formData.phone);
    data.append('status', formData.status);
    data.append('image', formData.image);

    axios.post('/api/report', data)
      .then(response => console.log('Pet reported successfully:', response))
      .catch(error => console.error('Error reporting pet:', error));
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Report a Pet
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            name="location"
            label="Location"
            type="text"
            id="location"
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="phone"
            label="Phone Number"
            type="text"
            id="phone"
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="status"
            label="Status of Pet"
            type="text"
            id="status"
            onChange={handleChange}
          />
          <input
            accept="image/*"
            type="file"
            onChange={handleFileChange}
            id="image"
          />
          <Button
  type="submit"
  fullWidth
  variant="contained"
  sx={{ mt: 3, mb: 2 }} // Corrected from mb 2 to mb: 2
>
  Submit
</Button>

        </Box>
      </Box>
    </Container>
  );
};

export default ReportPet;
