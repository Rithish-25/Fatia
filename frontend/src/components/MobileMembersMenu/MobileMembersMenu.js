import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './MobileMembersMenu.css';

const MobileMembersMenu = ({ onItemClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mobile-members-accordion">
      <button
        type="button"
        className={`mobile-members-header ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>Members</span>
        <svg
          className={`mobile-members-icon ${isOpen ? 'open' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="mobile-members-sub-menu">
          <NavLink
            to="/members"
            end
            className={({ isActive }) =>
              `mobile-members-sub-link ${isActive ? 'active' : ''}`
            }
            onClick={() => {
              onItemClick();
              setIsOpen(false);
            }}
          >
            FATIA Members Associations
          </NavLink>

          <NavLink
            to="/members/honorary"
            className={({ isActive }) =>
              `mobile-members-sub-link ${isActive ? 'active' : ''}`
            }
            onClick={() => {
              onItemClick();
              setIsOpen(false);
            }}
          >
            FATIA Honoury Members
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default MobileMembersMenu;
