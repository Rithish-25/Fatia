import React from 'react';
import { NavLink } from 'react-router-dom';
import './MembersDropdown.css';

const MembersDropdown = ({ onItemClick }) => {
  return (
    <div className="members-dropdown-menu">
      <NavLink
        to="/members"
        end
        className={({ isActive }) =>
          `members-dropdown-item ${isActive ? 'active' : ''}`
        }
        onClick={onItemClick}
      >
        <span className="members-dropdown-num">1</span>
        <span>FATIA Members Associations</span>
      </NavLink>

      <NavLink
        to="/members/honorary"
        className={({ isActive }) =>
          `members-dropdown-item ${isActive ? 'active' : ''}`
        }
        onClick={onItemClick}
      >
        <span className="members-dropdown-num">2</span>
        <span>FATIA Honoury Members</span>
      </NavLink>
    </div>
  );
};

export default MembersDropdown;
