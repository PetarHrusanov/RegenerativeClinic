import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Box, 
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Treatments', path: '/treatments' },
    { name: 'Doctors', path: '/doctors' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawer = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {navItems.map((item) => (
          <ListItem button key={item.name} component={Link} to={item.path}>
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
        <ListItem button component={Link} to="/book" sx={{ bgcolor: 'primary.main', color: 'white', mt: 2 }}>
          <ListItemText primary="Book Appointment" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar position="static" sx={{ bgcolor: 'white', color: 'primary.main', boxShadow: 1 }}>
      <Toolbar>
        <LocalHospitalIcon sx={{ mr: 1, color: 'primary.main' }} />
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            flexGrow: 1,
            textDecoration: 'none',
            color: 'primary.main',
            fontWeight: 'bold',
            letterSpacing: '0.5px'
          }}
        >
          Regenerative Clinic
        </Typography>

        {isMobile ? (
          <>
            <Button 
              variant="contained" 
              component={Link} 
              to="/book"
              sx={{ 
                mr: 2,
                borderRadius: '20px',
                px: 2
              }}
            >
              Book
            </Button>
            <IconButton
              edge="end"
              color="primary"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
            >
              {drawer}
            </Drawer>
          </>
        ) : (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {navItems.map((item) => (
              <Button 
                key={item.name} 
                component={Link} 
                to={item.path}
                sx={{ 
                  mx: 1,
                  color: 'text.primary',
                  '&:hover': {
                    color: 'primary.main',
                  }
                }}
              >
                {item.name}
              </Button>
            ))}
            <Button 
              variant="contained" 
              component={Link} 
              to="/book"
              sx={{ 
                ml: 2,
                borderRadius: '20px',
                px: 3
              }}
            >
              Book Appointment
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
