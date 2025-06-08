import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import cover from '../../src/assets/villa.png';


export default function Home() {
  return (
    <Box
      id="home"
      sx={{
        position: 'relative',
        minHeight: '100vh',
        backgroundImage: `url(${cover})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: '#fff',
        overflow: 'hidden',
        backgroundRepeat: 'no-repeat',     // Prevents tiling
        backgroundAttachment: 'scroll', 
      }}
    >
      {/* Dark Overlay */}
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          backgroundColor: 'rgba(44, 62, 52, 0.5)', // Deep Olive with transparency
          zIndex: 1,
        }}
      />

      <Container sx={{ position: 'relative', zIndex: 2 }}>
        <Typography
          variant="h2"
          fontWeight="bold"
          gutterBottom
          sx={{
            fontSize: { xs: '1.8rem', md: '3.2rem' },
            fontFamily: 'Georgia, serif',
          }}
        >
          Welcome to Villa Ceylagoon
        </Typography>
        <Typography
          variant="h5"
          mb={4}
          sx={{
            fontSize: { xs: '1.25rem', md: '1.5rem' },
            fontWeight: 300,
          }}
        >
          Escape to nature with luxury and comfort
        </Typography>
        <Button
          variant="contained"
          size="large"
          href="#about"
          sx={{
            backgroundColor: '#4C5C50',
            '&:hover': {
              backgroundColor: '#2F3E46',
            },
          }}
        >
          Explore More
        </Button>
      </Container>
    </Box>
  );
}
