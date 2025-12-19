import { useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import './Excellence.css';

const Excellence = () => {
  const [activeCard, setActiveCard] = useState(0);

  // Parse feature text to highlight keywords in blue
  const parseFeature = (text) => {
    // Keywords to highlight in blue
    const keywords = [
      'MVP and SaaS development services',
      'CTO-as-a-service',
      'Data Analytics and DevOps services',
      'Technology Consulting',
      'Application Modernization',
      'Custom Software Development',
      'QA & Testing',
      'Cloud Development',
      'Software Consulting & Development',
      'Staff Augmentation',
      'White Label services'
    ];

    let result = text;
    keywords.forEach(keyword => {
      if (text.includes(keyword)) {
        result = result.replace(keyword, `<span class="feature-highlight">${keyword}</span>`);
      }
    });
    return result;
  };

  const businessTypes = [
    {
      title: 'Startup Launchpad',
      description: 'Conquer the challenges of rapid scaling, budget constraints, and market validation with our expertise.',
      features: [
        'Get to market fast and cost-effectively with our MVP and SaaS development services.',
        'Align technology with business goals with our CTO-as-a-service offering.',
        'Make informed choices using our Data Analytics and DevOps services.',
        'Avoid costly mistakes with our Technology Consulting, ensuring long-term success.'
      ]
    },
    {
      title: 'Enterprise Evolution',
      description: 'Overcome challenges related to scalability, security, maintenance, and cost-effectiveness as your business scales.',
      features: [
        'Revitalize outdated systems with our Application Modernization expertise.',
        'Our Custom Software Development services deliver secure, scalable solutions.',
        'Ensure exceptional performance with our thorough QA & Testing services.',
        'Unlock enhanced scalability, security, and cost-efficiency with Cloud Development.'
      ]
    },
    {
      title: 'Agency Acceleration',
      description: 'We guide agencies through complex tech landscapes to deliver exceptional, tailored software solutions.',
      features: [
        'Access top-tier tech talent through Software Consulting & Development.',
        'Deliver the highest-quality software with our rigorous QA & Testing.',
        'Adapt to project demands with our Staff Augmentation solutions.',
        'Expand your portfolio without in-house development through White Label services.'
      ]
    }
  ];

  return (
    <section className="excellence section">
      <div className="container">
        <h2 className="section-title">Leading the Industry With Excellence</h2>
        <p className="section-subtitle">
          Settlo crafts transformative software solutions to empower businesses of all sizes.
        </p>

        <div className="excellence-grid">
          {businessTypes.map((type, index) => (
            <div 
              key={index} 
              className={`excellence-card ${activeCard === index ? 'active' : ''}`}
              onClick={() => setActiveCard(index)}
            >
              <h3 className="excellence-title">{type.title}</h3>
              <p className="excellence-description">{type.description}</p>
              
              {activeCard === index && (
                <div className="excellence-features">
                  <div className="features-divider"></div>
                  <ul>
                    {type.features.map((feature, fIndex) => (
                      <li key={fIndex}>
                        <FiChevronRight className="feature-arrow" />
                        <span dangerouslySetInnerHTML={{ __html: parseFeature(feature) }} />
                      </li>
                    ))}
                  </ul>
                  <a href="#contact" className="btn btn-primary">Explore More</a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Excellence;
