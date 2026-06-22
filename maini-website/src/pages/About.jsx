import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
import { Users, ShieldCheck, Globe, Zap, Wind, Award } from "lucide-react";

import heroImage from "../assets/About.png";
import founderImage from "../assets/swati.png";
import riverImage from "../assets/NaturalFlows.png";
import hydroDamImage from "../assets/Manmade.png";

export default function About() {
  return (
    <section className="about-page">

      {/* HERO */}
      <div
        className="about-hero"
        style={{
          backgroundImage: `url("${heroImage}")`,
        }}
      >
        <div className="about-overlay"></div>

        <div className="about-hero-content">
          <span className="about-badge">
            Renewable Energy Innovation
          </span>

          <h1>
            Engineering Sustainable Energy
            <span> For The Future</span>
          </h1>

          <p>
            Maini Renewables develops advanced hydrokinetic and wind
            energy systems that generate clean power from naturally
            available resources without causing environmental damage.
          </p>
        </div>
      </div>

      {/* FOUNDER */}
      <div className="about-founder">
        <div className="about-founder-image">
          <img src={founderImage} alt="Swati Maini" />
        </div>

        <div className="about-founder-content">
          <span className="section-tag">Leadership</span>

          <h2>Built By Industry Experts</h2>

          <h3>Swati Maini</h3>

          <p className="role">Founder & CEO</p>

          <p>
            Maini Renewables combines expertise in engineering,
            renewable energy systems, product development, and
            large-scale project execution to deliver sustainable
            energy solutions for communities and industries.
          </p>
        </div>
      </div>

      {/* MISSION */}
      <div className="about-mission">
        <div className="section-header">
          <span className="section-tag">Mission</span>

          <h2>Clean. Safe. Renewable.</h2>

          <p>
            Our mission is to accelerate the transition toward
            sustainable energy through innovative hydrokinetic
            and wind technologies.
          </p>
        </div>
      </div>

      {/* FEATURES */}
      <div className="about-features">

        <div className="feature-card">
          <div className="icon-wrapper">
            <Zap size={30} />
          </div>
          <h3>Low Speed Generation</h3>
          <p>
            Efficient operation in low-speed water and wind conditions.
          </p>
        </div>

        <div className="feature-card">
          <div className="icon-wrapper">
            <Wind size={30} />
          </div>
          <h3>High Efficiency</h3>
          <p>
            Proprietary rotor designs maximize energy extraction.
          </p>
        </div>

        <div className="feature-card">
          <div className="icon-wrapper">
            <Globe size={30} />
          </div>
          <h3>Carbon Reduction</h3>
          <p>
            Significant reduction in CO₂ emissions compared to fossil fuels.
          </p>
        </div>

      </div>

      {/* INSTALLATION */}
      <div className="about-installations">
        <div className="section-header">
          <span className="section-tag">Applications</span>
          <h2>Where Can We Install?</h2>
        </div>

        <div className="installation-grid">

          <div className="installation-card">
            <div className="image-wrapper">
              <img src={riverImage} alt="Natural Water Flows" />
            </div>
            <div className="installation-content">
              <h3>Natural Water Flows</h3>
              <p>
                Rivers, tidal streams, and ocean currents.
              </p>
            </div>
          </div>

          <div className="installation-card">
            <div className="image-wrapper">
              <img src={hydroDamImage} alt="Man-Made Infrastructure" />
            </div>
            <div className="installation-content">
              <h3>Man-Made Infrastructure</h3>
              <p>
                Irrigation canals, industrial channels,
                and hydro dam tailraces.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* WHY US / STATS */}
      <div className="about-stats">

        <div className="stat-card">
          <Users size={26} />
          <h3>Expert Team</h3>
        </div>

        <div className="stat-card">
          <ShieldCheck size={26} />
          <h3>Patented Technology</h3>
        </div>

        <div className="stat-card">
          <Award size={26} />
          <h3>Industry Recognition</h3>
        </div>

      </div>

      {/* CTA */}
      <div className="about-cta">
        <h2>
          Let's Build A Sustainable Future Together
        </h2>
        <a 
          href="https://docs.google.com/forms/d/e/1FAIpQLSfWIwVPSPvXawdhJYNbLKU-mVYw4E30azxgbCWYP_S2qAXPtw/viewform" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="contact-button"
        >
          Sign Up For Early Access
        </a>
      </div>

    </section>
  );
}