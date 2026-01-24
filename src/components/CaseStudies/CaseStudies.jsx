import './CaseStudies.css';

const CaseStudies = () => {
  const testimonials = [
    {
      industry: 'Sweet Industry',
      testimonial: 'We had a great experience working with the Settlo team for the CRM we were struggling to build. Together, we figured out what we needed and organized everything meaningfully. The system was created with face recognition and geo-fetching features. We got great effort and services with excellent error handling.',
      role: 'CEO',
      company: 'SRM',
      tags: ['CRM', 'Face Recognition', 'Geo-Fetching']
    },
    {
      industry: 'Roofing Industry',
      testimonial: 'We have entered the new AI era with the help of the Settlo team. They created a beautiful website with AI integration - a chatbot that answers questions about our products and services. The website has great interactions, and they even built a live roof visualizer that shows different patterns and colors, helping us verify designs with clients.',
      role: 'CEO',
      company: 'Roofing Solutions',
      tags: ['AI Integration', 'Chatbot', 'Website Development']
    },
    {
      industry: 'Scaling Industry',
      testimonial: 'We created a good product showcase website with accurate data. All products and categories are included properly organized. I didn\'t know how to categorize all the stuff and scaling requirements, but they helped me understand my own business in a technical manner. Truly professional work!',
      role: 'CEO',
      company: 'Scale Solutions',
      tags: ['E-Commerce', 'Product Catalog', 'Web Development']
    },
    {
      industry: 'Clothing Industry',
      testimonial: 'I thought creating and structuring a product menu for clients in the textile industry - with all the sizes, thickness varieties, and seasons - would be impossible. But they gave me an admin panel where I can add categories and control my website entirely. I can update the website myself now. Thankful to the team!',
      role: 'CEO',
      company: 'Textile Hub',
      tags: ['Admin Panel', 'E-Commerce', 'Inventory Management']
    }
  ];

  return (
    <section className="case-studies section section-light">
      <div className="container">
        <h2 className="section-title">Read Our Client Success Stories</h2>
        <p className="section-subtitle">
          Grow your business with a team that wants to see you win
        </p>

        <div className="testimonials-grid">
          {testimonials.map((item, index) => (
            <div key={index} className="testimonial-card">
              <span className="industry-badge">{item.industry}</span>
              
              <div className="quote-icon">❝</div>
              
              <p className="testimonial-text">{item.testimonial}</p>
              
              <div className="testimonial-author">
                <span className="author-role">{item.role}</span>
                <span className="author-separator">•</span>
                <span className="author-company">{item.company}</span>
              </div>
              
              <div className="testimonial-tags">
                {item.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
