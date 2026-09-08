import React from 'react';
import BoardMemberCard from '../BoardMemberCard/BoardMemberCard';
import './BoardSection.css';

const BoardSection = ({ title, members = [], highlight = false }) => {
  if (!members || members.length === 0) return null;

  return (
    <div className="board-section-root">
      <h2 className="board-section-heading">{title}</h2>
      <div className="board-section-grid">
        {members.map((member, idx) => (
          <BoardMemberCard key={idx} member={member} highlight={highlight} />
        ))}
      </div>
    </div>
  );
};

export default BoardSection;
