import { useState } from 'react';
import {
  Wind,
  Waves,
  Building2,
  TrendingUp,
  ShieldCheck
} from 'lucide-react';

import './Home.css';

// Assets
import heroo from '../assets/heroo.mp4';
import heroo2 from '../assets/hero2.mp4';
import canalImage from '../assets/canal.png';

// Partner Logos
import iitRoorkeeImg from '../assets/iit-roorkee.png';
import startupIndiaImg from '../assets/startup-india.png';
import niotChennaiImg from '../assets/NIOT-chennai.png';
import hdfcSmartUpImg from '../assets/HDFC smart up.png';
import aicJkluImg from '../assets/AIC-JKLU.png';

export default function Home() {
  const [firstVideoEnded, setFirstVideoEnded] = useState(false);

  const partners = [
    { name: "IIT Roorkee", logo: iitRoorkeeImg },
    { name: "Startup India", logo: startupIndiaImg },
    { name: "NIOT Chennai", logo: niotChennaiImg },
    { name: "HDFC SmartUp", logo: hdfcSmartUpImg },
    { name: "AIC-JKLU", logo: aicJkluImg },
  ];

  return (
    <>
      {/* =====================================================
          HERO SECTION (VIDEO BACKGROUND)
      ====================================================== */}
      <section className="hero">

        {/* Video Background */}
        <div className="hero-video">
          {!firstVideoEnded ? (
            <video
              src={heroo}
              autoPlay
              muted
              playsInline
              onEnded={() => setFirstVideoEnded(true)}
            />
          ) : (
            <video
              src={heroo2}
              autoPlay
              muted
              loop
              playsInline
            />
          )}
        </div>

        {/* Overlay */}
        <div className="hero-overlay" />

        {/* Content */}
        <div className="container hero-content">
          <span className="hero-badge">Revolutionizing Clean Energy</span>

          <h1>
            Power from Flow, <br />
            <span>Without the Dams.</span>
          </h1>

          <p>
            Maini Renewables develops patented Damless® turbine technology
            that generates continuous clean energy from flowing water
            and wind — without harming ecosystems.
          </p>

          <div className="hero-buttons">
            <a href="/technology" className="btn primary">
              Discover Technology
            </a>
            <a href="/contact" className="btn secondary">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================
          STATS STRIP
      ====================================================== */}
      <section className="stats container">
        <div className="stat-item">
          <h2>1,75,000 km</h2>
          <p>Canal Potential in India</p>
        </div>
        <div className="stat-item">
          <h2>~3 Years</h2>
          <p>Return on Investment</p>
        </div>
        <div className="stat-item">
          <h2>100%</h2>
          <p>Recyclable Design</p>
        </div>
        <div className="stat-item">
          <h2>Zero</h2>
          <p>Carbon Emissions</p>
        </div>
      </section>

      {/* =====================================================
          PARTNERS / TRUST (UPDATED DESIGN)
      ====================================================== */}
      <section className="partners-section">
        <div className="container">
          <p className="partners-title">Supported by Leading Institutions</p>
          
          <div className="partners-grid">
             {partners.map((partner, index) => (
               <div key={index} className="partner-card" title={partner.name}>
                 <img 
                   src={partner.logo} 
                   alt={`${partner.name} logo`} 
                   className="partner-logo-img" 
                 />
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          NEW SERVICES SECTION (Added Wind & Water)
      ====================================================== */}
      <section className="services-section container">
        <div className="section-header">
          <h2>Our Services</h2>
          <p>
            Generating power right where you need it—whether from the breeze above or the water below.
          </p>
        </div>

        <div className="services-grid">
          {/* Service 1: WIND */}
          <div className="service-card">
            <div className="service-content">
              <div className="icon-box"><Wind size={32} /></div>
              <h3>Wind Energy</h3>
              <p>
                Become a part of the solution. If you feel the wind on your rooftop,
                with a wind turbine you can produce energy for your needs, occupying
                no more space than your water tank and providing you with electrons.
              </p>
            </div>
            <div className="service-video-wrapper">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/uJJeYQqAAE8" 
                title="Wind Turbine Demo" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Service 2: WATER */}
          <div className="service-card reverse">
            <div className="service-content">
              <div className="icon-box"><Waves size={32} /></div>
              <h3>Hydro Energy</h3>
              <p>
                With flowing water running near your property, you can harness its flow
                and produce your own power. Anywhere you see water flowing, we see
                potential to produce electricity with our Damless Turbines.
              </p>
            </div>
            <div className="service-video-wrapper">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/3nBkx3V9E48" 
                title="Water Turbine Demo" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          VALUE SECTION
      ====================================================== */}
      <section className="home-section bg-light">
        <div className="container">
          <div className="section-header">
            <h2>Why Maini Renewables?</h2>
            <p>
              Bridging the gap between intermittent renewables
              and dependable baseload power.
            </p>
          </div>

          <div className="value-grid">
            <div className="value-card">
              <ShieldCheck className="value-icon" />
              <h3>No Large Infrastructure</h3>
              <p>
                Damless® deployment avoids reservoirs, land acquisition,
                and ecological disruption.
              </p>
            </div>

            <div className="value-card">
              <Waves className="value-icon" />
              <h3>Nature First</h3>
              <p>
                Fish-safe, silent, and designed to preserve
                natural water flow.
              </p>
            </div>

            <div className="value-card">
              <TrendingUp className="value-icon" />
              <h3>Predictable Power</h3>
              <p>
                Continuous 24/7 energy generation unlike solar
                and wind intermittency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          APPLICATIONS SECTION
      ====================================================== */}
      <section className="apps-section container">
        <div className="apps-content">
          <h2>Versatile Deployment</h2>
          <p>
            Modular designs unlock clean energy
            across diverse environments.
          </p>

          <ul className="apps-list">
            <li>
              <Waves className="app-icon" />
              <div>
                <strong>Irrigation Canals</strong>
                <span>175,000+ km of existing Indian canal networks.</span>
              </div>
            </li>

            <li>
              <Wind className="app-icon" />
              <div>
                <strong>Highways & Metros</strong>
                <span>Capturing wind turbulence from moving traffic.</span>
              </div>
            </li>

            <li>
              <Building2 className="app-icon" />
              <div>
                <strong>Urban Rooftops</strong>
                <span>Silent vertical turbines for decentralized cities.</span>
              </div>
            </li>
          </ul>
        </div>

        <div className="apps-image">
          <img src={canalImage} alt="Canal based energy deployment" />
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}
      <section className="home-cta">
        <div className="container">
          <h2>Building the Future of Renewable Energy</h2>
          <p>
            From irrigation canals to urban infrastructure,
            we unlock untapped clean energy potential.
          </p>
          <a href="/about" className="primary-white">
            Learn About Our Mission
          </a>
        </div>
      </section>
    </>
  );
}