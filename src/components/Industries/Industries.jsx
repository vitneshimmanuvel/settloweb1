import { useRef } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import './Industries.css';

const Industries = () => {
  const scrollRef = useRef(null);

  const industries = [
    {
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=300&h=200&fit=crop',
      title: 'Healthcare',
      description: 'Digital health solutions for modern healthcare providers.'
    },
    {
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=300&h=200&fit=crop',
      title: 'Education',
      description: 'E-learning platforms and educational technology solutions.'
    },
    {
      image: 'https://images.unsplash.com/photo-1560472355-536de3962603?w=300&h=200&fit=crop',
      title: 'Finance',
      description: 'Fintech solutions for banking and financial services.'
    },
    {
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=200&fit=crop',
      title: 'Retail',
      description: 'Omnichannel retail and e-commerce solutions.'
    },
    {
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
      title: 'Manufacturing',
      description: 'Industry 4.0 and smart manufacturing solutions.'
    },
    {
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300&h=200&fit=crop',
      title: 'Real Estate',
      description: 'PropTech solutions for modern real estate.'
    },
    {
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=300&h=200&fit=crop',
      title: 'Technology',
      description: 'Custom software for tech startups and enterprises.'
    },
    {
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=300&h=200&fit=crop',
      title: 'Hospitality',
      description: 'Digital solutions for hotels and travel industry.'
    }
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 350;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="industries section section-light">
      <div className="container">
        <h2 className="section-title">Industries We Serve</h2>
        <p className="section-subtitle">
          Delivering tailored solutions across diverse industries with deep domain expertise.
        </p>

        <div className="industries-wrapper">
          <button className="scroll-btn scroll-left" onClick={() => scroll('left')}>
            <FiChevronLeft size={24} />
          </button>

          <div className="industries-scroll" ref={scrollRef}>
            {industries.map((industry, index) => (
              <div key={index} className="industry-card">
                <div className="industry-image">
                  <img src={industry.image} alt={industry.title} />
                </div>
                <div className="industry-content">
                  <h3 className="industry-title">{industry.title}</h3>
                  <p className="industry-description">{industry.description}</p>
                  <a href="#" className="industry-link">Learn More →</a>
                </div>
              </div>
            ))}
          </div>

          <button className="scroll-btn scroll-right" onClick={() => scroll('right')}>
            <FiChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Industries;
