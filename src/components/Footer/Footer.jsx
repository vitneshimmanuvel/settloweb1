import './Footer.css';

const Footer = () => {
  const offices = [
    {
      city: 'BRIGHTON, UK',
      address: 'Unit 2, Albourne Court, Henfield Road, Albourne, West Sussex, BN6 9FF',
      phone: '+44 1273 575190'
    },
    {
      city: 'LONDON, UK',
      address: 'Unit 2 Hobbs Court, 2 Jacob Street, London SE1 2BG',
      phone: '+44 208 0901819'
    },
    {
      city: 'AUSTRALIA',
      address: '11/475 Blackburn Road, Mount Waverley, Vic 3149',
      phone: '+61 3 9511 5598'
    },
    {
      city: 'DUBAI UAE',
      address: '10, Bayti 22, Street 35, Al Safa 2 Dubai, UAE',
      phone: '+971 50 422 7935'
    },
    {
      city: 'USA',
      address: '6701 Democracy Blvd. Suite 300, Bethesda, MD 20817',
      phone: '+1 301 563 9488'
    },
    {
      city: 'GLOBAL CAPABILITY CENTER',
      address: 'CP4-228, 229, Apparel Park, Mahal Road, Jagatpura, Jaipur, Rajasthan, India 302017',
      phone: '+91 98290 29555'
    }
  ];

  const quickLinks = [
    { label: 'Our Company', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Expertise', href: '#' },
    { label: 'Press', href: '#' },
    { label: 'Partnership', href: '#' },
    { label: 'Contact us', href: '#contact' },
    { label: 'FAQ', href: '#' },
    { label: 'Sitemap', href: '#' }
  ];

  return (
    <footer className="footer">
      <div className="footer-newsletter">
        <div className="container">
          <div className="newsletter-content">
            <h3>Get insights from the experts</h3>
            <div className="newsletter-form">
              <input type="email" placeholder="Enter your email address" />
              <button className="btn btn-orange">Subscribe</button>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-column footer-about">
              <div className="footer-logo">
                <div className="logo-icon">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <rect width="40" height="40" rx="8" fill="#0066cc"/>
                    <circle cx="12" cy="12" r="4" fill="white"/>
                    <circle cx="28" cy="12" r="4" fill="white"/>
                    <circle cx="12" cy="28" r="4" fill="white"/>
                    <circle cx="28" cy="28" r="4" fill="white"/>
                  </svg>
                </div>
                <span className="logo-text">dotsquares</span>
              </div>
              <p className="footer-description">
                Award-winning software development company delivering innovative solutions 
                for startups and Fortune 500 companies worldwide.
              </p>
              <div className="social-links">
                <a href="#" className="social-link">LinkedIn</a>
                <a href="#" className="social-link">Twitter</a>
                <a href="#" className="social-link">Facebook</a>
                <a href="#" className="social-link">YouTube</a>
              </div>
            </div>

            <div className="footer-column">
              <h4 className="footer-heading">Quick Links</h4>
              <ul className="footer-links">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-column footer-offices">
              <h4 className="footer-heading">Our Offices</h4>
              <div className="offices-grid">
                {offices.map((office, index) => (
                  <div key={index} className="office-item">
                    <h5 className="office-city">{office.city}</h5>
                    <p className="office-address">{office.address}</p>
                    <a href={`tel:${office.phone.replace(/\s/g, '')}`} className="office-phone">
                      {office.phone}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <div className="footer-legal">
              <p>© 2002 - 2025 Dotsquares Ltd. All rights reserved.</p>
              <p className="registration">Registered in England & Wales No.: 04381390 | VAT Reg.: 868 8581 51</p>
            </div>
            <div className="footer-legal-links">
              <a href="#">Terms of Use</a>
              <a href="#">Privacy</a>
              <a href="#">Terms & Conditions</a>
              <a href="#">Shipping Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
