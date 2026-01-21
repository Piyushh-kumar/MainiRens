import { useState } from 'react';
import {
  Zap,
  Wind,
  Waves,
  Building2,
  TrendingUp,
  ShieldCheck
} from 'lucide-react';

import './Home.css';

// Assets (Make sure these paths are correct in your project)
import heroo from '../assets/heroo.mp4';
import heroo2 from '../assets/hero2.mp4';
import canalImage from '../assets/canal.png';

export default function Home() {
  const [firstVideoEnded, setFirstVideoEnded] = useState(false);

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
          PARTNERS / TRUST
      ====================================================== */}
      <section className="partners-section">
        <div className="container">
          <p className="partners-title">Supported by Leading Institutions</p>
          <div className="partners-grid">
            <div className="partner-logo">IIT Roorkee</div>
            <div className="partner-logo">Startup India</div>
            <div className="partner-logo">NIOT Chennai</div>
            <div className="partner-logo">HDFC SmartUp</div>
            <div className="partner-logo">AIC-JKLU</div>
          </div>
        </div>
      </section>

      {/* =====================================================
          TECHNOLOGY SECTION
      ====================================================== */}
      <section className="tech-section container">
        <div className="section-header">
          <h2>Our Core Technology</h2>
          <p>
            Proprietary Vertical Axis Turbines engineered for
            hydrokinetic and wind energy applications.
          </p>
        </div>

        <div className="tech-grid">
          <div className="tech-card">
            <div className="icon-box"><Waves size={32} /></div>
            <h3>Finned Turbine</h3>
            <p>
              Drag-based design achieving ~29.7% efficiency in controlled
              flow environments.
            </p>
          </div>

          <div className="tech-card">
            <div className="icon-box"><Zap size={32} /></div>
            <h3>Helical Turbine</h3>
            <p>
              Spiral geometry ensuring smooth torque and reduced vibration
              across variable flow speeds.
            </p>
          </div>

          <div className="tech-card">
            <div className="icon-box"><Wind size={32} /></div>
            <h3>Darrieus Turbine</h3>
            <p>
              Lift-based turbine suitable for higher-velocity wind and
              hydrokinetic installations.
            </p>
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