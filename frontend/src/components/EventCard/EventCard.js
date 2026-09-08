import React from 'react';
import './EventCard.css';

const EventCard = ({ event }) => {
  return (
    <div className="event-card">
      <div className="event-card-media">
        {event.image ? (
          <img src={event.image} alt={event.title} className="event-card-image" />
        ) : (
          <div className="event-card-fallback-banner">
            <svg className="event-card-fallback-icon" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10z" />
            </svg>
            <span className="event-card-fallback-text">{event.type || 'FATIA Event'}</span>
          </div>
        )}
      </div>

      <div className="event-card-content">
        <span className="event-card-date-badge">
          <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z" />
          </svg>
          {event.date}
        </span>

        <h3 className="event-card-title">{event.title}</h3>

        {event.location && (
          <div className="event-card-location">
            <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            {event.location}
          </div>
        )}

        <p className="event-card-description">{event.description}</p>
      </div>
    </div>
  );
};

export default EventCard;
