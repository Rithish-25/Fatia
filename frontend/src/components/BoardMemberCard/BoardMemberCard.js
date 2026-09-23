import React, { useState } from 'react';
import './BoardMemberCard.css';

const BoardMemberCard = ({ member, highlight = false, hideImage = false }) => {
  const [imageError, setImageError] = useState(false);

  const designationTamil = member.positionTamil || member.position || member.role || member.title || 'இயக்குநர்';
  const nameTamil = member.nameTamil || member.name;

  const showImageFrame = !hideImage && !member.hideImage;

  return (
    <div className={`board-member-card ${highlight ? 'highlight' : ''} ${!showImageFrame ? 'no-image-card' : ''}`}>
      {showImageFrame && (
        <div className="board-member-photo-frame">
          {member.image && !imageError ? (
            <img
              src={member.image}
              alt={nameTamil}
              className="board-member-photo-img"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="board-member-mock-avatar">
              <svg width="52" height="52" fill="var(--color-soft-gold)" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
          )}
        </div>
      )}

      <h3 className="board-member-name-tamil">{nameTamil}</h3>
      <span className="board-member-position-tamil">{designationTamil}</span>

      {member.phone && (
        <a href={`tel:${member.phone.replace(/\s+/g, '')}`} className="board-member-phone">
          <svg className="board-phone-icon" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>
          <span>{member.phone}</span>
        </a>
      )}
    </div>
  );
};

export default BoardMemberCard;
