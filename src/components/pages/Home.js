import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  Button
} from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  // Treatment cards data
  const treatments = [
    {
      id: 1,
      title: 'Stem Cell Therapy',
      description: 'Harness the power of stem cells to repair and regenerate damaged tissues, promoting natural healing.',
      image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 2,
      title: 'PRP Treatment',
      description: 'Platelet-Rich Plasma therapy accelerates healing by using your body\'s own platelets and growth factors.',
      image: 'https://images.unsplash.com/photo-1576671414121-aa2d0967b1ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 3,
      title: 'Regenerative Injections',
      description: 'Targeted injections to stimulate tissue repair and reduce inflammation in joints and soft tissues.',
      image: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 4,
      title: 'Tissue Engineering',
      description: 'Advanced techniques to create functional tissue replacements for damaged or diseased tissues.',
      image: 'https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    }
  ];

  return (
    <Box className="home-page">
      {/* Hero Section */}
      <Box className="hero-section">
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography 
                variant="h2" 
                component="h1" 
                sx={{ 
                  fontWeight: 700,
                  mb: 2,
                  color: 'primary.main'
                }}
              >
                Advanced Regenerative Medicine
              </Typography>
              <Typography 
                variant="h5" 
                color="text.secondary" 
                sx={{ mb: 4 }}
              >
                Harnessing your body's natural healing potential for better health
              </Typography>
              <Typography 
                variant="body1" 
                color="text.secondary" 
                sx={{ mb: 4 }}
              >
                Our innovative treatments use cutting-edge regenerative techniques to help your body heal itself, reducing pain and improving function without invasive surgery.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button 
                  variant="contained" 
                  size="large" 
                  component={Link} 
                  to="/book"
                  sx={{ 
                    borderRadius: '30px',
                    px: 4
                  }}
                >
                  Book a Consultation
                </Button>
                <Button 
                  variant="outlined" 
                  size="large" 
                  component={Link} 
                  to="/treatments"
                  sx={{ 
                    borderRadius: '30px',
                    px: 3
                  }}
                >
                  Explore Treatments
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box 
                component="img" 
                src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Regenerative Medicine"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '20px',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.1)'
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Treatments Section */}
      <Container maxWidth="lg" sx={{ py: 8, width: '100%' }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h3" component="h2" sx={{ fontWeight: 700, mb: 2 }}>
            Our Treatments
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '800px', mx: 'auto' }}>
            Innovative regenerative therapies tailored to your specific needs
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ width: '100%', mx: 0 }}>
          {treatments.map((treatment) => (
            <Grid item xs={12} sm={6} md={3} key={treatment.id} sx={{ display: 'flex', width: '100%' }}>
              <Card 
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  borderRadius: 3,
                  transition: 'all 0.3s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: 5
                  }
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={treatment.image}
                  alt={treatment.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h3">
                    {treatment.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {treatment.description}
                  </Typography>
                  <Button 
                    component={Link} 
                    to="/treatments" 
                    size="small" 
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* CTA Section */}
      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 8 }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h3" component="h2" sx={{ fontWeight: 700, mb: 3 }}>
              Ready to Start Your Healing Journey?
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
              Schedule a consultation with our specialists to discover how regenerative medicine can help you
            </Typography>
            <Button 
              variant="contained" 
              size="large" 
              component={Link} 
              to="/book"
              sx={{ 
                bgcolor: 'white',
                color: 'primary.main',
                borderRadius: '30px',
                px: 5,
                py: 1.5,
                '&:hover': {
                  bgcolor: 'grey.100'
                }
              }}
            >
              Book Your Appointment Today
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
