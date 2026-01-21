import { Globe, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
// Assumed path to logo asset based on previous steps
import logo from '../assets/logo.png'; 
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-grid">

        {/* Brand */}
        <div className="footer-brand-col">
          <Link to="/" className="footer-logo">
            <img src={logo} alt="Maini Renewables" />
          </Link>
          <p className="footer-tagline">
            Innovative energy solutions for a sustainable tomorrow.
            Harnessing the power of water and wind responsibly.
          </p>

          <div className="footer-social">
            <a href="#_" aria-label="Website"><span><Globe size={20} /></span></a>
            <a href="mailto:info@mainirenewables.com" aria-label="Email"><span><Mail size={20} /></span></a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h4>Quick Links</h4>
          <ul className="footer-links">
            {/* Using react-router Link instead of a href for internal navigation */}
            <li><Link to="/">Home</Link></li>
            <li><Link to="/technology">Technology</Link></li>
            <li><Link to="/impact">Impact</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Copyright / Extra Info */}
        <div className="footer-copy-col">
          <h4>Partner With Us</h4>
           <p>Help us revolutionize renewable energy infrastructure.</p>
           <div className="copy-text">
            © {currentYear} Maini Renewables.
            <br />
            All rights reserved.
           </div>
        </div>

      </div>
    </footer>
  );
}