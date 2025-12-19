import { FiCode, FiSmartphone, FiGlobe, FiShoppingCart, FiCloud, FiUsers, FiLink, FiDatabase, FiShield } from 'react-icons/fi';
import './TechSolutions.css';

const TechSolutions = () => {
  const solutions = [
    {
      title: 'Software Development',
      description: 'Custom software solutions built with modern technologies to meet your specific business requirements.',
      icon: <FiCode size={28} />,
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop'
    },
    {
      title: 'App Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
      icon: <FiSmartphone size={28} />,
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop'
    },
    {
      title: 'Web Development',
      description: 'Responsive, high-performance websites and web applications for modern businesses.',
      icon: <FiGlobe size={28} />,
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=250&fit=crop'
    },
    {
      title: 'E-Commerce Solutions',
      description: 'Scalable online stores and marketplace platforms to grow your digital commerce.',
      icon: <FiShoppingCart size={28} />,
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop'
    },
    {
      title: 'Cloud Services',
      description: 'Cloud migration, infrastructure setup, and management for optimal performance.',
      icon: <FiCloud size={28} />,
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=250&fit=crop'
    },
    {
      title: 'HR & Talent Solutions',
      description: 'Connect with skilled professionals and build high-performing teams.',
      icon: <FiUsers size={28} />,
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop'
    }
  ];

  return (
    <section className="tech-solutions section">
      <div className="container">
        <h2 className="section-title">Our Solutions</h2>
        <h3 className="tech-solutions-subtitle">Empowering Your Digital Journey</h3>
        <p className="section-subtitle">
          From concept to deployment, we deliver comprehensive technology solutions tailored to your needs.
        </p>

        <div className="solutions-grid">
          {solutions.map((solution, index) => (
            <div key={index} className="solution-card">
              <div className="solution-image">
                <img src={solution.image} alt={solution.title} />
                <div className="solution-overlay">
                  <span className="solution-icon-overlay">{solution.icon}</span>
                </div>
              </div>
              <div className="solution-content">
                <div className="solution-icon">{solution.icon}</div>
                <h4 className="solution-title">{solution.title}</h4>
                <p className="solution-description">{solution.description}</p>
                <div className="solution-actions">
                  <a href="#" className="btn btn-sm btn-primary">Learn More</a>
                  <a href="#contact" className="btn btn-sm btn-secondary">Contact Us</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSolutions;
