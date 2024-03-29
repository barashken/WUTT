import React from 'react';
import { Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Welcome = () => {
  const buttonStyle = {
    borderRadius: '63px',
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // Gray color
    color: '#212529', // Text color
    display: 'inline-flex',
    textTransform: 'none', // To prevent uppercase text
    fontWeight: 'bold', // Set font weight if needed
    fontFamily: 'Jura, Arial, sans-serif',
    padding: '15px 45px',
    gap: '10px',
    fontSize: '1.5rem',
  };

  return (
    <div className="welcome-container">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        p={1}
      >
        <Typography variant="h1" gutterBottom fontFamily="Jura, Arial, sans-serif">
          Find Yourself Outside
        </Typography>
        <p style={{ margin: '10px' }}></p>
        <Box my={1} />
        <Typography variant="h4" color="textSecondary" gutterBottom fontFamily="Quattrocento, Georgia, serif">
          Plan an unforgettable trip
        </Typography>
        <Box my={1} />
        <Typography variant="h4" color="textSecondary" gutterBottom fontFamily="Quattrocento, Georgia, serif">
          that will leave you with memories for a lifetime!
        </Typography>
        <p style={{ margin: '10px' }}></p>
        <Box my={2} />
        <p style={{ margin: '10px' }}></p>
        <Button style={buttonStyle} variant="contained" component={Link} to="/travel-form">
          Find Your Trip
        </Button>
      </Box>
    </div>
  );
};

export default Welcome;
