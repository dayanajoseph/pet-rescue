import React, { useState } from 'react';
import { Button, TextField, Box, Typography, Container } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate(); // Hook for navigation

  const handleChange = (event) => {
    
    const { name, value } = event.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let attempts = 0;
  
    while (attempts < 3) { // Try to send the request up to 3 times
      try {
        const response = await axios.post('http://localhost:8012/signin', formData, {
          timeout: 5000
        });
        console.log('Sign in successful:', response.data);
        navigate('/');
        return; // Exit the function after success
      } catch (error) {
        attempts++;
        console.error('Attempt', attempts, 'Error signing in:', error.response ? error.response.data : error.message);
  
        if (attempts >= 3) { // If all attempts fail, handle the error
          // Handle errors here, such as showing an error message to the user
          break; // Break out of the loop after maximum attempts
        }
      }
    }
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
          Sign In
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            autoComplete="current-password"
            value={formData.password}
            onChange={handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default SignIn;
