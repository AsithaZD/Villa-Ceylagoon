import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Link,
  IconButton,
  Stack,
  Divider,
  Tooltip,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#2F3E46", // dark slate for contrast
        color: "#ffffff",
        pt: 8,
        pb: 4,
        mt: 10,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          {/* Branding */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography
              variant="h6"
              fontWeight="bold"
              gutterBottom
              sx={{ fontFamily: "Georgia, serif" }}
            >
              Villa Ceylagoon
            </Typography>
            <Typography variant="body2" color="#A8D5BA">
              A peaceful escape in the heart of nature — elegant villas,
              personalized service, and total tranquility.
            </Typography>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Contact
            </Typography>
            <Typography variant="body2" color="#A8D5BA" sx={{ mb: 1 }}>
              📍 123 Green Valley, Ella, Sri Lanka
            </Typography>
            <Typography variant="body2" color="#A8D5BA" sx={{ mb: 1 }}>
              📞 +94 71 234 5678
            </Typography>
            <Typography variant="body2" color="#A8D5BA">
              ✉️ serenityvilla@email.com
            </Typography>

            <Stack direction="row" spacing={1.5} mt={2}>
              <IconButton
                href="https://facebook.com"
                target="_blank"
                aria-label="Facebook"
                sx={{ color: "#A8D5BA" }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                href="https://instagram.com"
                target="_blank"
                aria-label="Instagram"
                sx={{ color: "#A8D5BA" }}
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                href="https://wa.me/94712345678"
                target="_blank"
                aria-label="WhatsApp"
                sx={{ color: "#A8D5BA" }}
              >
                <WhatsAppIcon />
              </IconButton>
            </Stack>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Quick Links
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
                mt: 1,
              }}
            >
              {[
                { label: "Home", href: "#home" },
                { label: "About", href: "#about" },
                { label: "Gallery", href: "#gallery" },
                { label: "Packages", href: "#packages" },
                { label: "Contact", href: "#contact" },
              ].map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  underline="hover"
                  sx={{
                    color: "#A8D5BA",
                    fontSize: 14,
                    transition: "color 0.2s",
                    "&:hover": {
                      color: "#ffffff",
                    },
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: "#ffffff33" }} />

        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="body2" align="center" color="#A8D5BA">
            © {new Date().getFullYear()} Villa Ceylagoon. All rights reserved.
          </Typography>

            <IconButton
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              sx={{
                display: "block",
                color: "#A8D5BA",
                border: "1px solid #A8D5BA",
                "&:hover": {
                  color: "#ffffff",
                  borderColor: "#ffffff",
                  backgroundColor: "red",
                },
              }}
            >
              <KeyboardArrowUpIcon fontSize="small" />
            </IconButton>
        </Box>
      </Container>
    </Box>
  );
}
