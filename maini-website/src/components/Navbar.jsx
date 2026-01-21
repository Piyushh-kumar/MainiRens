import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Navbar.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // 1. Check if we are on the Home Page
  const isHome = location.pathname === '/';

  // 2. Define when the Navbar should be dark (White background, Green text)
  // It should be dark if: We are NOT on home (Technology/About pages) OR if we have scrolled down.
  const isDark = !isHome || scrolled;

  // Scroll listener
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on page change
  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <>
      {/* 3. Apply the 'scrolled' class based on our isDark logic */}
      <nav className={`navbar ${isDark ? 'scrolled' : ''}`}>
        <div className="container nav-content">

          {/* LOGO */}
          <Link to="/" className="nav-logo">
            <img src={logo} alt="Maini Renewables" />
          </Link>

          {/* DESKTOP LINKS */}
          <div className="nav-links">
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/technology">Technology</NavLink>
            <NavLink to="/impact">Impact</NavLink>
            <NavLink to="/about">About</NavLink>

            <Link to="/contact" className="nav-cta">
              Partner With Us
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button className="menu-btn" onClick={() => setOpen(true)}>
            {/* 4. Force icon color to dark if we are on a white page */}
            <Menu size={28} color={isDark ? '#022c22' : '#ffffff'} />
          </button>
        </div>
      </nav>

      {/* MOBILE DRAWER (Same as before) */}
      <div className={`nav-backdrop ${open ? 'show' : ''}`} onClick={() => setOpen(false)} />
      <div className={`mobile-drawer ${open ? 'open' : ''}`}>
        <button className="close-btn" onClick={() => setOpen(false)}>
          <X size={28} />
        </button>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/technology">Technology</NavLink>
        <NavLink to="/impact">Impact</NavLink>
        <NavLink to="/about">About</NavLink>
        <Link to="/contact" className="drawer-cta">Partner With Us</Link>
      </div>
    </>
  );
}