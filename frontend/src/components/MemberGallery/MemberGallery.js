import React, { useState, useEffect } from 'react';
import './MemberGallery.css';

const MemberGallery = ({ photos = [], title = 'Photo Highlights' }) => {
  const displayPhotos = photos && photos.length > 0
    ? photos
    : [1, 2, 3, 4, 5].map((i) => ({ caption: `Expo Moment ${i}` }));

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [imageErrors, setImageErrors] = useState({});

  const totalPhotos = displayPhotos.length;

  useEffect(() => {
    if (isHovered || totalPhotos <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPhotos);
    }, 4500);

    return () => clearInterval(timer);
  }, [isHovered, totalPhotos]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPhotos);
  };

  const handleImageError = (index) => {
    setImageErrors((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <div className="member-gallery-container">
      <div className="member-gallery-header">
        <h3 className="member-gallery-title">{title}</h3>
        <span className="member-gallery-counter">
          Photo {currentIndex + 1} of {totalPhotos}
        </span>
      </div>

      {/* Main Big Rectangle Carousel Stage */}
      <div 
        className="carousel-main-stage"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Big Full Image Display with Smooth Cross-Fade */}
        <div 
          className="carousel-image-wrapper"
          onClick={handleNext}
          style={{ cursor: 'pointer' }}
          title="Click to view next photo"
        >
          {displayPhotos.map((photo, idx) => {
            const isError = imageErrors[idx] || !photo?.url;
            const isActive = idx === currentIndex;
            return (
              <div 
                key={idx} 
                className={`carousel-slide ${isActive ? 'active' : ''}`}
              >
                {!isError ? (
                  <img
                    src={photo.url}
                    alt={photo.caption || `Photo ${idx + 1}`}
                    className="carousel-big-image"
                    onError={() => handleImageError(idx)}
                  />
                ) : (
                  <div className="carousel-placeholder-stage">
                    <svg className="carousel-placeholder-icon" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                    </svg>
                    <span className="carousel-placeholder-title">
                      {photo?.caption || `Expo Moment ${idx + 1}`}
                    </span>
                  </div>
                )}

                {/* Bottom Caption Overlay Banner */}
                <div className="carousel-caption-overlay">
                  <div className="carousel-caption-text">
                    <p className="carousel-caption-title">
                      {photo?.caption || `FATIA Fair Moment ${idx + 1}`}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MemberGallery;
