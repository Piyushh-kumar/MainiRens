import { useState, useEffect } from "react";
import { ArrowRight, X } from "lucide-react";
import "./OurPartners.css";

const PartnersPage = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [showPartnerForm, setShowPartnerForm] = useState(false);
  const [partners, setPartners] = useState([]);

  const partnersData = {
    incubation: [
      {
        src: "https://static.wixstatic.com/media/1bf77c_7bee8ba9cdfd45418d3338f52de7e724~mv2.png/v1/fill/w_299,h_78,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/image.png",
        link: "https://www.aicjklu.in/"
      },
      {
        src: "https://static.wixstatic.com/media/1bf77c_d0b50892c3794c9aa7df535faf20b3ad~mv2.jpg/v1/fill/w_130,h_130,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Venture%20center.jpg",
        link: "https://www.venturecenter.co.in/"
      },
      {
        src: "https://static.wixstatic.com/media/1bf77c_6fc1d6b133ae4873aef3afeb0d98e535~mv2.png/v1/fill/w_243,h_129,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/image%20(1).png",
        link: "https://bhau.org/"
      },
      {
        src: "https://static.wixstatic.com/media/1bf77c_41bb04a2b420456bad8f13a43e50b207~mv2.png/v1/fill/w_209,h_136,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/climate%20collective.png",
        link: "https://climatecollective.net/"
      }
    ],
    grants: [
      {
        src: "https://static.wixstatic.com/media/1bf77c_0815980406f547788cb51023d573812b~mv2.jpg/v1/fill/w_178,h_138,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/SISFS_JPG.jpg",
        link: "https://seedfund.startupindia.gov.in/"
      },
      {
        src: "https://static.wixstatic.com/media/1bf77c_d90c2bb29ac34139996a3da2b9a91625~mv2.jpg/v1/fill/w_273,h_111,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Image-HDFC-Bank-SmartUp-Grants-2021-MediaBrief_edited.jpg",
        link: "https://indiaeducationdiary.in/incubated-startup-of-aic-jklu-maini-renewables-pvt-ltd-receive-grant-of-inr-21-25-lacs-under-hdfc-parivartan-smartup-grant/"
      },
      {
        src: "https://static.wixstatic.com/media/1bf77c_3ccf90c192f14875ab5b70f0335d4d35~mv2.png/v1/fill/w_134,h_125,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Cummins.png",
        link: "https://www.cummins.com/en/in/company/india-companies/cummins-india-limited"
      },
      {
        src: "https://static.wixstatic.com/media/1bf77c_78f41977ea0647ab9d4f06711226da61~mv2.jpg/v1/fill/w_273,h_102,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/CPI%20logo.jpg",
        link: "https://www.climatepolicyinitiative.org/"
      },
      {
        src: "https://static.wixstatic.com/media/1bf77c_f4ce4dfba4e14d9988133c5a5fa959c5~mv2.png/v1/fill/w_218,h_138,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/bahrat%20seats.png",
        link: "https://bharatseats.com/"
      }
    ],
    advisors: [
      {
        src: "https://static.wixstatic.com/media/1bf77c_6695dd57a2ff4ab1ba448cbe0ffde17b~mv2.png/v1/fill/w_125,h_119,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/NITI-Aayog-logo_edited.png",
        link: "https://www.niti.gov.in/"
      },
      {
        src: "https://static.wixstatic.com/media/1bf77c_72880cce63434be9bf4b9f3e80c8676e~mv2.png/v1/fill/w_119,h_119,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Indian_Institute_of_Technology_Roorkee_logo.png",
        link: "https://hre.iitr.ac.in/"
      },
      {
        src: "https://static.wixstatic.com/media/1bf77c_b3b076574c7a4ed898681dd940bc36d2~mv2.jpg/v1/fill/w_144,h_140,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo_for_National_Institute_of_Ocean_Technology.jpg",
        link: "https://www.niot.res.in/"
      },
      {
        src: "https://www.startupindia.gov.in/content/dam/invest-india/newhomepage/DPIIT-header.png",
        link: "https://www.startupindia.gov.in/"
      }
    ],
  };

  const toggleOptions = (type) => {
    setPartners(partnersData[type]);
    setShowOptions(true);
  };

  const closePopup = (e) => {
    if (e.target.classList.contains("prtn-backdrop")) {
      setShowOptions(false);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setShowPartnerForm(false);
  };

  // Lock scrolling behind active modal windows
  useEffect(() => {
    if (showOptions || showPartnerForm) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [showOptions, showPartnerForm]);

  return (
    <div className="prtn-page-wrapper">
      <div className={`prtn-container ${showOptions || showPartnerForm ? "prtn-blurred" : ""}`}>
        
        {/* Header Block Section */}
        <div className="prtn-header">
          <div className="prtn-left-section">
            <span className="prtn-badge">Ecosystem Network</span>
            <h2>Partners & Team</h2>
            <h3>Collaborative Excellence: <br /><span>Building Bridges, Driving Success</span></h3>
          </div>
          <div className="prtn-right-section">
            <p>
              Empowering partnerships and fostering teamwork to achieve unparalleled excellence. 
              Our dedicated approach and shared vision create a synergy that fuels innovation and 
              drives sustainable success for all.
            </p>
          </div>
        </div>

        {/* Categories Selection Matrix Grid */}
        <div className="prtn-bottom-section">
          <div className="prtn-grid">
            <div className="prtn-card" onClick={() => toggleOptions('incubation')}>
              <div className="prtn-card-content">
                <h4>Incubation & Acceleration</h4>
                <p>Explore our foundational backing institutes</p>
              </div>
              <ArrowRight size={20} className="prtn-arrow" />
            </div>
            <div className="prtn-card" onClick={() => toggleOptions('grants')}>
              <div className="prtn-card-content">
                <h4>Granting Organizations</h4>
                <p>Financial catalysts scaling green innovations</p>
              </div>
              <ArrowRight size={20} className="prtn-arrow" />
            </div>
            <div className="prtn-card" onClick={() => toggleOptions('advisors')}>
              <div className="prtn-card-content">
                <h4>Advisors & Knowledge</h4>
                <p>Leading research houses and technical insights</p>
              </div>
              <ArrowRight size={20} className="prtn-arrow" />
            </div>
          </div>

          {/* Invitation Section banner block */}
          <div className="prtn-network-banner">
            <div className="prtn-banner-text">
              <h4>Ready to make an impact?</h4>
              <p>Join the Maini Renewables partner network and scale damless clean energy.</p>
            </div>
            <button
              className="prtn-become-partner-btn"
              onClick={() => setShowPartnerForm(true)}
            >
              Become a partner <ArrowRight size={18} style={{ marginLeft: "8px" }} />
            </button>
          </div>
        </div>
      </div>

      {/* Network Category Popup Overlay Backdrop Window */}
      <div className={`prtn-backdrop ${showOptions ? "prtn-show" : ""}`} onClick={closePopup}>
        {showOptions && (
          <div className="prtn-popup-options">
            <button className="prtn-close-x" onClick={() => setShowOptions(false)} aria-label="Close popup">
              <X size={24} />
            </button>
            <div className="prtn-list">
              {partners.map((partner, index) => (
                <a key={index} href={partner.link} target="_blank" rel="noopener noreferrer" className="prtn-item">
                  <div className="prtn-img-container">
                    <img src={partner.src} alt={`Partner logo indicator ${index}`} className="prtn-image" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Interactive Lead Intake Partner Registration Modal Window */}
      {showPartnerForm && (
        <div className="prtn-modal-backdrop" onClick={(e) => e.target.classList.contains("prtn-modal-backdrop") && setShowPartnerForm(false)}>
          <div className="prtn-modal">
            <button className="prtn-close-x" onClick={() => setShowPartnerForm(false)} aria-label="Close modal">
              <X size={24} />
            </button>
            <h2>Partner Registration</h2>
            <p>Connect with our engineering and deployment pipeline teams.</p>
            
            <form onSubmit={handleFormSubmit}>
              <label>Full Name</label>
              <input type="text" name="name" placeholder="John Doe" required />
              
              <label>Work Email</label>
              <input type="email" name="email" placeholder="john@company.com" required />
              
              <label>Proposed Collaboration Details</label>
              <textarea name="message" rows="4" placeholder="Tell us how you would like to collaborate..." required></textarea>
              
              <div className="prtn-modal-actions">
                <button type="submit" className="prtn-submit-btn">Submit Proposal</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PartnersPage;