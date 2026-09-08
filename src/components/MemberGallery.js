import React, { useState } from 'react';
import '../styles/MemberGallery.css';

const MemberGalleryItem = ({ photo, index }) => {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="member-gallery-item">
      {!hasError ? (
        <img
          src={photo}
          alt={`Fair Highlight Member ${index + 1}`}
          className="member-gallery-photo"
          onError={() => setHasError(true)}
        />
      ) : (
        <div className="member-gallery-placeholder">
          <svg className="member-gallery-icon" fill="currentColor" viewBox="0 0 24 24">
            <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
          </svg>
          <span className="member-gallery-caption">Gallery Photo {index + 1}</span>
        </div>
      )}
    </div>
  );
};

const MemberGallery = ({ photos = [] }) => {
  return (
    <div className="member-gallery-container">
      <h3 className="member-gallery-title">
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--color-soft-gold)' }}>
          <path d="M22 16V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2zm-11-4l2.03 2.71L16 11l4 5H9l2-3zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z"/>
        </svg>
        Fair Event Member Photo Gallery (5 Highlights)
      </h3>
      <div className="member-gallery-grid">
        {photos.map((photo, idx) => (
          <MemberGalleryItem key={idx} photo={photo} index={idx} />
        ))}
      </div>
    </div>
  );
};

export default MemberGallery;
