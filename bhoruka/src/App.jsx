import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';

// 1. IMPORT YOUR ACTUAL HOME PAGE HERE
import Home from './pages/Home';

// Placeholder view component for demonstration
const PagePlaceholder = ({ title }) => (
  <main className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 text-center min-h-[400px] flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold text-slate-900 mb-3">{title}</h1>
      <p className="text-slate-600 max-w-md">
        Welcome to the {title} page for Bhoruka Renewable Energy.
      </p>
    </div>
  </main>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white text-slate-800 antialiased">
        {/* Global Navigation Bar */}
        <Navbar />

        {/* Page Routing */}
        <div className="flex-grow">
          <Routes>
            {/* 2. REPLACE THE PLACEHOLDER WITH YOUR HOME COMPONENT */}
            <Route path="/" element={<Home />} />
            
            {/* Keep the other placeholders for now until you build those pages */}
            <Route path="/hydro" element={<PagePlaceholder title="Hydro Energy" />} />
            <Route path="/solar" element={<PagePlaceholder title="Solar Energy" />} />
            <Route path="/wind" element={<PagePlaceholder title="Wind Energy" />} />
            <Route path="/csr" element={<PagePlaceholder title="Corporate Social Responsibility" />} />
            <Route path="/about" element={<PagePlaceholder title="About Us" />} />
            <Route path="/contact" element={<PagePlaceholder title="Contact Us" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;