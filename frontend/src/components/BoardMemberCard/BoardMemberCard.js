import React from 'react';
import './BoardMemberCard.css';

const BoardMemberCard = ({ member, highlight = false }) => {
  const designation = member.position || member.title || member.role || 'Board Member';

  return (
    <div className={`board-member-card ${highlight ? 'highlight' : ''}`}>
      <div className="board-member-avatar-box">
        <svg className="board-member-icon" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
      </div>
      <h3 className="board-member-name">{member.name}</h3>
      <span className="board-member-position">{designation}</span>
    </div>
  );
};

export default BoardMemberCard;
