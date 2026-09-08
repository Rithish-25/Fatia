import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { fairYears } from '../data/fair';
import '../styles/MobileFairMenu.css';

const MobileFairMenu = ({ onItemClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mobile-fair-accordion">
      <button
        type="button"
        className={`mobile-fair-header ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>Fair (2014 - 2026)</span>
        <svg
          className={`mobile-fair-icon ${isOpen ? 'open' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="mobile-fair-years-grid">
          <NavLink
            to="/fair"
            className={({ isActive }) =>
              `mobile-fair-year-link ${isActive ? 'active' : ''}`
            }
            onClick={() => {
              onItemClick();
              setIsOpen(false);
            }}
            style={{ gridColumn: 'span 3', fontWeight: 'bold' }}
          >
            All Fair Years Overview
          </NavLink>
          {fairYears.map((year) => (
            <NavLink
              key={year}
              to={`/fair/${year}`}
              className={({ isActive }) =>
                `mobile-fair-year-link ${isActive ? 'active' : ''}`
              }
              onClick={() => {
                onItemClick();
                setIsOpen(false);
              }}
            >
              {year}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileFairMenu;
