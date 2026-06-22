import React, { useEffect, useRef, useState } from "react";
import { Mail, Phone, MapPin, Globe, ArrowRight, Building2, Droplet } from 'lucide-react';
import { FaEnvelope, FaQuestionCircle } from "react-icons/fa";
import "./Contact.css";

export default function Contact() {
  const contentRef = useRef(null);
  const [activeQuestion, setActiveQuestion] = useState(null);
  const [formTab, setFormTab] = useState('partner'); // 'partner' or 'hydro'

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

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle submission logic here
    alert(`${formTab === 'partner' ? 'Partner Registration' : 'Hydro Site Assessment'} submitted successfully!`);
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

          {/* Right Side Column: Dynamic Lead Form Card */}
          <div className="cntc-form-container cntc-slide-in">
            
            {/* Form Toggle Tabs */}
            <div className="cntc-form-tabs">
              <button 
                className={`cntc-tab-btn ${formTab === 'partner' ? 'active' : ''}`}
                onClick={() => setFormTab('partner')}
                type="button"
              >
                <Building2 size={16} /> Partner Registration
              </button>
              <button 
                className={`cntc-tab-btn ${formTab === 'hydro' ? 'active' : ''}`}
                onClick={() => setFormTab('hydro')}
                type="button"
              >
                <Droplet size={16} /> Hydro Site Assessment
              </button>
            </div>

            {formTab === 'partner' ? (
              <>
                <h2>Partner Registration</h2>
                <p className="cntc-form-subtitle">Register with us to connect with our engineering and deployment pipeline teams.</p>
                
                <form onSubmit={handleFormSubmit}>
                  <label>Your Name *</label>
                  <input type="text" name="partnerName" placeholder="Enter your full name" required />

                  <label>Company Name *</label>
                  <input type="text" name="companyName" placeholder="Enter your company's name" required />

                  <label>Email *</label>
                  <input type="email" name="partnerEmail" placeholder="Enter your email" required />

                  <label>Phone *</label>
                  <input type="tel" name="partnerPhone" placeholder="Enter your phone" required />

                  <label>Contractor / RE Developer / EPC partner *</label>
                  <select name="partnerType" required>
                    <option value="">Add one</option>
                    <option value="contractor">Contractor</option>
                    <option value="developer">RE Developer</option>
                    <option value="epc-partner">EPC Partner</option>
                  </select>

                  <label>Portfolio or Company Website link *</label>
                  <textarea 
                    name="portfolioLink" 
                    rows="3" 
                    placeholder="Add a link to your portfolio or website. If not available, add a brief introduction of your work nature." 
                    required
                  ></textarea>

                  <label>What is your region of Operation? *</label>
                  <input type="text" name="region" placeholder="Enter your location or region" required />

                  <button type="submit" className="cntc-submit-btn">
                    Submit Registration <ArrowRight size={18} style={{ marginLeft: '8px', verticalAlign: 'middle' }} />
                  </button>
                </form>
              </>
            ) : (
              <>
                <h2>Hydro Site Assessment</h2>
                <p className="cntc-form-subtitle">Share your site details with us while we train our AI model.</p>
                
                <form onSubmit={handleFormSubmit}>
                  <label>Your Name *</label>
                  <input type="text" name="hydroName" placeholder="Enter your full name" required />

                  <label>Company Name/ Private Land *</label>
                  <input type="text" name="landName" placeholder="Enter your company's name" required />

                  <label>Email *</label>
                  <input type="email" name="hydroEmail" placeholder="Enter your email" required />

                  <label>Phone *</label>
                  <input type="tel" name="hydroPhone" placeholder="Enter your phone" required />

                  <label>Where is your site located? https://www.google.com/maps *</label>
                  <input type="text" name="googleMapsLink" placeholder="Paste your google map location here" required />

                  <label>Tell us about the site ownership *</label>
                  <select name="siteOwnership" required>
                    <option value="">Add one</option>
                    <option value="individual">Individual / Private Land</option>
                    <option value="company">Company Owned</option>
                    <option value="government">Government / Lease</option>
                  </select>

                  <label>Share any additional details about the site</label>
                  <textarea 
                    name="additionalDetails" 
                    rows="3" 
                    placeholder="Flow rate history, channel type, or extra notes..."
                  ></textarea>

                  <button type="submit" className="cntc-submit-btn">
                    Submit Assessment <ArrowRight size={18} style={{ marginLeft: '8px', verticalAlign: 'middle' }} />
                  </button>
                </form>
              </>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}