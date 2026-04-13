import React from 'react';
import './ClientWork.css';
import { FiExternalLink } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';

const clients = [
  {
    title: "VR Publicity",
    description: "A premier 360-degree advertising and marketing agency platform. Developed a highly engaging frontend with modern typography and animations.",
    url: "https://vrpublicity24.com/",
    review: {
      text: "Meet delivered a stunning, high-performance website that perfectly captures our brand identity. The attention to detail and modern aesthetic exceeded our expectations.",
      author: "VR Publicity Team",
      rating: 5
    }
  },
  {
    title: "Kreative Ad Vision",
    description: "An immersive digital portal for Gujarat's leading outdoor advertising agency. Scalable, sleek, and optimized for lead generation.",
    url: "https://kreativeadvision.com/",
    review: {
      text: "Outstanding work! The website feels incredibly premium and works flawlessly across devices. Meet was professional, fast, and highly skilled.",
      author: "Kreative Ad Vision",
      rating: 5
    }
  }
];

const ClientWork = () => {
  return (
    <section className="client-work" id="client-work">
      <div className="section-container">
        <h2 className="section-title">Client Work</h2>
        <div className="client-grid">
          {clients.map((client, index) => (
            <div className="client-card" key={index}>
              <div className="client-card-main">
                <div className="client-header">
                  <h3>{client.title}</h3>
                  <a href={client.url} target="_blank" rel="noopener noreferrer" className="client-link" title="Visit Live Site">
                    <FiExternalLink /> Live Demo
                  </a>
                </div>
                <p className="client-desc">{client.description}</p>
              </div>
              
              {/* Review Feature Module */}
              <div className="client-review">
                <div className="review-stars">
                  {[...Array(client.review.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <p className="review-text">"{client.review.text}"</p>
                <span className="review-author">— {client.review.author}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientWork;
