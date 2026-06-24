import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-text">
        <p>Created by [Your Full Name]</p>
        <p>Email: [Your Email]</p>
      </div>
      <div>
        <a 
          href="https://digitalheroesco.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hero-btn"
        >
          Built for Digital Heroes
        </a>
      </div>
    </footer>
  );
};

export default Footer;
