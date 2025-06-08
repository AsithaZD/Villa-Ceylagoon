import React from 'react';
import {
  Box,
  Container,
  Typography,
  Divider,
  Grid,
  Card,
  CardMedia,
} from '@mui/material';

const galleryImages = [
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=60',
   'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=60',
];

export default function Gallery() {
  return (
    <Box id="gallery" sx={{ py: 10, backgroundColor: '#F5FFF8' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          textAlign="center"
          fontWeight={600}
          gutterBottom
          sx={{ color: '#2F3E46', fontFamily: 'Georgia, serif' }}
        >
          Gallery
        </Typography>

        <Divider
          sx={{
            my: 3,
            width: '60px',
            mx: 'auto',
            borderBottomWidth: 2,
            borderColor: '#A8D5BA',
          }}
        />

        <Typography
          variant="body1"
          textAlign="center"
          mb={6}
          sx={{ color: '#4C5C50' }}
        >
          Discover the beauty and serenity of our villa through these handpicked moments.
        </Typography>

        <Grid container sx={{ width: '100%' }} spacing={1}>
          {galleryImages.map((src, index) => (
            <Grid
              item
              xs={12}      // 1 per row on mobile
              sm={6}       // 2 per row on tablets
              md={3}       // 3 per row on laptops/desktops
              key={index}
            >
              <Card
                sx={{
                  borderRadius: 3,
                  overflow: 'hidden',
                  boxShadow: 3,
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.02)',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  image={src}
                  alt={`Gallery image ${index + 1}`}
                  sx={{
                    height: 250,
                    width: '100%',
                    objectFit: 'cover',
                  }}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
