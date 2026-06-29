import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, Droplet, Wind, MapPin, Gauge } from 'lucide-react';
import "./SiteAssessment.css";

export default function SiteAssessment() {
  const contentRef = useRef(null);
  const [formTab, setFormTab] = useState('hydro'); // 'hydro' or 'wind'

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("site-visible");
        }
      });
    }, { threshold: 0.1 });

    const elements = contentRef.current?.querySelectorAll(".site-slide-in") || [];
    elements.forEach((element) => observer.observe(element));

    return () => {
      elements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData.entries());

    // Structured to bundle raw fields directly into individual top-level root columns
    const data = {
      formType: formTab === "hydro" ? "Hydro Site Assessment" : "Wind Site Assessment",
      name: formProps.siteName,
      company: formProps.landName,
      email: formProps.siteEmail,
      phone: formProps.sitePhone,
      
      // Captures the typed text from the standard input field below natively
      siteLocation: formProps.siteLocation || "",
      
      siteOwnership: formProps.siteOwnership,
      channelType: formTab === "hydro" ? formProps.channelType : "N/A (Wind)",
      windPlacement: formTab === "wind" ? formProps.windPlacement : "N/A (Hydro)",
      additionalDetails: formProps.additionalDetails || "",
      details: `Generated via ${formTab.toUpperCase()} Matrix Pipeline`
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

      alert("Assessment Parameters Submitted Successfully!");
      e.target.reset();
    } catch (error) {
      console.error(error);
      alert("Error submitting assessment profile");
    }
  };

  return (
    <section className="site-assess-section">
      <div className="site-bg-blob"></div>

      <div className="site-assess-container" ref={contentRef}>
        <div className="site-upper-area">
          
          {/* Left Hero Content Section */}
          <div className="site-left-side site-slide-in">
            <div className="site-badge">
              <span className="site-badge-dot"></span> Kinetic Audit Pipeline
            </div>
            
            <h1 className="site-title">
              Map Your Localized <br />
              <span className="site-text-gradient">Kinetic Capacity</span>
            </h1>
            
            <p className="site-desc">
              Whether you have unutilized velocity parameters running through industrial drainage canals, 
              private agricultural channels, or active micro-climatic wind rooftop tunnels, share your structural vectors.
            </p>

            <div className="site-guidelines">
              <h3>Assessment Benchmarks</h3>
              <div className="guideline-card">
                <MapPin size={20} className="guideline-icon" />
                <div>
                  <strong>Geospatial Mapping</strong>
                  <span>Accurate location footprints help us track regional topography and seasonal flow trends via remote datasets.</span>
                </div>
              </div>
              <div className="guideline-card">
                <Gauge size={20} className="guideline-icon" />
                <div>
                  <strong>Model Configuration Training</strong>
                  <span>Your parameters directly optimize our proprietary decentralized grid matrix layout mappings.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Lead Capture Form Column */}
          <div className="site-form-container site-slide-in">
            
            {/* Form Toggle Selection Tabs */}
            <div className="site-form-tabs">
              <button 
                className={`site-tab-btn ${formTab === 'hydro' ? 'active' : ''}`}
                onClick={() => setFormTab('hydro')}
                type="button"
              >
                <Droplet size={16} /> Hydro Assessment
              </button>
              <button 
                className={`site-tab-btn ${formTab === 'wind' ? 'active' : ''}`}
                onClick={() => setFormTab('wind')}
                type="button"
              >
                <Wind size={16} /> Wind Assessment
              </button>
            </div>

            <h2>{formTab === 'hydro' ? 'Hydro Site Assessment' : 'Wind Site Assessment'}</h2>
            <p className="site-form-subtitle">
              Provide localized environmental dimensions to evaluate mechanical optimization limits.
            </p>

            <form onSubmit={handleFormSubmit}>
              <label>Your Name *</label>
              <input type="text" name="siteName" placeholder="Enter your full name" required />

              <label>Company Name / Private Land *</label>
              <input type="text" name="landName" placeholder="Enter registration name or enterprise entity" required />

              <label>Email *</label>
              <input type="email" name="siteEmail" placeholder="Enter your professional email workspace" required />

              <label>Phone *</label>
              <input type="tel" name="sitePhone" placeholder="Enter active contact line" required />

              {/* Clean Manual Input String Block */}
              <label>Site Location Coordinates / Address *</label>
              <input 
                type="text" 
                name="siteLocation" 
                placeholder="Enter complete address or coordinates manually" 
                required 
              />

              <label>Site Ownership Framework *</label>
              <select name="siteOwnership" required>
                <option value="">Select organizational layer</option>
                <option value="individual">Individual / Private Freehold</option>
                <option value="company">Industrial / Corporate Owned</option>
                <option value="government">Government Allocation / Leasehold</option>
              </select>

              {formTab === 'hydro' ? (
                <>
                  <label>Channel Geometric Footprint *</label>
                  <select name="channelType" required>
                    <option value="">Select profile mapping</option>
                    <option value="lined-canal">Lined Concrete Agricultural Canal</option>
                    <option value="unlined-river">Natural Riverine Channel Baseline</option>
                    <option value="industrial-outflow">Industrial / Municipal Outflow Conduit</option>
                  </select>

                  <label>Additional Hydraulic History</label>
                  <textarea 
                    name="additionalDetails" 
                    rows="3" 
                    placeholder="Enter estimated velocity profile maps, peak cubic meter flow values, or channel depth details if available..."
                  ></textarea>
                </>
              ) : (
                <>
                  <label>Structural Deployment Level *</label>
                  <select name="windPlacement" required>
                    <option value="">Select elevation map</option>
                    <option value="industrial-rooftop">Industrial Complex Rooftop Deck</option>
                    <option value="highway-median">High-Velocity Infrastructure Grid Median</option>
                    <option value="open-terrain">Unobstructed Open Ground Terrain</option>
                  </select>

                  <label>Additional Aerodynamic History</label>
                  <textarea 
                    name="additionalDetails" 
                    rows="3" 
                    placeholder="Enter surrounding building structural constraints, micro-wind tunnel effects, or known continuous wind vectors..."
                  ></textarea>
                </>
              )}

              <button type="submit" className="site-submit-btn">
                Submit Assessment Parameters <ArrowRight size={18} style={{ marginLeft: '8px', verticalAlign: 'middle' }} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}