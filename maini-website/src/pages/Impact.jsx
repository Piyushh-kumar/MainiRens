import { useState } from 'react';
import { BarChart3, Droplets, Globe, ShieldCheck, Landmark, ArrowUpRight } from 'lucide-react';
import './Impact.css';

export default function Impact() {
  // Policy has been removed from the tabs to live as its own dedicated section below
  const [tab, setTab] = useState('hydro');

  return (
    <section className="impact-dark-section">
      {/* Immersive ambient glowing backgrounds */}
      <div className="impact-glow-top"></div>
      <div className="impact-glow-bottom"></div>

      <div className="impact-container">

        {/* ==========================================
            STAGE 1: HEADER & CORE CORE METRICS TABS 
           ========================================== */}
        <div className="impact-header">
          <div className="impact-title-area">
            <span className="impact-mini-tag">Global Footprint & Innovation</span>
            <h1>Driving Sustainable <span className="impact-gradient-text">Impact</span></h1>
            <p>
              Aligning cutting-edge clean tech innovation with scalable frameworks and the United Nations Sustainable
              Development Goals to manufacture long-term socioeconomic value.
            </p>
          </div>

          {/* Cleaned Premium Pill Tabs (Reflecting your design layout from image_48b95c.png) */}
          <div className="impact-tabs-wrapper">
            <div className="impact-tabs">
              <button
                className={tab === 'hydro' ? 'active tab-hydro' : ''}
                onClick={() => setTab('hydro')}
              >
                <Droplets size={16} /> Hydro Potential
              </button>
              <button
                className={tab === 'sdg' ? 'active tab-sdg' : ''}
                onClick={() => setTab('sdg')}
              >
                <Globe size={16} /> UN SDGs
              </button>
            </div>
          </div>
        </div>

        {/* Tab Switch Viewport Panel */}
        <div className="impact-content-viewport" key={tab}>
          {tab === 'hydro' && (
            <div className="hydro-grid">
              <div className="hydro-text-column">
                <div className="hydro-badge">
                  <ShieldCheck size={16} /> Low-Impact Infrastructure
                </div>
                <h2>Untapped Energy in Irrigation Canals</h2>
                <p>
                  India has over 175,000 km of irrigation canal infrastructure. These artificial
                  channels can generate continuous, reliable clean energy base-load without
                  disrupting local agriculture or displacing delicate ecosystems.
                </p>

                {/* Flat Dashboard Metrics */}
                <div className="hydro-stats-dashboard">
                  <div className="stat-metric-flat">
                    <span className="metric-label">Canal Network</span>
                    <strong className="metric-value">1,75,000+ km</strong>
                  </div>
                  <div className="stat-metric-flat">
                    <span className="metric-label">Suitable for Power</span>
                    <strong className="metric-value">~60%</strong>
                  </div>
                  <div className="stat-metric-flat highlight-green">
                    <span className="metric-label">Environmental Cost</span>
                    <strong className="metric-value-green">Zero</strong>
                  </div>
                </div>
              </div>

              {/* Cardless Economic Info Area */}
              <div className="hydro-visual-column">
                <div className="visual-flat-panel">
                  <div className="visual-icon-box">
                    <BarChart3 size={24} />
                  </div>
                  <h3>Economic Viability</h3>
                  <p>
                    Canal-based small hydro systems achieve full capital return (ROI) in ~3 years, 
                    heavily outperforming conventional structural hydro frameworks and traditional thermal configurations.
                  </p>
                </div>
              </div>
            </div>
          )}

          {tab === 'sdg' && (
            <div className="sdg-flat-list">
              <div className="sdg-row-item sdg-yellow">
                <div className="sdg-meta">
                  <div className="sdg-num-badge">07</div>
                  <span className="sdg-tag">Goal 7</span>
                </div>
                <div className="sdg-info-text">
                  <h3>Affordable & Clean Energy</h3>
                  <p>Deploying modular hydro kits to provide reliable, scalable, and decentralized carbon-free energy arrays for all localized regions.</p>
                </div>
              </div>

              <div className="sdg-row-item sdg-orange">
                <div className="sdg-meta">
                  <div className="sdg-num-badge">11</div>
                  <span className="sdg-tag">Goal 11</span>
                </div>
                <div className="sdg-info-text">
                  <h3>Sustainable Cities</h3>
                  <p>Injecting distributed, reliable micro-grid power directly into smart regional utility vectors for highly resilient urban networks.</p>
                </div>
              </div>

              <div className="sdg-row-item sdg-green">
                <div className="sdg-meta">
                  <div className="sdg-num-badge">13</div>
                  <span className="sdg-tag">Goal 13</span>
                </div>
                <div className="sdg-info-text">
                  <h3>Climate Action</h3>
                  <p>Directly eliminating massive metric tons of greenhouse gas emissions by permanently reducing immediate dependencies on traditional fossil fuel blocks.</p>
                </div>
              </div>
            </div>
          )}
        </div>


        {/* ==========================================
            STAGE 2: DEDICATED POLICY ALIGNMENT BLOCK
           ========================================== */}
        <div className="standalone-policy-section">
          <div className="policy-flat-layout">
            
            <div className="policy-headline-block">
              <div className="policy-badge">
                <Landmark size={14} style={{ marginRight: '6px' }} /> National Framework Catalyst
              </div>
              <h2>MNRE Small Hydro Power (SHP) Development Scheme</h2>
              <p>
                Our project deployment roadmap directly interfaces with the Ministry of New and Renewable Energy’s (MNRE) guidelines. This national mandate accelerates decentralized run-of-river and canal-fall small hydro setups to provide reliable green baseload power.
              </p>
              
              <a 
                href="https://www.pmindia.gov.in/en/news_updates/cabinet-approves-scheme-on-small-hydro-power-shp-development-scheme-for-the-period-fy-2026-27-to-fy-2030-31/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="policy-link-anchor"
              >
                View Official Press Release <ArrowUpRight size={16} />
              </a>
            </div>

            <div className="policy-timeline-metrics">
              <div className="policy-metric-row">
                <div className="policy-year-tag">FY 2026–31 • Outlay</div>
                <div>
                  <h3>₹2,584.60 Cr Central Outlay</h3>
                  <p>Supported by a comprehensive central budget earmarked to attract over ₹15,000 Crore in total clean energy investments while generating over 51 Lakh person-days of local employment.</p>
                </div>
              </div>
              
              <div className="policy-metric-row">
                <div className="policy-year-tag">Target Metrics</div>
                <div>
                  <h3>1,500 MW Operational Capacity</h3>
                  <p>Driving target execution of decentralized schemes (1 MW to 25 MW) specifically geared to alleviate regional grid stress without community displacement or ecological overhead.</p>
                </div>
              </div>

              <div className="policy-metric-row">
                <div className="policy-year-tag">Localization</div>
                <div>
                  <h3>100% Indigenous Sourcing Mandate</h3>
                  <p>Rigidly aligning with Atmanirbhar Bharat criteria by utilizing local engineering supply chains, ensuring long-term asset life lifespans spanning 40 to 60+ years.</p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}