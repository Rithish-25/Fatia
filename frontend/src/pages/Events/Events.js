import React, { useState } from 'react';
import PageContainer from '../../components/PageContainer/PageContainer';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { upcomingEvents } from '../../data/events';
import './Events.css';

const Events = () => {
  const [activeTab, setActiveTab] = useState('upcoming');

  return (
    <PageContainer>
      <SectionTitle
        tag="State Gatherings"
        title="FATIA Events & Conventions"
        subtitle="Annual general meetings, trade expos, leadership summits, and technology forums hosted by FATIA across Tamil Nadu."
      />

      {/* Events Filter Tabs */}
      <div className="events-tabs-container">
        <button
          type="button"
          className={`events-tab-btn ${activeTab === 'upcoming' ? 'active' : ''}`}
          onClick={() => setActiveTab('upcoming')}
        >
          Upcoming Events
        </button>
        <button
          type="button"
          className={`events-tab-btn ${activeTab === 'past' ? 'active' : ''}`}
          onClick={() => setActiveTab('past')}
        >
          Past Events & Highlights
        </button>
      </div>

      {/* Upcoming Events Tab Content: 3 Card Grid UI */}
      {activeTab === 'upcoming' && (
        <div className="events-section-content">
          <div className="upcoming-events-grid">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="upcoming-card">
                {/* Photo Header */}
                <div className="upcoming-card-media">
                  {event.photo ? (
                    <img
                      src={event.photo}
                      alt={event.name}
                      className="upcoming-card-img"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        if (e.target.nextSibling) {
                          e.target.nextSibling.style.display = 'flex';
                        }
                      }}
                    />
                  ) : null}
                  <div className="upcoming-card-fallback" style={{ display: event.photo ? 'none' : 'flex' }}>
                    <svg className="upcoming-card-fallback-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="upcoming-card-fallback-text">FATIA EVENT</span>
                  </div>
                </div>

                {/* Date & Event Name */}
                <div className="upcoming-card-body">
                  <div className="upcoming-card-date-badge">
                    <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{event.date || event.formattedDate}</span>
                  </div>

                  <h3 className="upcoming-card-name">
                    {event.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Past Events Tab Content: COMING SOON */}
      {activeTab === 'past' && (
        <div className="events-section-content">
          <div className="events-coming-soon-container">
            <div className="events-coming-soon-glow"></div>
            <span className="events-coming-soon-badge">PAST EVENTS & HIGHLIGHTS</span>
            <h1 className="events-coming-soon-title">COMING SOON</h1>
            <div className="events-coming-soon-line"></div>
          </div>
        </div>
      )}
    </PageContainer>
  );
};

export default Events;
