import React from 'react';
import { NavLink } from 'react-router-dom';

const NavItem = ({ label, route, onClick, hasDropdown, isDropdownActive }) => {
  if (hasDropdown) {
    return (
      <div className="nav-item-dropdown-container">
        <NavLink
          to={route}
          className={`nav-dropdown-trigger ${isDropdownActive ? 'active' : ''}`}
          onClick={onClick}
        >
          <span>{label}</span>
          <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
            <path d="M7 10l5 5 5-5z" />
          </svg>
        </NavLink>
      </div>
    );
  }

  return (
    <NavLink
      to={route}
      end={route === '/'}
      className={({ isActive }) => `nav-link-item ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      {label}
    </NavLink>
  );
};

export default NavItem;
