import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import page components
import HomePage from './pages/Home';
import { About } from './pages/About';
import { CaseStudies } from './pages/CaseStudies';
import { Testimonials } from './pages/Testimonial';
import { Teams } from './pages/Team/Teams';
import { Contactus } from './pages/Contact';
import Services from './pages/Services';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services />} />
        <Route path='/casestudies' element={<CaseStudies/>}/>
        <Route path='/testimonial' element={<Testimonials/>}/>
        <Route path='/team' element={<Teams/>}/>
        <Route path='/contact' element={<Contactus/>}/>
        <Route path='/service' element={<Services/>}/>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
