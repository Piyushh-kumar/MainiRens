import './Technology.css';
import { Droplets, Leaf, Zap, Globe, Wind, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Technology() {
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

  return (
    <section className="tex-section">
      {/* Decorative Background Blob (Green/Teal) */}
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

            <button className="tex-primary-btn">
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
    </section>
  );
}