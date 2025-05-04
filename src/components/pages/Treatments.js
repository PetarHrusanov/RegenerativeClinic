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
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Link } from 'react-router-dom';

const Treatments = () => {
  // Treatments data
  const treatments = [
    {
      id: 1,
      title: 'Stem Cell Therapy',
      description: 'Harness the power of stem cells to repair and regenerate damaged tissues.',
      longDescription: 'Stem cell therapy utilizes the body\'s natural repair mechanisms to promote healing. Our specialists extract stem cells from your own body (typically from bone marrow or adipose tissue) and inject them into the affected area, where they can develop into the specific type of cells needed for repair.',
      benefits: [
        'Promotes natural tissue regeneration',
        'Reduces inflammation and pain',
        'Improves function and mobility',
        'Minimally invasive procedure',
        'Potential to delay or avoid surgery'
      ],
      conditions: [
        'Osteoarthritis',
        'Joint injuries',
        'Tendon and ligament tears',
        'Spinal disc degeneration',
        'Sports injuries'
      ],
      image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      id: 2,
      title: 'PRP Treatment',
      description: 'Platelet-Rich Plasma therapy accelerates healing using your body\'s own platelets and growth factors.',
      longDescription: 'PRP therapy involves drawing a small amount of your blood, processing it to concentrate the platelets, and injecting this platelet-rich plasma into the injured area. The concentrated platelets release growth factors that stimulate and enhance tissue recovery.',
      benefits: [
        'Uses your own blood (autologous)',
        'Accelerates the healing process',
        'Reduces pain and inflammation',
        'Minimal downtime',
        'Can be combined with other treatments'
      ],
      conditions: [
        'Tendonitis',
        'Muscle strains',
        'Joint pain',
        'Hair loss',
        'Facial rejuvenation',
        'Wound healing'
      ],
      image: 'https://images.unsplash.com/photo-1576671414121-aa2d0967b1ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      id: 3,
      title: 'Regenerative Injections',
      description: 'Targeted injections to stimulate tissue repair and reduce inflammation in joints and soft tissues.',
      longDescription: 'Regenerative injections deliver specialized substances directly to damaged tissues to stimulate healing. These may include growth factors, cytokines, hyaluronic acid, or other regenerative compounds that support tissue repair and reduce inflammation.',
      benefits: [
        'Targeted delivery to affected areas',
        'Stimulates natural healing processes',
        'Reduces pain and inflammation',
        'Improves joint function',
        'Minimal side effects'
      ],
      conditions: [
        'Osteoarthritis',
        'Degenerative joint disease',
        'Bursitis',
        'Tendinopathy',
        'Ligament sprains'
      ],
      image: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      id: 4,
      title: 'Tissue Engineering',
      description: 'Advanced techniques to create functional tissue replacements for damaged or diseased tissues.',
      longDescription: 'Tissue engineering combines cells, engineering materials, and biochemical factors to create functional tissues that can replace damaged ones. This cutting-edge approach allows us to develop customized tissue replacements that integrate with the patient\'s body.',
      benefits: [
        'Creates customized tissue replacements',
        'Addresses complex tissue damage',
        'Potential for long-term solutions',
        'Reduces rejection risk using patient\'s own cells',
        'Applicable to various tissue types'
      ],
      conditions: [
        'Cartilage defects',
        'Bone defects',
        'Skin injuries',
        'Vascular damage',
        'Complex wound healing'
      ],
      image: 'https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    }
  ];

  return (
    <Box>
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
              Our Treatments
            </Typography>
            <Typography 
              variant="h5" 
              color="text.secondary" 
              sx={{ mb: 4 }}
            >
              Innovative regenerative therapies for natural healing
            </Typography>
            <Typography 
              variant="body1" 
              color="text.secondary" 
              sx={{ mb: 4 }}
            >
              At the Regenerative Clinic, we offer a comprehensive range of cutting-edge treatments that harness your body's natural healing abilities. Our approach focuses on addressing the root cause of conditions rather than just treating symptoms.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Treatments Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        {treatments.map((treatment) => (
          <Card 
            key={treatment.id}
            sx={{ 
              mb: 4,
              borderRadius: 3,
              overflow: 'hidden',
              transition: 'all 0.3s',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: 5
              }
            }}
          >
            <Grid container>
              <Grid item xs={12} md={4}>
                <CardMedia
                  component="img"
                  image={treatment.image}
                  alt={treatment.title}
                  sx={{ 
                    height: '100%', 
                    minHeight: { xs: '250px', md: 'auto' } 
                  }}
                />
              </Grid>
              <Grid item xs={12} md={8}>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h4" component="h3" gutterBottom sx={{ color: 'primary.main' }}>
                    {treatment.title}
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {treatment.longDescription}
                  </Typography>
                  
                  <Accordion elevation={0} sx={{ mb: 2, bgcolor: 'background.default' }}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="benefits-content"
                      id="benefits-header"
                    >
                      <Typography variant="h6">Benefits</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <List dense>
                        {treatment.benefits.map((benefit, index) => (
                          <ListItem key={index}>
                            <ListItemIcon>
                              <CheckCircleOutlineIcon color="primary" />
                            </ListItemIcon>
                            <ListItemText primary={benefit} />
                          </ListItem>
                        ))}
                      </List>
                    </AccordionDetails>
                  </Accordion>
                  
                  <Accordion elevation={0} sx={{ mb: 2, bgcolor: 'background.default' }}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="conditions-content"
                      id="conditions-header"
                    >
                      <Typography variant="h6">Conditions Treated</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <List dense>
                        {treatment.conditions.map((condition, index) => (
                          <ListItem key={index}>
                            <ListItemIcon>
                              <CheckCircleOutlineIcon color="primary" />
                            </ListItemIcon>
                            <ListItemText primary={condition} />
                          </ListItem>
                        ))}
                      </List>
                    </AccordionDetails>
                  </Accordion>
                  
                  <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
                    <Button 
                      variant="contained" 
                      component={Link} 
                      to="/book"
                      sx={{ borderRadius: '30px', px: 3 }}
                    >
                      Book This Treatment
                    </Button>
                  </Box>
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        ))}
      </Container>

      {/* CTA Section */}
      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 8 }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h3" component="h2" sx={{ fontWeight: 700, mb: 3 }}>
              Ready to Experience the Benefits of Regenerative Medicine?
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
              Take the first step towards natural healing and improved quality of life
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
              <Button 
                variant="contained" 
                size="large" 
                component={Link} 
                to="/book"
                sx={{ 
                  bgcolor: 'white',
                  color: 'primary.main',
                  borderRadius: '30px',
                  px: 4,
                  py: 1.5,
                  '&:hover': {
                    bgcolor: 'grey.100'
                  }
                }}
              >
                Book a Consultation
              </Button>
              <Button 
                variant="outlined" 
                size="large" 
                component={Link} 
                to="/contact"
                sx={{ 
                  color: 'white',
                  borderColor: 'white',
                  borderRadius: '30px',
                  px: 4,
                  py: 1.5,
                  '&:hover': {
                    borderColor: 'white',
                    bgcolor: 'rgba(255,255,255,0.1)'
                  }
                }}
              >
                Contact Us
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Treatments;
