import { useState } from 'react';
import { 
  Factory, 
  Users, 
  ShoppingCart, 
  Building2, 
  HeartPulse, 
  UtensilsCrossed, 
  GraduationCap, 
  Coffee,
  Smartphone,
  Globe,
  Code,
  Cpu,
  Star,
  ArrowRight,
  X,
  User,
  Mail,
  Phone
} from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedDemo, setSelectedDemo] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+91',
    phone: ''
  });
  const [errors, setErrors] = useState({});
  
  // Track demo clicks - first 2 are free
  const [demoClickCount, setDemoClickCount] = useState(() => {
    const saved = localStorage.getItem('settlo_demo_clicks');
    return saved ? parseInt(saved, 10) : 0;
  });

  // Country codes
  const countryCodes = [
    { code: '+91', country: 'India', flag: '🇮🇳' },
    { code: '+1', country: 'USA/Canada', flag: '🇺🇸' },
    { code: '+44', country: 'UK', flag: '🇬🇧' },
    { code: '+61', country: 'Australia', flag: '🇦🇺' },
    { code: '+971', country: 'UAE', flag: '🇦🇪' },
    { code: '+65', country: 'Singapore', flag: '🇸🇬' },
    { code: '+60', country: 'Malaysia', flag: '🇲🇾' },
    { code: '+49', country: 'Germany', flag: '🇩🇪' },
    { code: '+33', country: 'France', flag: '🇫🇷' },
    { code: '+81', country: 'Japan', flag: '🇯🇵' },
  ];

  // Settlo Demo Apps - Your Portfolio
  const demoApps = [
    { 
      label: 'Manufacturing & Service CRM', 
      icon: Factory, 
      link: 'https://settlofullcrm.vercel.app',
      color: '#ff6b35'
    },
    { 
      label: 'HR Industry', 
      icon: Users, 
      link: 'https://settlohrdemo.vercel.app',
      color: '#3fb072'
    },
    { 
      label: 'E-Commerce & Sports', 
      icon: ShoppingCart, 
      link: 'https://settlo-sports-hub.netlify.app',
      color: '#6366f1'
    },
    { 
      label: 'Real Estate CRM', 
      icon: Building2, 
      link: 'https://settlo-realestate-crm.netlify.app',
      color: '#0ea5e9'
    },
    { 
      label: 'Healthcare', 
      icon: HeartPulse, 
      link: 'https://settlohealthcare.vercel.app',
      color: '#ef4444'
    },
    { 
      label: 'Food Industry', 
      icon: UtensilsCrossed, 
      link: 'https://settlohotel.vercel.app',
      color: '#f59e0b'
    },
    { 
      label: 'Education CRM', 
      icon: GraduationCap, 
      link: 'https://settlocollegecrm.vercel.app',
      color: '#8b5cf6'
    },
    { 
      label: 'Canteen Automation', 
      icon: Coffee, 
      link: 'https://settlocanteen.vercel.app',
      color: '#14b8a6'
    },
  ];

  // Our Services
  const services = [
    { label: 'CRM Software', icon: Code },
    { label: 'Mobile Apps', icon: Smartphone },
    { label: 'Web Development', icon: Globe },
    { label: 'AI Integration', icon: Cpu },
  ];

  // Validate email (Gmail format)
  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@(gmail\.com|[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    return emailRegex.test(email);
  };

  // Validate phone number
  const validatePhone = (phone) => {
    const phoneRegex = /^[0-9]{6,15}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  };

  // Handle demo card click
  const handleDemoClick = (demo) => {
    // First 2 demos are free, rest require lead form
    if (demoClickCount < 2) {
      // Free access - increment counter and open directly
      const newCount = demoClickCount + 1;
      setDemoClickCount(newCount);
      localStorage.setItem('settlo_demo_clicks', newCount.toString());
      window.open(demo.link, '_blank');
    } else {
      // Require lead form
      setSelectedDemo(demo);
      setShowModal(true);
      setErrors({});
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validate name
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Please enter a valid name (min 2 characters)';
    }

    // Validate email
    if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Validate phone
    if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number (6-15 digits)';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Store lead data (you can send this to your backend)
    const leadData = {
      name: formData.name,
      email: formData.email,
      phone: `${formData.countryCode} ${formData.phone}`,
      demo: selectedDemo.label,
      timestamp: new Date().toISOString()
    };
    
    console.log('Lead captured:', leadData);
    
    // Store in localStorage for demo purposes
    const existingLeads = JSON.parse(localStorage.getItem('settlo_leads') || '[]');
    existingLeads.push(leadData);
    localStorage.setItem('settlo_leads', JSON.stringify(existingLeads));

    // Redirect to demo
    window.open(selectedDemo.link, '_blank');
    
    // Close modal and reset form
    setShowModal(false);
    setFormData({ name: '', email: '', countryCode: '+91', phone: '' });
    setErrors({});
  };

  return (
    <section className="hero">
      {/* Background Image with Overlay */}
      <div className="hero-background">
        <img 
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=800&fit=crop"
          alt="Team working"
          className="hero-bg-image"
        />
        <div className="hero-overlay"></div>
      </div>

      <div className="container">
        {/* Big Center Tagline */}
        <div className="hero-main-tagline">
          <span className="tagline-innovate">Innovate Ideas</span>
          <span className="tagline-dot">•</span>
          <span className="tagline-educate">Educate Minds</span>
          <span className="tagline-dot">•</span>
          <span className="tagline-connect">Connect Talents</span>
        </div>

        {/* Services Bar */}
        <div className="services-bar">
          {services.map((service, index) => (
            <div key={index} className="service-item">
              <service.icon size={24} />
              <span>{service.label}</span>
            </div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="hero-content">
          <div className="hero-badge">
            <Star size={16} fill="#ffc107" color="#ffc107" />
            <span>Trusted by 100+ Businesses in India</span>
          </div>
          <h1 className="hero-title">
            We Innovate Ideas
            <span className="hero-highlight">& Educate Talents</span>
          </h1>
          <p className="hero-subtitle">
            Your trusted technology partner building <strong>smart CRM solutions, mobile apps & web platforms</strong> — 
            transforming businesses across industries with cutting-edge innovation.
          </p>
        </div>

        {/* Demo Apps Section */}
        <div className="demo-section">
          <h2 className="demo-title">🚀 Try Our FREE Demo Apps</h2>
          <div className="demo-grid">
            {demoApps.map((app, index) => {
              const IconComponent = app.icon;
              return (
                <button 
                  key={index} 
                  onClick={() => handleDemoClick(app)}
                  className="demo-card"
                  style={{ '--card-color': app.color }}
                >
                  <div className="demo-icon" style={{ background: app.color }}>
                    <IconComponent size={28} color="#fff" />
                  </div>
                  <span className="demo-label">{app.label}</span>
                  <ArrowRight size={16} className="demo-arrow" />
                </button>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="hero-cta">
          <a href="#contact" className="btn btn-orange btn-lg">
            💬 Reply "DEMO" — Get Your Customized App in 30 Minutes!
          </a>
          <p className="cta-subtext">
            ⚡ Let's lock a 20-min slot this week — save hours of work daily!
          </p>
        </div>

      </div>

      {/* Lead Capture Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowModal(false)}>
              <X size={24} />
            </button>
            
            <div className="modal-header">
              <div className="modal-icon" style={{ background: selectedDemo?.color }}>
                {selectedDemo && <selectedDemo.icon size={32} color="#fff" />}
              </div>
              <h3>Access {selectedDemo?.label} Demo</h3>
              <p>Please enter your details to access the free demo</p>
            </div>

            <form onSubmit={handleSubmit} className="lead-form">
              {/* Name Field */}
              <div className="form-group">
                <label htmlFor="name">
                  <User size={18} />
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={errors.name ? 'error' : ''}
                />
                {errors.name && <span className="error-text">{errors.name}</span>}
              </div>

              {/* Email Field */}
              <div className="form-group">
                <label htmlFor="email">
                  <Mail size={18} />
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="yourname@gmail.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={errors.email ? 'error' : ''}
                />
                {errors.email && <span className="error-text">{errors.email}</span>}
              </div>

              {/* Phone Field */}
              <div className="form-group">
                <label htmlFor="phone">
                  <Phone size={18} />
                  Mobile Number *
                </label>
                <div className="phone-input-group">
                  <select
                    value={formData.countryCode}
                    onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                    className="country-code-select"
                  >
                    {countryCodes.map((country) => (
                      <option key={country.code} value={country.code}>
                        {country.flag} {country.code}
                      </option>
                    ))}
                  </select>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="9876543210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '') })}
                    className={errors.phone ? 'error' : ''}
                    maxLength={15}
                  />
                </div>
                {errors.phone && <span className="error-text">{errors.phone}</span>}
              </div>

              <button type="submit" className="submit-btn" style={{ background: selectedDemo?.color }}>
                Access Free Demo →
              </button>

              <p className="form-disclaimer">
                🔒 Your information is secure and will not be shared.
              </p>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
