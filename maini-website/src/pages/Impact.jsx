import { useState } from 'react';
import { BarChart3 } from 'lucide-react';
import './Impact.css';

export default function Impact() {
  const [tab, setTab] = useState('hydro');

  return (
    <section className="impact">
      <div className="container">

        {/* Header */}
        <div className="impact-header">
          <div>
            <h1>Driving Sustainable Impact</h1>
            <p>
              Aligning innovation with the United Nations Sustainable
              Development Goals to create long-term value.
            </p>
          </div>

          {/* Tabs */}
          <div className="impact-tabs">
            <button
              className={tab === 'hydro' ? 'active hydro' : ''}
              onClick={() => setTab('hydro')}
            >
              Hydro Potential
            </button>
            <button
              className={tab === 'sdg' ? 'active sdg' : ''}
              onClick={() => setTab('sdg')}
            >
              UN SDGs
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="impact-content">
          {tab === 'hydro' ? (
            <div className="hydro-grid">
              <div className="hydro-text">
                <h2>Untapped Energy in Canals</h2>
                <p>
                  India has over 175,000 km of irrigation canals. These
                  channels can generate continuous clean energy without
                  affecting agriculture or ecosystems.
                </p>

                <div className="hydro-stats">
                  <div>
                    <span>Canal Network</span>
                    <strong>1,75,000+ km</strong>
                  </div>
                  <div>
                    <span>Suitable for Power</span>
                    <strong>~60%</strong>
                  </div>
                  <div className="green">
                    <span>Environmental Cost</span>
                    <strong>Zero</strong>
                  </div>
                </div>
              </div>

              <div className="hydro-visual">
                <div className="visual-card">
                  <BarChart3 />
                  <h3>Economic Viability</h3>
                  <p>
                    Canal-based hydro achieves ROI in ~3 years,
                    outperforming traditional hydro & nuclear.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="sdg-grid">
              <div className="sdg-card yellow">
                <div className="sdg-number">7</div>
                <h3>Affordable & Clean Energy</h3>
                <p>Reliable and sustainable energy for all.</p>
              </div>

              <div className="sdg-card orange">
                <div className="sdg-number">11</div>
                <h3>Sustainable Cities</h3>
                <p>Distributed power for resilient urban systems.</p>
              </div>

              <div className="sdg-card green">
                <div className="sdg-number">13</div>
                <h3>Climate Action</h3>
                <p>Reducing dependency on fossil fuels.</p>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
