import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop'; // <--- 1. Import this

import Home from './pages/Home';
import Technology from './pages/Technology';
import Impact from './pages/Impact';
import About from './pages/About';
import Contact from './pages/Contact';

import './App.css';

export default function App() {
  return (
    <Router>
      <ScrollToTop /> {/* <--- 2. Add this right here at the top */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}