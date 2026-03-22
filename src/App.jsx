import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/layout/Layout';

import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import Booking from './pages/Booking';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Simple meta tag updater for SEO
const SEO = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const titles = {
      '/': 'Ahmad Consulting | Communicate with Authority',
      '/services': 'Services | Ahmad Consulting',
      '/about': 'About Ahmad | Ahmad Consulting',
      '/testimonials': 'Client Results | Ahmad Consulting',
      '/contact': 'Contact | Ahmad Consulting',
      '/booking': 'Book a Clarity Call | Ahmad Consulting'
    };

    document.title = titles[pathname] || 'Ahmad Consulting';

    // In a real app we'd use react-helmet, but this works natively
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = "Helping young professionals communicate with authority, build influence, and get noticed at work.";

  }, [pathname]);

  return null;
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <SEO />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="about" element={<About />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="contact" element={<Contact />} />
          <Route path="booking" element={<Booking />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
