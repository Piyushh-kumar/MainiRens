import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ChatWidget from './components/ChatWidget'; // <--- NEW

import Home from './pages/Home';
import Technology from './pages/Technology';
import Impact from './pages/Impact';
import About from './pages/About';
import Contact from './pages/Contact';
// Match the exact lowercase name of your file:
import PartnerRegistrationForm from './pages/PartnerRegistrationForm';
import OurPartners from './pages/OurPartners' // <--- NEW: import the new page
import './App.css';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/PartnerRegistrationForm" element={<PartnerRegistrationForm />} /> 
        <Route path="/our-partners" element={<OurPartners />} /> 
      </Routes>

      <Footer />
      <ChatWidget /> {/* <--- NEW: renders on every page */}
    </Router>
  );
}