import React from 'react';
import BoardMemberCard from './BoardMemberCard';
import '../styles/BoardSection.css';

const BoardSection = ({ title, members, isFeatured = false }) => {
  if (!members || members.length === 0) return null;

  return (
    <section className="board-section">
      {title && <h3 className="board-section-title">{title}</h3>}
      <div className={`board-grid ${isFeatured ? 'featured' : ''}`}>
        {members.map((member, idx) => (
          <BoardMemberCard key={idx} member={member} />
        ))}
      </div>
    </section>
  );
};

export default BoardSection;
