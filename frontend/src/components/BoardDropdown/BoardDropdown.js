import React from 'react';
import { NavLink } from 'react-router-dom';
import './BoardDropdown.css';

const BoardDropdown = ({ onItemClick }) => {
  return (
    <div className="board-dropdown-menu">
      <NavLink
        to="/board"
        end
        className={({ isActive }) =>
          `board-dropdown-item ${isActive ? 'active' : ''}`
        }
        onClick={onItemClick}
      >
        <span className="board-dropdown-num">1</span>
        <span>Current Board & Committee Chairmen</span>
      </NavLink>

      <NavLink
        to="/board/past-terms"
        className={({ isActive }) =>
          `board-dropdown-item ${isActive ? 'active' : ''}`
        }
        onClick={onItemClick}
      >
        <span className="board-dropdown-num">2</span>
        <span>Past Term Board (Term-wise)</span>
      </NavLink>
    </div>
  );
};

export default BoardDropdown;
