
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import ScrollToTop from './components/common/ScrollToTop';
import Footer from './components/common/Footer'; // Import Footer component

// Import your newly created centralized routes
import AppRoutes from './routes/AppRoutes'; 

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <AppRoutes />
      <Footer /> 
    </Router>
  );
}

export default App;