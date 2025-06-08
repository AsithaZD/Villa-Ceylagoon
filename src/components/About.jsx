import React from 'react';
import { Box, Typography, Container, Divider, Grid } from '@mui/material';

export default function About() {
  return (
    <Box
      id="about"
      sx={{
        py: { xs: 8, md: 10 },
        backgroundColor: '#F5FFF8', // light mint background
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h4"
          fontWeight={600}
          textAlign="center"
          gutterBottom
          sx={{ color: '#2F3E46', fontFamily: 'Georgia, serif' }}
        >
          About Us
        </Typography>

        <Divider
          sx={{
            my: 3,
            width: '60px',
            mx: 'auto',
            borderBottomWidth: 2,
            borderColor: '#A8D5BA', // gentle green accent
          }}
        />

        <Typography
          variant="body1"
          textAlign="center"
          mb={6}
          sx={{ color: '#4C5C50', lineHeight: 1.8 }}
        >
          At Serenity Villa, we offer a peaceful escape where modern comfort meets the heart of nature.
          Whether you're seeking a romantic getaway, a family retreat, or a quiet recharge, our villa is
          designed with elegance, warmth, and sustainability in mind.
        </Typography>

        <Grid container spacing={5}>
          <Grid item xs={12} sm={6}>
            <Typography
              variant="h6"
              fontWeight={500}
              gutterBottom
              sx={{ color: '#2F3E46' }}
            >
              Luxury in Every Detail
            </Typography>
            <Typography variant="body2" sx={{ color: '#6B7A7C', lineHeight: 1.7 }}>
              From handcrafted interiors and panoramic views to locally inspired cuisine,
              every space is curated for comfort, beauty, and immersive relaxation.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography
              variant="h6"
              fontWeight={500}
              gutterBottom
              sx={{ color: '#2F3E46' }}
            >
              Sustainable Living
            </Typography>
            <Typography variant="body2" sx={{ color: '#6B7A7C', lineHeight: 1.7 }}>
              We embrace green hospitality — solar-powered amenities, eco-conscious architecture,
              and organic gardens reflect our love for both guests and nature.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
