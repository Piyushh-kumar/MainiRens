import { Globe, Mail } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">

        {/* Brand */}
        <div>
          <div className="footer-logo">
            <div>M</div>
            <span>
              MAINI <b>RENEWABLES</b>
            </span>
          </div>
          <p>
            Innovative energy solutions for a sustainable tomorrow.
            Harnessing the power of water and wind responsibly.
          </p>

          <div className="footer-social">
            <span><Globe /></span>
            <span><Mail /></span>
          </div>
        </div>

        {/* Links */}
        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/technology">Technology</a></li>
            <li><a href="/impact">Impact</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </div>

        {/* Copyright */}
        <div className="footer-copy">
          © {new Date().getFullYear()} Maini Renewables.
          <br />
          All rights reserved.
        </div>

      </div>
    </footer>
  );
}
