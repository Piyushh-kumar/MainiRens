import React, { useEffect, useRef, useState } from "react";
import { Mail, Phone, MapPin, Globe, ArrowRight } from 'lucide-react';
import { FaEnvelope, FaQuestionCircle } from "react-icons/fa";
import "./Contact.css";

export default function Contact() {
  const contentRef = useRef(null);
  const [activeQuestion, setActiveQuestion] = useState(null);

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

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData.entries());

    // Structured to keep headers uniform with the main worksheet layout
    const data = {
      formType: "Partner Registration",
      name: formProps.partnerName,
      company: formProps.companyName,
      email: formProps.partnerEmail,
      phone: formProps.partnerPhone,
      
      // Top-level custom partner items mapped clearly to avoid row string matching issues
      partnerType: formProps.partnerType,
      portfolioLink: formProps.portfolioLink,
      region: formProps.region,
      details: "Corporate Lead Pipeline Sync"
    };

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbxabvLJIMvrY4QG0jgZyw26XrSVb1cCUcqJPXfGMiYFsNAiZCJFMlDJO5DpjYiAM69gZQ/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      alert("Partner Profile Submitted Successfully!");
      e.target.reset();
    } catch (error) {
      console.error(error);
      alert("Error submitting configuration data");
    }
  };

  return (
    <section id="contact" className="cntc-section">
      <div className="cntc-bg-blob"></div>

      <div className="cntc-container" ref={contentRef}>
        <div className="cntc-tagline cntc-slide-in">
          <p>Let's Have A Chat!</p>
        </div>

        <div className="cntc-upper-area">
          <div className="cntc-left-side">
            <div className="cntc-badge cntc-slide-in">
              <span className="cntc-badge-dot"></span> Corporate Relations
            </div>

            <div className="cntc-info-intro cntc-slide-in">
              <h1 className="cntc-title">
                Let’s Build a <span className="cntc-text-gradient">Sustainable Future</span>
              </h1>
              <p className="cntc-desc">
                We are looking for strategic industrial channel partners, regional developers, and infrastructure groups to scale dependable damless clean-tech setups globally.
              </p>
            </div>

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

            <div className="cntc-faqs cntc-slide-in">
              <h2>
                <FaQuestionCircle /> Queries / FAQs
              </h2>
              <div className="cntc-faq">
                {[
                  {
                    question: "What core platforms do you offer corporate channel partners?",
                    answer: "We support EPC contractors and renewable energy developers with localized mechanical design frameworks, modular hydrokinetic baselines, and rooftop aerodynamic grid configurations.",
                  },
                  {
                    question: "How do we request a structural system project audit?",
                    answer: "You can submit full site parameters directly through our dedicated Site Assessment pipeline portal to receive topographical capability calculations.",
                  },
                  {
                    question: "Where are deployments manufactured and calibrated?",
                    answer: "All configurations are engineered, load-tested, and optimized under precise regional manufacturing facilities across industrial channels in India.",
                  }
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

          <div className="cntc-form-container cntc-slide-in">
            <h2>Partner Registration</h2>
            <p className="cntc-form-subtitle">Register with our project deployment teams to unlock supplementary engineering blueprints.</p>
            
            <form onSubmit={handleFormSubmit}>
              <label>Your Name *</label>
              <input type="text" name="partnerName" placeholder="Enter your full name" required />

              <label>Company Name *</label>
              <input type="text" name="companyName" placeholder="Enter your company's name" required />

              <label>Email *</label>
              <input type="email" name="partnerEmail" placeholder="Enter your email" required />

              <label>Phone *</label>
              <input type="tel" name="partnerPhone" placeholder="Enter your phone" required />

              <label>Organization Type *</label>
              <select name="partnerType" required>
                <option value="">Select profile classification</option>
                <option value="contractor">Contractor</option>
                <option value="developer">RE Developer</option>
                <option value="epc-partner">EPC Partner</option>
              </select>

              <label>Portfolio or Company Website link *</label>
              <textarea 
                name="portfolioLink" 
                rows="3" 
                placeholder="Add a link to your portfolio or website. If not available, add a brief introduction of your operation nature." 
                required
              ></textarea>

              <label>What is your region of Operation? *</label>
              <input type="text" name="region" placeholder="Enter your location or region footprint" required />

              <button type="submit" className="cntc-submit-btn">
                Submit Registration <ArrowRight size={18} style={{ marginLeft: '8px', verticalAlign: 'middle' }} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}