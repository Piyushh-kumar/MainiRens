import React, { useState } from 'react';
import './Technology.css';
import { 
  Droplets, 
  Leaf, 
  Zap, 
  Globe, 
  Wind, 
  CheckCircle2, 
  ArrowRight,
  Waves,
  X 
} from 'lucide-react';

export default function Technology() {
  const [showSpecs, setShowSpecs] = useState(false);

  const features = [
    {
      icon: <Droplets size={28} />,
      title: 'Zero Dams',
      highlight: 'Natural Flow',
      desc: 'Preserves the natural course of water. No reservoirs or massive concrete infrastructure required.'
    },
    {
      icon: <Leaf size={28} />,
      title: 'Aquatic Safe',
      highlight: '100% Eco-Friendly',
      desc: 'Fish-friendly turbine geometry ensures absolute safety for local aquatic ecosystems and biodiversity.'
    },
    {
      icon: <Zap size={28} />,
      title: 'High Efficiency',
      highlight: 'Baseload Power',
      desc: 'Vertical-axis torque optimized for low-velocity water streams to generate consistent energy.'
    },
    {
      icon: <Globe size={28} />,
      title: 'Modular Fit',
      highlight: 'Plug & Play',
      desc: 'Adaptable design that fits seamlessly into canals, rivers, industrial outflows, and weirs.'
    }
  ];

  const turbines = [
    {
      icon: <Waves size={32} />,
      title: 'Finned Turbine',
      stats: '29.7% Efficiency', 
      desc: 'Drag-based design optimized for controlled flow environments like irrigation canals. Maximizes surface area contact.'
    },
    {
      icon: <Zap size={32} />,
      title: 'Helical Turbine',
      stats: '27% Efficiency',
      desc: 'Spiral geometry ensures reduced vibration and continuous torque generation across variable flow speeds.'
    },
    {
      icon: <Wind size={32} />,
      title: 'Darrieus Turbine',
      stats: '20% Efficiency',
      desc: 'Lift-based turbine engineered for higher-velocity wind and hydrokinetic installations with minimal drag.'
    }
  ];

  return (
    <section className="tex-section">
      {/* Decorative Background Blob */}
      <div className="tex-bg-blob"></div>

      <div className="tex-container">
        
        {/* Header */}
        <div className="tex-header">
          <div className="tex-label-pill">
            <span className="tex-dot"></span> Sustainable Hydro
          </div>
          <h1>
            Engineering <span className="tex-text-gradient">Nature's Flow</span>
          </h1>
          <p>
            The Damless® turbine combines proprietary hydro-mechanics with ecological preservation. 
            A robust solution designed for the future of decentralized energy.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="tex-feature-grid">
          {features.map((item, i) => (
            <div key={i} className="tex-card">
              <div className="tex-card-header">
                <div className="tex-icon-circle">{item.icon}</div>
                <span className="tex-card-highlight">{item.highlight}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Deployment / Visual Section */}
        <div className="tex-deployment-wrapper">
          <div className="tex-deployment-content">
            <div className="tex-section-tag">
              <Wind size={18} /> <span>Versatile Integration</span>
            </div>
            <h2>Deploy Anywhere</h2>
            <p>
              Our modular units adapt to diverse kinetic environments, functioning effectively 
              in both hydraulic and aerodynamic applications.
            </p>

            <div className="tex-check-grid">
              <div className="tex-check-item">
                <CheckCircle2 className="tex-check-icon" /> <span>Irrigation Canals</span>
              </div>
              <div className="tex-check-item">
                <CheckCircle2 className="tex-check-icon" /> <span>Riverine Systems</span>
              </div>
              <div className="tex-check-item">
                <CheckCircle2 className="tex-check-icon" /> <span>Industrial Effluents</span>
              </div>
              <div className="tex-check-item">
                <CheckCircle2 className="tex-check-icon" /> <span>Wind Hybrid Units</span>
              </div>
            </div>

            <button 
              className="tex-primary-btn"
              onClick={() => setShowSpecs(true)}
            >
              View Technical Specs <ArrowRight size={18} />
            </button>
          </div>

          {/* 3D-style Graphic */}
          <div className="tex-visual-container">
            <div className="tex-glass-panel">
              <div className="tex-turbine-graphic">
                <div className="tex-circle tex-c-outer"></div>
                <div className="tex-circle tex-c-mid"></div>
                <div className="tex-circle tex-c-core">
                  <Zap size={32} fill="currentColor" />
                </div>
                <div className="tex-orbit-dot"></div>
              </div>
              <div className="tex-stat-floater">
                <span className="tex-stat-num">98%</span>
                <span className="tex-stat-label">Eco-Safety</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- MODAL OVERLAY --- */}
      {showSpecs && (
        <div className="tex-modal-overlay" onClick={() => setShowSpecs(false)}>
          <div className="tex-modal-container" onClick={(e) => e.stopPropagation()}>
            
            <div className="tex-modal-header">
              <div className="tex-modal-title">
                <h2>Core Turbine Models</h2>
              </div>
              <button className="tex-close-btn" onClick={() => setShowSpecs(false)}>
                <X size={24} />
              </button>
            </div>

            <div className="tex-modal-body">
              <div className="tex-turbine-grid">
                {turbines.map((t, i) => (
                  <div key={i} className="tex-turbine-card">
                    <div className="tex-turbine-visual">
                      <div className="tex-turbine-icon-box">
                        {t.icon}
                      </div>
                      <div className="tex-efficiency-badge">
                         <span className="eff-label">Peak Eff.</span>
                         <span className="eff-val">{t.stats}</span>
                      </div>
                    </div>
                    <div className="tex-turbine-info">
                      <span className="tex-tag">Proprietary</span>
                      <h3>{t.title}</h3>
                      <p>{t.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}