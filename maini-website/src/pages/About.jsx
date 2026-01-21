import { Users, ShieldCheck, ArrowRight, Zap, Globe, Wind, Award } from 'lucide-react';
import './About.css';

export default function About() {
  return (
    <section className="abt-section">
      <div className="abt-container">

        {/* --- Top Section: Founder & Vision (Existing) --- */}
        <div className="abt-grid">
          {/* Left Content */}
          <div className="abt-text-col">
            <div className="abt-badge">
              <span className="abt-badge-dot"></span> Leadership
            </div>
            
            <h1>
              Built by <span className="abt-text-gradient">Industry Experts</span>
            </h1>
            
            <p className="abt-description">
              Founded by Swati Maini, Maini Renewables brings together deep
              expertise in R&D, mechanical engineering, and large-scale
              project execution. Our focus is simple: reliable clean energy
              without environmental compromise.
            </p>

            <div className="abt-cards-row">
              <div className="abt-stat-card">
                <div className="abt-icon-box">
                  <Users size={24} strokeWidth={2} />
                </div>
                <div>
                  <h3>Expert Team</h3>
                  <span>Researchers & Engineers</span>
                </div>
              </div>

              <div className="abt-stat-card">
                <div className="abt-icon-box">
                  <ShieldCheck size={24} strokeWidth={2} />
                </div>
                <div>
                  <h3>Patented Tech</h3>
                  <span>India • USA (Pending)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Highlight (Gradient Card) */}
          <div className="abt-highlight-col">
            <div className="abt-promo-card">
              <div className="abt-card-deco"></div>
              <div className="abt-promo-content">
                <div className="abt-promo-icon">
                  <Award size={28} />
                </div>
                <h2>Recognized Innovation</h2>
                <p>
                  Supported by AIC-JKLU, Venture Center, and Climate Collective. 
                  Recipient of the Nidhi Prayas Grant and Seed Fund Scheme.
                </p>
                <button className="abt-action-btn">
                  View Achievements <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* --- Middle Section: What We Do (Extracted from Image) --- */}
        <div className="abt-mission-section">
          <div className="abt-mission-header">
            <h2>Clean. Safe. Renewable.</h2>
            <p>
              Maini Renewables offers scalable small hydro and wind energy generation turbines 
              that harness the power found in the natural flow of water and wind.
            </p>
          </div>

          <div className="abt-features-grid">
            <div className="abt-feature-item">
              <Zap className="feature-icon" />
              <h3>Low Wind & Water</h3>
              <p>Generators suited for low speed applications, operating without dams.</p>
            </div>
            <div className="abt-feature-item">
              <Wind className="feature-icon" />
              <h3>High Efficiency</h3>
              <p>Proprietary rotors with improved efficiencies, housed safely above water.</p>
            </div>
            <div className="abt-feature-item">
              <Globe className="feature-icon" />
              <h3>Global Impact</h3>
              <p>Every 15kW turbine saves ~94 tonnes of CO2 annually vs coal plants.</p>
            </div>
          </div>
        </div>

        {/* --- Bottom Section: Partners (Extracted from Image) --- */}
        <div className="abt-partners-section">
          <span className="abt-partners-label">Supported By & Knowledge Partners</span>
          <div className="abt-partners-grid">
             {/* Text placeholders for logos based on your image */}
             <div className="partner-logo">AIC-JKLU</div>
             <div className="partner-logo">Venture Center</div>
             <div className="partner-logo">Climate Collective</div>
             <div className="partner-logo">HDFC Parivartan</div>
             <div className="partner-logo">NITI Aayog</div>
             <div className="partner-logo">NIOT Chennai</div>
             <div className="partner-logo">Startup India</div>
          </div>
        </div>

      </div>
    </section>
  );
}