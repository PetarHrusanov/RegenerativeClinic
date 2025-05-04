import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider, CssBaseline, Box } from '@mui/material';
import './App.css';

// Layout Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Page Components
import Home from './components/pages/Home';
import Treatments from './components/pages/Treatments';
import Doctors from './components/pages/Doctors';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import BookAppointment from './components/pages/BookAppointment';

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // A medical blue color
      light: '#63a4ff',
      dark: '#004ba0',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#26a69a', // A complementary teal color
      light: '#64d8cb',
      dark: '#00766c',
      contrastText: '#ffffff',
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
    text: {
      primary: '#333333',
      secondary: '#666666',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 500,
    },
    h6: {
      fontWeight: 500,
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '8px 16px',
        },
        contained: {
          boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Box className="page-container">
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/treatments" element={<Treatments />} />
              <Route path="/doctors" element={<Doctors />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/book" element={<BookAppointment />} />
            </Routes>
          </main>
        </Box>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
