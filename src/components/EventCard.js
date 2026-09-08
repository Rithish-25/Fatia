import React, { useState } from 'react';
import '../styles/EventCard.css';

const EventCard = ({ event }) => {
  const { name, formattedDate, photo } = event;
  const [imgError, setImgError] = useState(false);

  return (
    <div className="event-card">
      <div className="event-card-media">
        {!imgError ? (
          <img
            src={photo}
            alt={name}
            className="event-card-image"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="event-card-fallback-banner">
            <svg
              className="event-card-fallback-icon"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z"/>
            </svg>
            <span className="event-card-fallback-text">FATIA Event</span>
          </div>
        )}
      </div>
      <div className="event-card-content">
        <span className="event-card-date-badge">
          <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z"/>
          </svg>
          {formattedDate}
        </span>
        <h3 className="event-card-title">{name}</h3>
      </div>
    </div>
  );
};

export default EventCard;
