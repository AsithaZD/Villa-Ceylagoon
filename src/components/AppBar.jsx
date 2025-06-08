import React, { useState } from 'react';
import {
  AppBar as MuiAppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Button,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function AppBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      <MuiAppBar
        position="sticky"
        elevation={0}
        sx={{
          backgroundColor: '#F5FFF8', // Light background
          borderBottom: '1px solid #BFD8C2', // subtle divider
          color: '#2F3E46',
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              fontWeight: 'bold',
              color: '#2F3E46',
              fontFamily: 'Georgia, serif',
            }}
          >
           Villa Ceylagoon
          </Typography>

          {/* Desktop Nav */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
            {navLinks.map((link) => (
              <Button
                key={link.label}
                href={link.href}
                sx={{
                  color: '#4C5C50',
                  fontWeight: 500,
                  '&:hover': {
                    backgroundColor: '#A8D5BA',
                    color: '#2F3E46',
                  },
                }}
              >
                {link.label}
              </Button>
            ))}
          </Box>

          {/* Mobile Menu Icon */}
          <IconButton
            edge="end"
            onClick={toggleDrawer(true)}
            sx={{ display: { md: 'none' }, color: '#2F3E46' }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </MuiAppBar>

      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: 250,
            backgroundColor: '#F5FFF8',
            height: '100%',
          }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {navLinks.map((link) => (
              <ListItem button component="a" href={link.href} key={link.label}>
                <ListItemText
                  primary={link.label}
                  primaryTypographyProps={{
                    sx: {
                      color: '#2F3E46',
                      fontWeight: 500,
                    },
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
