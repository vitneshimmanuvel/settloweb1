import { useState } from 'react';
import { FiMail, FiCheck, FiArrowRight } from 'react-icons/fi';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic
    const leadData = {
      ...formData,
      timestamp: new Date().toISOString()
    };
    console.log('Contact form submitted:', leadData);
    
    // Store in localStorage
    const existingLeads = JSON.parse(localStorage.getItem('settlo_contacts') || '[]');
    existingLeads.push(leadData);
    localStorage.setItem('settlo_contacts', JSON.stringify(existingLeads));
    
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', company: '', message: '' });
  };

  return (
    <section className="contact-form-section" id="contact">
      <div className="container">
        <div className="contact-wrapper">
          {/* Left Side - Info */}
          <div className="contact-info">
            <span className="contact-label">CONTACT US</span>
            <h2 className="contact-title">
              Get Customized Solutions, Recommendations, and Estimates for Your Requirements.
            </h2>
            
            <div className="contact-badges">
              <div className="contact-badge">
                <FiCheck className="badge-check" />
                <span>100% Confidential</span>
              </div>
              <div className="contact-badge">
                <FiCheck className="badge-check" />
                <span>We sign NDA</span>
              </div>
            </div>

            <div className="contact-email-box">
              <FiMail className="email-icon" />
              <div className="email-content">
                <span className="email-label">Or Reach Out To Us At</span>
                <a href="mailto:office@settlo.in" className="email-address">
                  office@settlo.in
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="contact-form-box">
            <p className="form-title">Fill out the form and we will contact you</p>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name*"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email*"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number*"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Requirement*"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn-form-submit">
                Book A Free Consultation
                <FiArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
