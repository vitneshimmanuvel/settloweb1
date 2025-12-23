import { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend, FiShield, FiLock } from 'react-icons/fi';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const leadData = {
      ...formData,
      timestamp: new Date().toISOString()
    };
    console.log('Contact form submitted:', leadData);

    const existingLeads = JSON.parse(localStorage.getItem('settlo_contacts') || '[]');
    existingLeads.push(leadData);
    localStorage.setItem('settlo_contacts', JSON.stringify(existingLeads));

    setTimeout(() => {
      alert('Thank you! We will contact you within 24 hours.');
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });
      setIsSubmitting(false);
    }, 500);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-bg-pattern"></div>

      <div className="container">
        <div className="contact-header">
          <span className="contact-eyebrow">Let's Work Together</span>
          <h2 className="contact-main-title">
            Ready to Transform Your Business?
          </h2>
          <p className="contact-main-subtitle">
            Get a free consultation and discover how we can help you achieve your goals.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Side - Info Cards */}
          <div className="contact-left">
            <div className="info-card">
              <div className="info-icon">
                <FiMail />
              </div>
              <div className="info-details">
                <h4>Email Us</h4>
                <a href="mailto:info@settlo.com">info@settlo.com</a>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <FiPhone />
              </div>
              <div className="info-details">
                <h4>Call Us</h4>
                <a href="tel:+919876543210">+91 98765 43210</a>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <FiMapPin />
              </div>
              <div className="info-details">
                <h4>Visit Us</h4>
                <span>Erode, Tamil Nadu, India</span>
              </div>
            </div>

            <div className="trust-badges">
              {/* <div className="trust-badge">
                <FiShield className="trust-icon" />
                <span>100% Confidential</span>
              </div>
              <div className="trust-badge">
                <FiLock className="trust-icon" />
                <span>We Sign NDA</span>
              </div> */}
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="contact-right">
            <div className="form-card">
              <h3 className="form-heading">Send Us a Message</h3>
              <p className="form-subheading">Fill out the form and our team will get back to you within 24 hours.</p>

              <form onSubmit={handleSubmit}>
                <div className="form-grid">
                  <div className="input-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name *"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="input-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address *"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="input-group">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number *"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="input-group">
                    <input
                      type="text"
                      name="company"
                      placeholder="Company Name"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="input-group full-width">
                  <textarea
                    name="message"
                    placeholder="Tell us about your project requirements..."
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Get Free Consultation'}
                  <FiSend className="btn-icon" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
