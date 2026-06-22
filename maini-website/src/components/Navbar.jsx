import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Navbar.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';
  // Navbar is dark if: Not home, Scrolled, OR Menu is Open (to see the white logo/btn)
  const isDark = !isHome || scrolled || open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location]);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [open]);

  return (
    <>
      <nav className={`navbar ${isDark ? 'scrolled' : ''}`}>
        <div className="container nav-content">
          
          <Link to="/" className="nav-logo">
            <img src={logo} alt="Maini Renewables" />
          </Link>

          {/* Desktop Links */}
          <div className="nav-links">
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/technology">Technology</NavLink>
            <NavLink to="/impact">Impact</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/our-partners">Our Partners</NavLink>
            <Link to="/contact" className="nav-cta">Partner With Us</Link>
          </div>

          {/* Animated Hamburger Button */}
          <button 
            className={`hamburger-btn ${open ? 'open' : ''} ${isDark ? 'dark-mode' : ''}`} 
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* 1. Backdrop (Click to close) */}
      <div 
        className={`nav-backdrop ${open ? 'visible' : ''}`} 
        onClick={() => setOpen(false)} 
      />

      {/* 2. Sidebar Drawer */}
      <div className={`mobile-drawer ${open ? 'open' : ''}`}>
        <div className="drawer-content">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/technology">Technology</NavLink>
          <NavLink to="/impact">Impact</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/our-partners">Our Partners</NavLink>
          <Link to="/contact" className="drawer-cta">Partner With Us</Link>
        </div>
      </div>
    </>
  );
}