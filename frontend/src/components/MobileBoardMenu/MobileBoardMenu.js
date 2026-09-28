import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './MobileBoardMenu.css';

const MobileBoardMenu = ({ onItemClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mobile-board-accordion">
      <button
        type="button"
        className={`mobile-board-header ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>Board</span>
        <svg
          className={`mobile-board-icon ${isOpen ? 'open' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="mobile-board-sub-menu">
          <NavLink
            to="/board"
            end
            className={({ isActive }) =>
              `mobile-board-sub-link ${isActive ? 'active' : ''}`
            }
            onClick={() => {
              onItemClick();
              setIsOpen(false);
            }}
          >
            1. Current Board & Committee Chairmen
          </NavLink>

          <NavLink
            to="/board/past-terms"
            className={({ isActive }) =>
              `mobile-board-sub-link ${isActive ? 'active' : ''}`
            }
            onClick={() => {
              onItemClick();
              setIsOpen(false);
            }}
          >
            2. Past Term Board (Term-wise)
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default MobileBoardMenu;
