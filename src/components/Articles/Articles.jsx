import './Articles.css';

const Articles = () => {
  const articles = [
    {
      image: '📰',
      title: 'Dotsquares Becomes Official Progress Sitefinity Partner',
      date: 'December 2024',
      category: 'Partnership'
    },
    {
      image: '🤖',
      title: 'How HubSpot\'s AI-Powered Smart CRM Is Redefining Customer Relationships',
      date: 'December 2024',
      category: 'Technology'
    },
    {
      image: '🔐',
      title: 'How to Fix the Next.js RCE Vulnerability (CVE-2025-66478)',
      date: 'November 2024',
      category: 'Security'
    }
  ];

  return (
    <section className="articles section">
      <div className="container">
        <h2 className="section-title">Latest Articles</h2>
        <p className="section-subtitle">
          Stay updated with our latest news, insights, and technology trends.
        </p>

        <div className="articles-grid">
          {articles.map((article, index) => (
            <article key={index} className="article-card">
              <div className="article-image">
                <span className="article-placeholder">{article.image}</span>
              </div>
              <div className="article-content">
                <div className="article-meta">
                  <span className="article-category">{article.category}</span>
                  <span className="article-date">{article.date}</span>
                </div>
                <h3 className="article-title">{article.title}</h3>
                <a href="#" className="article-link">Read More →</a>
              </div>
            </article>
          ))}
        </div>

        <div className="articles-cta">
          <a href="#" className="btn btn-secondary btn-lg">
            View All Articles
          </a>
        </div>
      </div>
    </section>
  );
};

export default Articles;
