import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Logo.css';

const Logo = ({ showText = true, height = 60 }) => {
  return (
    <Link to="/" className="fatia-logo-wrapper">
      <img
        src="/assets/logo.png"
        alt="FATIA Association Logo"
        className="fatia-logo-img"
        style={{ height: `${height}px` }}
      />
      {showText && (
        <div className="fatia-logo-text">
          <span className="fatia-logo-title">FATIA</span>
          <span className="fatia-logo-subtitle">Federation of IT Associations</span>
        </div>
      )}
    </Link>
  );
};

export default Logo;
