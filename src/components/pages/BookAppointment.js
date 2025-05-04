import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Paper,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Checkbox
} from '@mui/material';
import { Link } from 'react-router-dom';

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    treatment: '',
    doctor: '',
    message: '',
    agreeToTerms: false
  });
  
  const [submitted, setSubmitted] = useState(false);

  // Treatment options
  const treatments = [
    'Stem Cell Therapy',
    'PRP Treatment',
    'Regenerative Injections',
    'Tissue Engineering',
    'Cellular Therapy',
    'Initial Consultation'
  ];

  // Doctor options
  const doctors = [
    'Dr. Sarah Williams - Regenerative Medicine',
    'Dr. Michael Chen - Sports Medicine & Regenerative Therapy',
    'Dr. Emily Rodriguez - Neurological Regeneration',
    'Dr. James Wilson - Cellular & Molecular Medicine',
    'Dr. Olivia Thompson - Regenerative Aesthetics',
    'Dr. Robert Kim - Regenerative Pain Management',
    'No Preference'
  ];

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    
    if (type === 'checkbox') {
      setFormData(prevState => ({
        ...prevState,
        [name]: checked
      }));
    } else {
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Appointment form submitted:', formData);
    setSubmitted(true);
  };

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
              Book Your Appointment
            </Typography>
            <Typography 
              variant="h5" 
              color="text.secondary" 
              sx={{ mb: 4 }}
            >
              Take the first step towards regenerative healing
            </Typography>
            <Typography 
              variant="body1" 
              color="text.secondary" 
              sx={{ mb: 4 }}
            >
              Complete the form below to request an appointment with one of our specialists. Our team will contact you to confirm your appointment and answer any questions you may have.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Appointment Form Section */}
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Paper 
          elevation={0}
          sx={{ 
            p: 4, 
            borderRadius: 3,
            border: '1px solid',
            borderColor: 'divider'
          }}
        >
          {submitted ? (
            <Box sx={{ textAlign: 'center', py: 6 }}>
              <Typography variant="h4" color="primary" gutterBottom>
                Thank you for booking your appointment!
              </Typography>
              <Typography variant="body1" paragraph>
                Your appointment request has been submitted successfully. We will contact you shortly to confirm the details.
              </Typography>
              <Typography variant="body1" paragraph>
                If you have any questions in the meantime, please don't hesitate to contact us.
              </Typography>
              <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center', gap: 2 }}>
                <Button 
                  variant="contained" 
                  component={Link} 
                  to="/"
                  sx={{ borderRadius: '30px', px: 3 }}
                >
                  Return to Home
                </Button>
                <Button 
                  variant="outlined" 
                  onClick={() => setSubmitted(false)}
                  sx={{ borderRadius: '30px', px: 3 }}
                >
                  Book Another Appointment
                </Button>
              </Box>
            </Box>
          ) : (
            <form onSubmit={handleSubmit}>
              <Typography variant="h4" component="h2" sx={{ mb: 4, fontWeight: 600 }}>
                Appointment Request Form
              </Typography>
              
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Email Address"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Phone Number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth required>
                    <InputLabel>Treatment Type</InputLabel>
                    <Select
                      name="treatment"
                      value={formData.treatment}
                      onChange={handleChange}
                      label="Treatment Type"
                    >
                      {treatments.map((treatment) => (
                        <MenuItem key={treatment} value={treatment}>
                          {treatment}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth required>
                    <InputLabel>Preferred Doctor</InputLabel>
                    <Select
                      name="doctor"
                      value={formData.doctor}
                      onChange={handleChange}
                      label="Preferred Doctor"
                    >
                      {doctors.map((doctor) => (
                        <MenuItem key={doctor} value={doctor}>
                          {doctor}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Preferred Date"
                    name="date"
                    type="date"
                    InputLabelProps={{ shrink: true }}
                    value={formData.date}
                    onChange={handleChange}
                    required
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Preferred Time"
                    name="time"
                    type="time"
                    InputLabelProps={{ shrink: true }}
                    value={formData.time}
                    onChange={handleChange}
                    required
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Additional Information or Questions"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    multiline
                    rows={4}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={formData.agreeToTerms}
                        onChange={handleChange}
                        name="agreeToTerms"
                        required
                        color="primary"
                      />
                    }
                    label="I confirm that the information provided is accurate and I agree to the terms and privacy policy."
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button 
                    type="submit" 
                    variant="contained" 
                    size="large"
                    disabled={!formData.agreeToTerms}
                    sx={{ 
                      borderRadius: '30px',
                      px: 4
                    }}
                  >
                    Submit Appointment Request
                  </Button>
                </Grid>
              </Grid>
            </form>
          )}
        </Paper>
      </Container>

      {/* Info Section */}
      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 8 }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h3" component="h2" sx={{ fontWeight: 700, mb: 3 }}>
              What to Expect
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, fontSize: '1.1rem' }}>
              After submitting your appointment request, our team will contact you within 24 hours to confirm your appointment and provide any additional information you may need. If you have any urgent questions, please call us directly at (123) 456-7890.
            </Typography>
            <Button 
              variant="contained" 
              component={Link}
              to="/contact"
              sx={{ 
                bgcolor: 'white',
                color: 'primary.main',
                borderRadius: '30px',
                px: 4,
                '&:hover': {
                  bgcolor: 'grey.100'
                }
              }}
            >
              Contact Us
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default BookAppointment;
