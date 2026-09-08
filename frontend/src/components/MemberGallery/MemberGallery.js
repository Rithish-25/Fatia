import React, { useState } from 'react';
import './MemberGallery.css';

const MemberGalleryItem = ({ photo, index }) => {
  const [imageError, setImageError] = useState(false);

  if (imageError || !photo?.url) {
    return (
      <div className="member-gallery-item">
        <div className="member-gallery-placeholder">
          <svg className="member-gallery-icon" fill="currentColor" viewBox="0 0 24 24">
            <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
          </svg>
          <span className="member-gallery-caption">
            {photo?.caption || `Expo Moment ${index + 1}`}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="member-gallery-item">
      <img
        src={photo.url}
        alt={photo.caption || 'Event Highlight'}
        className="member-gallery-photo"
        onError={() => setImageError(true)}
      />
    </div>
  );
};

const MemberGallery = ({ photos = [], title = 'Photo Highlights' }) => {
  const displayPhotos = photos && photos.length > 0
    ? photos
    : [1, 2, 3, 4, 5].map((i) => ({ caption: `Expo Moment ${i}` }));

  return (
    <div className="member-gallery-container">
      <h3 className="member-gallery-title">{title}</h3>
      <div className="member-gallery-grid">
        {displayPhotos.map((photo, idx) => (
          <MemberGalleryItem key={idx} photo={photo} index={idx} />
        ))}
      </div>
    </div>
  );
};

export default MemberGallery;
