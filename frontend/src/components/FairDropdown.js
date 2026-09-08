import React from 'react';
import { NavLink } from 'react-router-dom';
import { fairYears } from '../data/fair';
import '../styles/FairDropdown.css';

const FairDropdown = ({ onItemClick }) => {
  return (
    <div className="fair-dropdown-menu">
      {fairYears.map((year) => (
        <NavLink
          key={year}
          to={`/fair/${year}`}
          className={({ isActive }) =>
            `fair-dropdown-item ${isActive ? 'active' : ''}`
          }
          onClick={onItemClick}
        >
          {year} Fair
        </NavLink>
      ))}
    </div>
  );
};

export default FairDropdown;
