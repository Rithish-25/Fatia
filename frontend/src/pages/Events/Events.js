import React from 'react';
import PageContainer from '../../components/PageContainer/PageContainer';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import EventCard from '../../components/EventCard/EventCard';
import { eventsData } from '../../data/events';
import './Events.css';

const Events = () => {
  return (
    <PageContainer>
      <SectionTitle
        tag="State Gatherings"
        title="FATIA Events & Conventions"
        subtitle="Annual general meetings, leadership summits, and technology forums hosted by FATIA across Tamil Nadu."
      />

      <div className="events-grid">
        {eventsData.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </PageContainer>
  );
};

export default Events;
