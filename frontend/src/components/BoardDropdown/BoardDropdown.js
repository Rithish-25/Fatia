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
        <span>Current Board & Committee Chairman</span>
      </NavLink>

      <NavLink
        to="/board/past-terms"
        className={({ isActive }) =>
          `board-dropdown-item ${isActive ? 'active' : ''}`
        }
        onClick={onItemClick}
      >
        <span>Past Term Board (Term-wise)</span>
      </NavLink>
    </div>
  );
};

export default BoardDropdown;
