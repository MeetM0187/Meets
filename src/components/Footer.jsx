import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="section-container footer-container">
        <div className="footer-content">
          <h2 className="footer-title">Let's Connect</h2>
          <p className="footer-desc">I'm always open to discussing tech, new projects, or opportunities.</p>
          <div className="footer-contact-info">
            <a href="mailto:sejal.makwana1977@gmail.com" className="contact-link">sejal.makwana1977@gmail.com</a>
            <span className="contact-link">6353122822</span>
          </div>
          <div className="footer-socials">
            <a href="https://www.linkedin.com/in/meet-makwana-5b4041259/" target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn">LinkedIn</a>
            <a href="https://github.com/MeetM0187" target="_blank" rel="noopener noreferrer" className="social-link" title="GitHub">GitHub</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Meet Makwana. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
