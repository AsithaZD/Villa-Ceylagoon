import React from 'react';
import {
  Box,
  Typography,
  Container,
  TextField,
  Button,
  Divider,
  Stack,
  Paper,
} from '@mui/material';

export default function Contact() {
  return (
    <Box id="contact" sx={{ pt: 10, pb: 6, backgroundColor: '#F5FFF8' }}>
      <Container maxWidth="sm">
        <Typography
          variant="h4"
          fontWeight={600}
          textAlign="center"
          gutterBottom
          sx={{ color: '#2F3E46', fontFamily: 'Georgia, serif' }}
        >
          Get in Touch
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
          mb={4}
          sx={{ color: '#4C5C50', lineHeight: 1.7 }}
        >
          Whether you’re ready to book or just have a question, we’re here to help.
        </Typography>

        <Paper
          elevation={2}
          sx={{
            p: { xs: 3, sm: 4 },
            borderRadius: 3,
            backgroundColor: '#ffffff',
          }}
        >
          <Stack spacing={3}>
            <TextField
              label="Full Name"
              variant="outlined"
              fullWidth
              required
              size="small"
            />
            <TextField
              label="Email Address"
              variant="outlined"
              type="email"
              fullWidth
              required
              size="small"
            />
            <TextField
              label="Phone Number"
              variant="outlined"
              type="tel"
              fullWidth
              size="small"
            />
            <TextField
              label="Your Message"
              variant="outlined"
              multiline
              rows={3}
              fullWidth
              required
              size="small"
            />
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: '#4C5C50',
                '&:hover': { backgroundColor: '#2F3E46' },
              }}
            >
              Submit
            </Button>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}
