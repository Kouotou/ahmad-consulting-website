import React from 'react';
import { Link } from 'react-router-dom';
import { Youtube, Facebook, Linkedin, MessageCircle, Mail } from 'lucide-react';
import Button from '../ui/Button';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer section-alt">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="logo-text mb-2 d-inline-block">
              Ahmad<span className="logo-accent">Consulting</span>
            </Link>
            <p className="footer-desc">
              Helping young professionals communicate with authority and build influence at work so they get noticed, trusted, and promoted.
            </p>
            <div className="social-links mt-4">
              <a href="https://www.youtube.com/@thewhitebeard_237" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><Youtube size={20} /></a>
              <a href="https://www.tiktok.com/@thewhitebeard_237" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                {/* Fallback to text or SVG for TikTok since Lucide doesn't have it explicitly sometimes, but let's just use text for now */}
                <span style={{ fontWeight: 'bold' }}>TikTok</span>
              </a>
              <a href="https://web.facebook.com/profile.php?id=61578681600377&sk=about" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook size={20} /></a>
              <a href="https://www.linkedin.com/company/thewhitebeard237" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={20} /></a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><MessageCircle size={20} /></a>
            </div>
          </div>

          <div className="footer-links">
            <h4 className="footer-heading">Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/testimonials">Testimonials</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4 className="footer-heading">Ready to Level Up?</h4>
            <p className="mb-3">Take the first step towards communicating with undeniable authority.</p>
            <Button to="/booking" variant="primary">
              Book a Clarity Call
            </Button>
            <div className="contact-info mt-4">
              <a href="mailto:hello@Ahmadconsulting.com" className="d-flex align-center gap-2">
                <Mail size={16} /> hello@Ahmadconsulting.com
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Ahmad Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
