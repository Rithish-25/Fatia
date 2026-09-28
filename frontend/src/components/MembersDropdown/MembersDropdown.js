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
        <span>FATIA Members Associations</span>
      </NavLink>

      <NavLink
        to="/members/honorary"
        className={({ isActive }) =>
          `members-dropdown-item ${isActive ? 'active' : ''}`
        }
        onClick={onItemClick}
      >
        <span>FATIA Honoury Members</span>
      </NavLink>
    </div>
  );
};

export default MembersDropdown;
