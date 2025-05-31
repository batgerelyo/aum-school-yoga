import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="social-icons">
        <a href="https://www.facebook.com/aumschoolofyoga/photos" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f"></i>
        </a>
        <span className="icon-spacing"></span>
        <a href="https://www.instagram.com/aum.school.of.yoga/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
      <p>&copy; 2023 Created by Dada</p>
    </footer>
  );
}

export default Footer;
