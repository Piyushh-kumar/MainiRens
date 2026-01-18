import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  return (
    <section className="contact">
      <div className="container contact-grid">

        {/* Left */}
        <div className="contact-info">
          <h1>Contact Us</h1>
          <p>
            Let’s collaborate to build sustainable energy solutions
            for the future.
          </p>

          <ul>
            <li>
              <MapPin /> Maharashtra, India
            </li>
            <li>
              <Phone /> +91 7710814798
            </li>
            <li>
              <Mail />
              <a href="mailto:info@mainirenewables.com">
                info@mainirenewables.com
              </a>
            </li>
            <li>
              <Globe />
              <a href="https://www.mainirenewables.com">
                www.mainirenewables.com
              </a>
            </li>
          </ul>
        </div>

        {/* Right */}
        <div className="contact-card">
          <h2>Start a Conversation</h2>
          <p>
            We are open to partnerships, pilots, and investment
            discussions.
          </p>
          <button>Email Us</button>
        </div>

      </div>
    </section>
  );
}
