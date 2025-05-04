import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Paper,
  Button,
  Card,
  CardContent,
  Avatar
} from '@mui/material';
import { Link } from 'react-router-dom';

const About = () => {
  // Team members data
  const leadership = [
    {
      name: 'Dr. Robert Johnson',
      title: 'Founder & Medical Director',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      bio: 'Dr. Johnson founded the Regenerative Clinic with a vision to provide innovative treatments that harness the body\'s natural healing abilities.'
    },
    {
      name: 'Dr. Lisa Chen',
      title: 'Clinical Research Director',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      bio: 'Dr. Chen leads our research initiatives, ensuring that we remain at the forefront of regenerative medicine advancements.'
    },
    {
      name: 'Jennifer Martinez',
      title: 'Chief Operating Officer',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      bio: 'Jennifer oversees the day-to-day operations of the clinic, ensuring that we deliver exceptional care and service to all patients.'
    }
  ];

  return (
    <Box className="about-page">
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
                About Our Clinic
              </Typography>
              <Typography 
                variant="h5" 
                color="text.secondary" 
                sx={{ mb: 4 }}
              >
                Pioneering regenerative medicine for a healthier tomorrow
              </Typography>
              <Typography 
                variant="body1" 
                color="text.secondary" 
                sx={{ mb: 4 }}
              >
                The Regenerative Clinic was founded with a mission to transform healthcare through innovative regenerative treatments. We believe in harnessing the body's natural healing abilities to address a wide range of conditions, offering our patients effective alternatives to traditional treatments.
              </Typography>
              <Button 
                variant="contained" 
                size="large" 
                component={Link} 
                to="/contact"
                sx={{ 
                  borderRadius: '30px',
                  px: 4
                }}
              >
                Get in Touch
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box 
                component="img" 
                src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Modern Clinic Building"
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

      {/* Our Values Section */}
      <Container maxWidth="lg" sx={{ py: 8, width: '100%' }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h3" component="h2" sx={{ fontWeight: 700, mb: 2 }}>
            Our Values
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '800px', mx: 'auto' }}>
            The principles that guide our approach to regenerative medicine
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ width: '100%', mx: 0 }}>
          {[
            { title: 'Patient-Centered Care', description: 'We place our patients at the center of everything we do, focusing on personalized treatment plans.' },
            { title: 'Innovation', description: 'We continuously pursue cutting-edge treatments and technologies in regenerative medicine.' },
            { title: 'Safety & Quality', description: 'We maintain the highest standards of safety and quality in all our procedures and treatments.' },
            { title: 'Collaborative Approach', description: 'We work as a team, collaborating with patients and other healthcare providers for optimal outcomes.' }
          ].map((value, index) => (
            <Grid item xs={12} sm={6} md={3} key={index} sx={{ display: 'flex', width: '100%' }}>
              <Paper 
                elevation={0}
                sx={{ 
                  p: 4, 
                  height: '100%',
                  borderRadius: 3,
                  border: '1px solid',
                  borderColor: 'divider',
                  textAlign: 'center',
                  transition: 'all 0.3s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: 3
                  }
                }}
              >
                <Typography variant="h5" component="h3" gutterBottom>
                  {value.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {value.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Leadership Team Section */}
      <Box sx={{ bgcolor: '#f8faff', py: 8, width: '100%' }}>
        <Container maxWidth="lg" sx={{ width: '100%' }}>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h3" component="h2" sx={{ fontWeight: 700, mb: 2 }}>
              Our Leadership
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '800px', mx: 'auto' }}>
              Meet the team guiding our vision and mission
            </Typography>
          </Box>

          <Grid container spacing={4} justifyContent="center" sx={{ width: '100%', mx: 0 }}>
            {leadership.map((leader, index) => (
              <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex', width: '100%' }}>
                <Card 
                  sx={{ 
                    height: '100%',
                    width: '100%',
                    borderRadius: 3,
                    transition: 'all 0.3s',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: 5
                    }
                  }}
                >
                  <CardContent sx={{ p: 3, textAlign: 'center' }}>
                    <Avatar
                      src={leader.image}
                      alt={leader.name}
                      sx={{ 
                        width: 120, 
                        height: 120, 
                        mx: 'auto',
                        mb: 2,
                        border: '4px solid',
                        borderColor: 'primary.light'
                      }}
                    />
                    <Typography variant="h5" component="h3" gutterBottom>
                      {leader.name}
                    </Typography>
                    <Typography variant="subtitle1" color="primary.main" gutterBottom>
                      {leader.title}
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 2 }}>
                      {leader.bio}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Mission & Vision Section */}
      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h3" component="h2" sx={{ fontWeight: 700, mb: 3 }}>
                Our Mission
              </Typography>
              <Typography variant="h6" paragraph sx={{ opacity: 0.9 }}>
                To transform healthcare through innovative regenerative treatments that harness the body's natural healing abilities, providing patients with effective alternatives to traditional approaches.
              </Typography>
              <Typography variant="h3" component="h2" sx={{ fontWeight: 700, mb: 3, mt: 5 }}>
                Our Vision
              </Typography>
              <Typography variant="h6" paragraph sx={{ opacity: 0.9 }}>
                To be the global leader in regenerative medicine, making cutting-edge treatments accessible to all and setting new standards for patient care and clinical outcomes.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box 
                component="img" 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Medical Research"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '20px',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.2)'
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default About;
