import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  Button,
  Chip,
  Stack
} from '@mui/material';
import { Link } from 'react-router-dom';

const Doctors = () => {
  // Doctors data
  const doctors = [
    {
      id: 1,
      name: 'Dr. Sarah Williams',
      title: 'Chief Medical Officer',
      specialty: 'Regenerative Medicine',
      description: 'Dr. Williams is a pioneer in regenerative medicine with extensive research in stem cell applications for orthopedic conditions.',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      specialties: ['Stem Cell Therapy', 'Orthopedic Regeneration', 'Clinical Research']
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      title: 'Senior Physician',
      specialty: 'Sports Medicine & Regenerative Therapy',
      description: 'Dr. Chen specializes in treating athletes with regenerative therapies, helping them recover faster and perform better.',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      specialties: ['Sports Injuries', 'PRP Treatment', 'Joint Rehabilitation']
    },
    {
      id: 3,
      name: 'Dr. Emily Rodriguez',
      title: 'Regenerative Specialist',
      specialty: 'Neurological Regeneration',
      description: 'Dr. Rodriguez focuses on innovative treatments for neurological conditions using cutting-edge regenerative techniques.',
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      specialties: ['Neurological Disorders', 'Cellular Therapy', 'Tissue Engineering']
    },
    {
      id: 4,
      name: 'Dr. James Wilson',
      title: 'Research Director',
      specialty: 'Cellular & Molecular Medicine',
      description: 'Dr. Wilson leads our research initiatives, focusing on developing new regenerative treatments through cellular and molecular approaches.',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      specialties: ['Molecular Medicine', 'Research & Development', 'Clinical Trials']
    },
    {
      id: 5,
      name: 'Dr. Olivia Thompson',
      title: 'Aesthetic Regenerative Specialist',
      specialty: 'Regenerative Aesthetics',
      description: 'Dr. Thompson specializes in regenerative approaches to aesthetic medicine, helping patients achieve natural-looking results.',
      image: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      specialties: ['Facial Rejuvenation', 'Hair Restoration', 'Skin Regeneration']
    },
    {
      id: 6,
      name: 'Dr. Robert Kim',
      title: 'Pain Management Specialist',
      specialty: 'Regenerative Pain Management',
      description: 'Dr. Kim focuses on using regenerative techniques to address chronic pain conditions, offering alternatives to traditional pain management.',
      image: 'https://images.unsplash.com/photo-1622902046580-2b47f47f5471?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      specialties: ['Chronic Pain', 'Regenerative Injections', 'Non-Surgical Treatments']
    }
  ];

  return (
    <Box className="doctors-page">
      {/* Hero Section */}
      <Box className="hero-section">
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', maxWidth: '800px', mx: 'auto' }}>
            <Typography 
              variant="h2" 
              component="h1" 
              sx={{ 
                fontWeight: 700,
                mb: 2,
                color: 'primary.main'
              }}
            >
              Our Expert Physicians
            </Typography>
            <Typography 
              variant="h5" 
              color="text.secondary" 
              sx={{ mb: 4 }}
            >
              Meet our team of specialized doctors dedicated to regenerative medicine
            </Typography>
            <Typography 
              variant="body1" 
              color="text.secondary" 
              sx={{ mb: 4 }}
            >
              Our physicians combine years of experience with cutting-edge knowledge in regenerative medicine to provide you with the highest quality care.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Doctors Section */}
      <Container maxWidth="lg" sx={{ py: 8, width: '100%' }}>
        <Grid container spacing={4} sx={{ width: '100%', mx: 0 }}>
          {doctors.map((doctor) => (
            <Grid item xs={12} sm={6} md={4} key={doctor.id} sx={{ display: 'flex', width: '100%' }}>
              <Card 
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  borderRadius: 3,
                  overflow: 'hidden',
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
                  image={doctor.image}
                  alt={doctor.name}
                  sx={{
                    objectFit: 'cover',
                    objectPosition: 'center top'
                  }}
                />
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography gutterBottom variant="h5" component="h3" sx={{ fontWeight: 600 }}>
                    {doctor.name}
                  </Typography>
                  <Typography variant="subtitle1" color="primary.main" sx={{ mb: 1 }}>
                    {doctor.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {doctor.specialty}
                  </Typography>
                  <Typography variant="body2" paragraph>
                    {doctor.description}
                  </Typography>
                  
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="subtitle2" sx={{ mb: 1 }}>
                      Specializations:
                    </Typography>
                    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                      {doctor.specialties.map((specialty, index) => (
                        <Chip 
                          key={index} 
                          label={specialty} 
                          size="small" 
                          color="primary" 
                          variant="outlined"
                          sx={{ mb: 1 }}
                        />
                      ))}
                    </Stack>
                  </Box>
                  
                  <Button 
                    variant="outlined" 
                    fullWidth
                    component={Link} 
                    to="/book"
                    sx={{ borderRadius: '20px', mt: 2 }}
                  >
                    Book Appointment
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
              Find the Right Specialist for Your Needs
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
              Our team of experts is ready to help you on your journey to better health
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
              Schedule Your Consultation
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Doctors;
