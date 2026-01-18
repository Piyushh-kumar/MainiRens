import { Users, ShieldCheck } from 'lucide-react';
import './About.css';

export default function About() {
  return (
    <section className="about">
      <div className="container about-grid">

        {/* Left Content */}
        <div className="about-text">
          <h1>Built by Experts</h1>
          <p>
            Founded by Swati Maini, Maini Renewables brings together deep
            expertise in R&D, mechanical engineering, and large-scale
            project execution. Our focus is simple: reliable clean energy
            without environmental compromise.
          </p>

          <div className="about-cards">
            <div className="about-card">
              <Users />
              <h3>Expert Team</h3>
              <span>Researchers & Engineers</span>
            </div>

            <div className="about-card">
              <ShieldCheck />
              <h3>Patented Technology</h3>
              <span>India • USA (Pending)</span>
            </div>
          </div>
        </div>

        {/* Right Highlight */}
        <div className="about-highlight">
          <div className="highlight-box">
            <h2>Join the Green Revolution</h2>
            <p>
              We are actively deploying pilot projects and expanding
              partnerships across India and beyond.
            </p>
            <button>View Our Pilots</button>
          </div>
        </div>

      </div>
    </section>
  );
}
