import { Mail, Phone, MapPin, Globe, ArrowRight, MessageSquare } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  return (
    <section className="cntc-section">
      {/* Decorative Background Element */}
      <div className="cntc-bg-blob"></div>

      <div className="cntc-container cntc-grid">

        {/* Left: Info Column */}
        <div className="cntc-info-col">
          <div className="cntc-badge">
            <span className="cntc-badge-dot"></span> Get in Touch
          </div>

          <h1 className="cntc-title">
            Let’s Build a <span className="cntc-text-gradient">Sustainable Future</span>
          </h1>
          
          <p className="cntc-desc">
            We are looking for partners, investors, and pilots to scale reliable 
            clean energy. Reach out to discuss collaboration.
          </p>

          <ul className="cntc-list">
            <li className="cntc-list-item">
              <div className="cntc-icon-box">
                <MapPin size={20} />
              </div>
              <span className="cntc-text">Maharashtra, India</span>
            </li>
            
            <li className="cntc-list-item">
              <div className="cntc-icon-box">
                <Phone size={20} />
              </div>
              <span className="cntc-text">+91 7710814798</span>
            </li>

            <li className="cntc-list-item">
              <div className="cntc-icon-box">
                <Mail size={20} />
              </div>
              <a href="mailto:info@mainirenewables.com" className="cntc-link">
                info@mainirenewables.com
              </a>
            </li>

            <li className="cntc-list-item">
              <div className="cntc-icon-box">
                <Globe size={20} />
              </div>
              <a href="https://www.mainirenewables.com" target="_blank" rel="noopener noreferrer" className="cntc-link">
                www.mainirenewables.com
              </a>
            </li>
          </ul>
        </div>

        {/* Right: Action Card */}
        <div className="cntc-card-col">
          <div className="cntc-card">
            <div className="cntc-card-icon">
              <MessageSquare size={32} />
            </div>
            
            <h2 className="cntc-card-title">Start a Conversation</h2>
            <p className="cntc-card-desc">
              Whether you have a technical question or an investment proposal, 
              our team is ready to connect.
            </p>
            
            <a href="mailto:info@mainirenewables.com" className="cntc-button">
              Send an Email <ArrowRight size={18} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}