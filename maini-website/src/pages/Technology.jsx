import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Droplets, 
  Leaf, 
  Zap, 
  Globe, 
  Wind, 
  ArrowRight,
  Waves,
  X 
} from 'lucide-react';
import './Technology.css';

// Asset Imports
import canalImage from "../assets/River.png";
import rooftopImage from "../assets/rooftop.png";
import windfarmImage from "../assets/windfarm.png";

export default function SolutionsTech() {
  const [showSpecs, setShowSpecs] = useState(false);

  const keyPrinciples = [
    {
      icon: <Droplets size={22} />,
      title: 'Zero Dams Framework',
      highlight: 'Natural Flow Preservation',
      desc: 'Maintains the unaltered trajectory of water channels. Eliminates the operational need for synthetic reservoirs, blockades, or invasive concrete installations.'
    },
    {
      icon: <Leaf size={22} />,
      title: 'Aquatic Safe Geometry',
      highlight: '100% Eco-Compatible',
      desc: 'Fish-friendly hydrokinetic turbine spacing eliminates pressure differentials, ensuring uncompromised safety for local biodiversity and riverine pathways.'
    },
    {
      icon: <Zap size={22} />,
      title: 'High Performance Baselines',
      highlight: 'Continuous Baseload Output',
      desc: 'Vertical-axis mechanical torque configuration is specialized to isolate kinetic power from slow-moving, low-velocity fluid conditions cleanly.'
    },
    {
      icon: <Globe size={22} />,
      title: 'Modular Engineering Matrix',
      highlight: 'Scalable Micro-Grids',
      desc: 'An adaptive structural blueprint engineered to deploy directly into standard agricultural canals, active river streams, and municipal outflows.'
    }
  ];

  const turbineModels = [
    {
      icon: <Waves size={26} />,
      title: 'Finned Hydrokinetic Module',
      efficiency: '29.7% Dynamic Efficiency',
      desc: 'Drag-dependent optimization specialized for controlled environments like concrete irrigation flumes. Maximizes immediate kinetic surface contact vectors.'
    },
    {
      icon: <Zap size={26} />,
      title: 'Helical Continuous Torque',
      efficiency: '27.0% Dynamic Efficiency',
      desc: 'Spiral rotor geometry minimizes cyclical hydrodynamic vibration, delivering a unified output baseline across turbulent, variable-velocity flow streams.'
    },
    {
      icon: <Wind size={26} />,
      title: 'Darrieus Lift Configuration',
      efficiency: '20.0% Dynamic Efficiency',
      desc: 'Lift-driven engineering framework tailored for accelerated water channels and industrial aerodynamic applications operating with low systemic drag.'
    }
  ];

  return (
    <main className="soltech-page">
      
      {/* ================= EDITORIAL HERO SECTION ================= */}
      <header className="soltech-hero">
        <div className="soltech-hero-container">
          <div className="soltech-pill">
            <span className="soltech-pill-indicator"></span> Industrial Clean Energy Infrastructure
          </div>
          <h1>
            Engineering Sustainable Solutions <br />
            <span>Through Nature's Unbroken Kinetic Flow</span>
          </h1>
          <p>
            Maini Renewables develops advanced damless hydrokinetic matrices and modular wind-capture 
            turbines. We generate zero-emission, decentralized power cleanly from naturally existing 
            currents without destabilizing surrounding ecological systems.
          </p>
        </div>
      </header>

      {/* ================= CORE ARCHITECTURAL APPLICATION ROWS ================= */}
      <section className="editorial-matrix">
        <div className="matrix-section-title">
          <span className="matrix-tag">Structural Deployments</span>
          <h2>Flagship Installations</h2>
          <p>Industrial scale solutions tailored to active infrastructure networks and natural water basins.</p>
        </div>

        {/* Row 1: Canal */}
        <div className="matrix-row">
          <div className="matrix-meta">
            <span className="row-number">01</span>
            <h3>Canal Installation</h3>
            <p>Capturing unutilized velocity profiles in man-made, managed municipal or industrial infrastructure lines.</p>
            <Link to="/canal-installation" className="editorial-link">
              Examine Specifications <ArrowRight size={16} />
            </Link>
          </div>
          <div className="matrix-visual">
            <img src={canalImage} alt="Canal Installation" />
            <span className="visual-caption">Damless kinetic extraction units integrated with linear agricultural irrigation channels.</span>
          </div>
        </div>

        {/* Row 2: Rooftop */}
        <div className="matrix-row reverse">
          <div className="matrix-meta">
            <span className="row-number">02</span>
            <h3>Rooftop & Micro-Wind Arrays</h3>
            <p>Decentralized vertical-axis aerodynamic systems tailored to harvest micro-climatic wind tunnels directly over active industrial complexes.</p>
            <Link to="/rooftop-installation" className="editorial-link">
              Examine Specifications <ArrowRight size={16} />
            </Link>
          </div>
          <div className="matrix-visual">
            <img src={rooftopImage} alt="Rooftop Installation" />
            <span className="visual-caption">High-torque aerodynamic units generating localized power lines at the point of consumption.</span>
          </div>
        </div>

        {/* Row 3: Windfarm */}
        <div className="matrix-row">
          <div className="matrix-meta">
            <span className="row-number">03</span>
            <h3>Windfarm Integration</h3>
            <p>High-density regional layouts configured for maximum localized kinetic output and direct connection to industrial mainframes.</p>
            <Link to="/windfarm-installation" className="editorial-link">
              Examine Specifications <ArrowRight size={16} />
            </Link>
          </div>
          <div className="matrix-visual">
            <img src={windfarmImage} alt="Windfarm Installation" />
            <span className="visual-caption">Utility-scale industrial arrays engineered to handle high variable shear stress factors seamlessly.</span>
          </div>
        </div>
      </section>

      {/* ================= SCIENTIFIC PRINCIPLES SECTION ================= */}
      <section className="tech-principles">
        <div className="principles-grid-wrapper">
          
          <div className="principles-sticky-sidebar">
            <span className="matrix-tag">The Damless® Paradigm</span>
            <h2>Core Technological Framework</h2>
            <p>
              By decoupling generation from spatial manipulation, our hydro-mechanic systems 
              coexist natively with active habitats while tracking fluid dynamics consistently.
            </p>
            <button className="specs-trigger-btn" onClick={() => setShowSpecs(true)}>
              Examine System Efficiencies <ArrowRight size={18} />
            </button>
          </div>

          <div className="principles-list">
            {keyPrinciples.map((item, idx) => (
              <div key={idx} className="principle-item">
                <div className="principle-lead">
                  <div className="principle-icon-wrapper">{item.icon}</div>
                  <span className="principle-label">{item.highlight}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= EXPLORATION NAVIGATOR LINK ================= */}
      <footer className="soltech-footer-cta">
        <div className="cta-inner-layout">
          <h2>Ready to audit your localized kinetic capacity?</h2>
          <p>
            Our infrastructure consultants provide clean power maps tailored directly to your facility, 
            local topography, or open fluid distribution networks.
          </p>
          <div className="cta-action-row">
            <Link to="/more-solutions" className="cta-button-primary">
              Explore Supplementary Platforms
            </Link>
            <Link to="/contact" className="cta-button-text">
              Consult with Technical Engineers &rarr;
            </Link>
          </div>
        </div>
      </footer>

      {/* ================= INTERACTIVE TECHNICAL MODAL ================= */}
      {showSpecs && (
        <div className="specs-modal-overlay" onClick={() => setShowSpecs(false)}>
          <div className="specs-modal-window" onClick={(e) => e.stopPropagation()}>
            
            <div className="specs-modal-header">
              <div>
                <span className="matrix-tag">Engineering Matrix</span>
                <h2>Core Turbodynamic Profiles</h2>
              </div>
              <button className="specs-close-button" onClick={() => setShowSpecs(false)}>
                <X size={22} />
              </button>
            </div>

            <div className="specs-modal-body">
              {turbineModels.map((turbine, idx) => (
                <div key={idx} className="spec-editorial-block">
                  <div className="spec-block-lead">
                    <div className="spec-icon-box">{turbine.icon}</div>
                    <span className="spec-metric-tag">{turbine.efficiency}</span>
                  </div>
                  <div className="spec-block-content">
                    <h3>{turbine.title}</h3>
                    <p>{turbine.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      )}

    </main>
  );
}