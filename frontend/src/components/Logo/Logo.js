import React from 'react';
import { Link } from 'react-router-dom';
import './Logo.css';

const Logo = ({ height = 54 }) => {
  return (
    <Link to="/" className="logo-root">
      <img
        src="/assets/logo.png"
        alt="FATIA Association Primary Branding Logo"
        className="logo-img"
        style={{ height: `${height}px` }}
      />
      <div className="logo-text-group">
        <span className="logo-title">FATIA</span>
        <span className="logo-subtitle">
          FEDERATION OF ALL TRADE & INDUSTRY ASSOCIATIONS OF ERODE DISTRICT
        </span>
      </div>
    </Link>
  );
};

export default Logo;
