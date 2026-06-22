import React, { useEffect, useRef, useState } from "react";
import { Mail, Phone, MapPin, Globe, ArrowRight } from 'lucide-react';
import { FaEnvelope, FaQuestionCircle } from "react-icons/fa";
import "./Contact.css";

export default function Contact() {
  const contentRef = useRef(null);
  const [activeQuestion, setActiveQuestion] = useState(null);
  const [propertyType, setPropertyType] = useState('hydro');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("cntc-visible");
        }
      });
    }, { threshold: 0.1 });

    const elements = contentRef.current?.querySelectorAll(".cntc-slide-in") || [];
    elements.forEach((element) => observer.observe(element));

    return () => {
      elements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  return (
    <section id="contact" className="cntc-section">
      {/* Decorative Background Element */}
      <div className="cntc-bg-blob"></div>

      <div className="cntc-container" ref={contentRef}>
        
        {/* Top Header Tagline */}
        <div className="cntc-tagline cntc-slide-in">
          <p>Let's Have A Chat!</p>
        </div>

        <div className="cntc-upper-area">
          
          {/* Left Side Column: Info Elements & FAQs */}
          <div className="cntc-left-side">
            
            {/* Context Badge */}
            <div className="cntc-badge cntc-slide-in">
              <span className="cntc-badge-dot"></span> Get in Touch
            </div>

            {/* Combined Title and Description */}
            <div className="cntc-info-intro cntc-slide-in">
              <h1 className="cntc-title">
                Let’s Build a <span className="cntc-text-gradient">Sustainable Future</span>
              </h1>
              <p className="cntc-desc">
                We are looking for partners, investors, and pilots to scale reliable 
                clean energy. Reach out to discuss collaboration or technical queries.
              </p>
            </div>

            {/* Main Information Box */}
            <div className="cntc-info cntc-slide-in">
              <h2>
                <FaEnvelope /> Contact Details
              </h2>
              
              <ul className="cntc-list">
                <li className="cntc-list-item">
                  <div className="cntc-icon-box"><MapPin size={20} /></div>
                  <span className="cntc-text">Maharashtra, India</span>
                </li>
                
                <li className="cntc-list-item">
                  <div className="cntc-icon-box"><Phone size={20} /></div>
                  <span className="cntc-text">+91 7710814798</span>
                </li>

                <li className="cntc-list-item">
                  <div className="cntc-icon-box"><Mail size={20} /></div>
                  <a href="mailto:info@mainirenewables.com" className="cntc-info-link">
                    info@mainirenewables.com
                  </a>
                </li>

                <li className="cntc-list-item">
                  <div className="cntc-icon-box"><Globe size={20} /></div>
                  <a href="https://www.mainirenewables.com" target="_blank" rel="noopener noreferrer" className="cntc-info-link">
                    www.mainirenewables.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Embedded Site Map */}
            <div className="cntc-map cntc-slide-in">
              <h2>Site Location</h2>
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345092553!2d144.95373631531638!3d-37.81627997975102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11f4ab%3A0x5045675218ceed30!2sMelbourne%20Victoria%20Australia!5e0!3m2!1sen!2sus!4v1632447455770!5m2!1sen!2sus"
                width="100%"
                height="220"
                style={{ border: 0, borderRadius: "6px" }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>

            {/* Interactive FAQs Section */}
            <div className="cntc-faqs cntc-slide-in">
              <h2>
                <FaQuestionCircle /> Queries / FAQs
              </h2>
              <div className="cntc-faq">
                {[
                  {
                    question: "What services do you offer?",
                    answer: "We provide innovative renewable energy solutions tailored to your needs.",
                  },
                  {
                    question: "How can I get a quote?",
                    answer: "Simply fill out the contact form, and we will get back to you with a personalized quote.",
                  },
                  {
                    question: "Where are you located?",
                    answer: "Our office is situated in the heart of the city, easily accessible for consultations.",
                  },
                  {
                    question: "How can I track my project progress?",
                    answer: "We provide regular updates through email and our project management system.",
                  },
                ].map((item, index) => (
                  <div key={index}>
                    <div
                      className={`cntc-faq-question ${activeQuestion === index ? "cntc-active" : ""}`}
                      onClick={() => toggleQuestion(index)}
                    >
                      {item.question}
                    </div>
                    <div className={`cntc-faq-answer ${activeQuestion === index ? "cntc-show" : ""}`}>
                      {item.answer}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Side Column: Lead Form Card */}
          <div className="cntc-form-container cntc-slide-in">
            <h2>Contact Form</h2>
            <p className="cntc-form-subtitle">
              Whether you have a technical question or an investment proposal, our team is ready to connect.
            </p>
            
            <form onSubmit={(e) => e.preventDefault()}>
              <label>Name:</label>
              <input type="text" name="name" placeholder="Your Name" required />

              <label>Contact:</label>
              <input type="tel" name="contact" placeholder="Phone Number" required />

              <label>Location:</label>
              <input type="text" name="location" placeholder="Your City/State" required />

              <label>Site Location:</label>
              <input
                type="text"
                name="siteLocation"
                placeholder="Google Map Pin Link"
                required
              />

              <label>Type of Property</label>
              <select name="property-name" required onChange={(e) => setPropertyType(e.target.value)}>
                <option value="hydro">Hydro</option>
                <option value="wind">Wind</option>
              </select>

              {propertyType === "hydro" && (
                <div className="cntc-property-selected">
                  <label>Type of Property - Hydro:</label>
                  <select name="hydro-type" required>
                    <option value="canal">Canal</option>
                    <option value="river">River</option>
                    <option value="existing-power-plant">Existing Power Plant</option>
                    <option value="tidal">Tidal</option>
                  </select>
                </div>
              )}

              {propertyType === "wind" && (
                <div className="cntc-property-selected">
                  <label>Type of Property - Wind:</label>
                  <select name="wind-type" required>
                    <option value="rooftop">Rooftop</option>
                    <option value="existing">Existing</option>
                    <option value="wind-farm">Wind Farm</option>
                    <option value="highway">Highway</option>
                    <option value="open-farm">Open Farm</option>
                  </select>
                </div>
              )}

              <label>Are you an individual or company?</label>
              <select name="individual-or-company" required>
                <option value="individual">Individual</option>
                <option value="company">Company</option>
              </select>

              <button type="submit" className="cntc-submit-btn">
                Submit Proposal <ArrowRight size={18} style={{ marginLeft: '8px', verticalAlign: 'middle' }} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}