import './Home.css';

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section
        className="hero"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1464822759023-fed622ff2c3b)"
        }}
      >
        <div className="hero-overlay" />

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

      {/* STATS */}
      <section className="stats container">
        <div>
          <h2>1,75,000 km</h2>
          <p>Canal Potential in India</p>
        </div>
        <div>
          <h2>~3 Years</h2>
          <p>Return on Investment</p>
        </div>
        <div>
          <h2>100%</h2>
          <p>Recyclable Design</p>
        </div>
        <div>
          <h2>24/7</h2>
          <p>Reliable Base Load Power</p>
        </div>
      </section>

      {/* VALUE SECTION */}
      <section className="home-section container">
        <div className="section-header">
          <h2>Why Maini Renewables?</h2>
          <p>
            We bridge the gap between intermittent renewables and
            environmentally harmful traditional hydro.
          </p>
        </div>

        <div className="value-grid">
          <div className="value-card">
            <h3>No Large Infrastructure</h3>
            <p>
              Our turbines work without dams, reservoirs, or land
              displacement.
            </p>
          </div>

          <div className="value-card">
            <h3>Nature First</h3>
            <p>
              Fish-safe, silent, and designed to preserve natural
              water flow.
            </p>
          </div>

          <div className="value-card">
            <h3>Predictable Power</h3>
            <p>
              Unlike solar and wind, flowing water provides consistent
              energy 24/7.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="home-cta">
        <div className="container">
          <h2>Building the Future of Renewable Energy</h2>
          <p>
            From irrigation canals to urban infrastructure, we are
            unlocking untapped clean energy potential.
          </p>
          <a href="/about" className="btn primary">
            Learn About Our Mission
          </a>
        </div>
      </section>
    </>
  );
}
