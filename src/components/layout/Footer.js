import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: '#f8f9fa',
        color: 'text.secondary',
        py: 4,
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="primary.main" gutterBottom>
              Regenerative Clinic
            </Typography>
            <Typography variant="body2" paragraph>
              Providing innovative regenerative treatments to enhance your quality of life.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton color="primary" aria-label="facebook">
                <FacebookIcon />
              </IconButton>
              <IconButton color="primary" aria-label="twitter">
                <TwitterIcon />
              </IconButton>
              <IconButton color="primary" aria-label="instagram">
                <InstagramIcon />
              </IconButton>
              <IconButton color="primary" aria-label="linkedin">
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="primary.main" gutterBottom>
              Quick Links
            </Typography>
            <Box component="ul" sx={{ p: 0, m: 0, listStyle: 'none' }}>
              {['Home', 'Treatments', 'Doctors', 'About', 'Contact'].map((item) => (
                <Box component="li" key={item} sx={{ mb: 1 }}>
                  <Link 
                    component={RouterLink} 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    underline="hover"
                    color="inherit"
                  >
                    {item}
                  </Link>
                </Box>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="primary.main" gutterBottom>
              Services
            </Typography>
            <Box component="ul" sx={{ p: 0, m: 0, listStyle: 'none' }}>
              {[
                'Stem Cell Therapy',
                'PRP Treatment',
                'Regenerative Injections',
                'Tissue Engineering',
                'Cellular Therapy'
              ].map((item) => (
                <Box component="li" key={item} sx={{ mb: 1 }}>
                  <Link 
                    component={RouterLink} 
                    to="/treatments"
                    underline="hover"
                    color="inherit"
                  >
                    {item}
                  </Link>
                </Box>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="primary.main" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" paragraph>
              123 Healing Street, Medical District
              <br />
              City, 10001
              <br />
              <Link href="tel:+1234567890" underline="hover" color="inherit">
                (123) 456-7890
              </Link>
              <br />
              <Link href="mailto:info@regenerativeclinic.com" underline="hover" color="inherit">
                info@regenerativeclinic.com
              </Link>
            </Typography>
          </Grid>
        </Grid>
        
        <Box sx={{ mt: 4, pt: 2, borderTop: '1px solid', borderColor: 'divider', textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Regenerative Clinic. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
