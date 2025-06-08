import React from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Divider,
  Stack,
} from '@mui/material';

import HotelIcon from '@mui/icons-material/Hotel';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import SpaIcon from '@mui/icons-material/Spa';
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';
import ChildCareIcon from '@mui/icons-material/ChildCare';

const iconMap = {
  'Deluxe Room': <HotelIcon sx={{ color: '#8E7AB5' }} />,
  'Suite': <HotelIcon sx={{ color: '#8E7AB5' }} />,
  'Dinner': <RestaurantMenuIcon sx={{ color: '#FF8C42' }} />,
  'Meals': <RestaurantMenuIcon sx={{ color: '#FF8C42' }} />,
  'Breakfast': <FreeBreakfastIcon sx={{ color: '#FFB74D' }} />,
  'Yoga': <SelfImprovementIcon sx={{ color: '#4DB6AC' }} />,
  'Spa': <SpaIcon sx={{ color: '#9575CD' }} />,
  'Kids': <ChildCareIcon sx={{ color: '#64B5F6' }} />,
};

const getIcon = (text) => {
  const match = Object.entries(iconMap).find(([keyword]) =>
    text.toLowerCase().includes(keyword.toLowerCase())
  );
  return match ? match[1] : <SpaIcon sx={{ color: '#BDBDBD' }} />; // default fallback icon
};

const packages = [
  {
    title: 'Romantic Escape',
    price: 'LKR 18,000',
    features: [
      '1 Night Stay in Deluxe Room',
      'Private Candlelight Dinner',
      'Breakfast Included',
    ],
  },
  {
    title: 'Family Getaway',
    price: 'LKR 28,000',
    features: [
      '2 Nights in Family Suite',
      'All Meals Included',
      'Access to Kids Play Area',
    ],
  },
  {
    title: 'Wellness Retreat',
    price: 'LKR 22,000',
    features: [
      '1 Night Stay in Garden View Room',
      'Morning Yoga Session',
      'Ayurvedic Spa Treatment',
    ],
  },
];

export default function Packages() {
  return (
    <Box id="packages" sx={{ py: 10, backgroundColor: '#F5FFF8' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          fontWeight={600}
          textAlign="center"
          gutterBottom
          sx={{ color: '#2F3E46', fontFamily: 'Georgia, serif' }}
        >
          Our Packages
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
          sx={{ color: '#4C5C50', lineHeight: 1.7 }}
        >
          Choose a package that suits your getaway style – whether it's romance, relaxation, or family fun.
        </Typography>

        <Grid container spacing={5} justifyContent="center">
          {packages.map((pkg, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={index}
              sx={{ display: 'flex', justifyContent: 'center' }}
            >
              <Card
                sx={{
                  width: 300,
                  height: 360,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderRadius: 5,
                  px: 2,
                  py: 3,
                  background: 'rgba(255, 255, 255, 0.85)',
                  backdropFilter: 'blur(8px)',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 24px rgba(76, 92, 80, 0.25)',
                  },
                }}
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    gutterBottom
                    sx={{ color: '#2F3E46', textAlign: 'center' }}
                  >
                    {pkg.title}
                  </Typography>
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{ color: '#4C5C50', fontWeight: 600, textAlign: 'center' }}
                  >
                    {pkg.price}
                  </Typography>
                  <Divider sx={{ my: 2, borderColor: '#BFD8C2' }} />
                  <Stack spacing={1}>
                    {pkg.features.map((feature, i) => (
                      <Box key={i} display="flex" alignItems="center">
                        {getIcon(feature)}
                        <Typography
                          variant="body2"
                          sx={{ color: '#6B7A7C', ml: 1 }}
                        >
                          {feature}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>
                </CardContent>
                <CardActions sx={{ justifyContent: 'center', pt: 1 }}>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: '#4C5C50',
                      borderRadius: '24px',
                      px: 4,
                      fontWeight: 500,
                      '&:hover': {
                        backgroundColor: '#2F3E46',
                      },
                    }}
                  >
                    Book Now
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
