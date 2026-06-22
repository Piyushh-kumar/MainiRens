import { useState } from 'react';
import './PartnerRegistrationForm.css';

function PartnerRegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    email: '',
    phone: '',
    role: '',
    website: '',
    region: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // Add form submission logic here
  };

  return (
    <div className="form-container">
      <div className="form-card">
        <h1 className="form-title">Partner Registration</h1>
        <p className="form-subtitle">Join our network and grow with us!</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Company Name</label>
            <input
              type="text"
              name="companyName"
              placeholder="Enter your company's name"
              value={formData.companyName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Phone</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Contractor/RE Developer/EPC Partner</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
            >
              <option value="">Select a role</option>
              <option value="Contractor">Contractor</option>
              <option value="RE Developer">RE Developer</option>
              <option value="EPC Partner">EPC Partner</option>
            </select>
          </div>

          <div className="form-group">
            <label>Portfolio or Company Website Link</label>
            <input
              type="url"
              name="website"
              placeholder="Add a link to your portfolio or company website"
              value={formData.website}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>What is your region of Operation?</label>
            <input
              type="text"
              name="region"
              placeholder="Enter your location or region"
              value={formData.region}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default PartnerRegistrationForm;