import React from 'react';
import PageContainer from '../components/PageContainer';
import SectionTitle from '../components/SectionTitle';
import EventCard from '../components/EventCard';
import { eventsData } from '../data/events';
import '../styles/Events.css';

const Events = () => {
  // Ensure events are sorted with the newest event first (showing only 3 events as requested)
  const sortedEvents = [...eventsData]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  return (
    <PageContainer>
      <SectionTitle
        tag="Conventions & Summits"
        title="FATIA Industry Events"
        subtitle="Annual general meetings, district trade conferences, and state leadership summits fostering collaborative growth across Tamil Nadu."
      />

      <div className="events-grid">
        {sortedEvents.map((evt) => (
          <EventCard key={evt.id} event={evt} />
        ))}
      </div>
    </PageContainer>
  );
};

export default Events;
