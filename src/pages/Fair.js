import React from 'react';
import { Link } from 'react-router-dom';
import PageContainer from '../components/PageContainer';
import SectionTitle from '../components/SectionTitle';
import { fairYears } from '../data/fair';
import '../styles/Fair.css';

const Fair = () => {
  return (
    <PageContainer>
      <SectionTitle
        tag="State Expo Archive"
        title="FATIA Technology Fairs (2014 - 2026)"
        subtitle="Exploring 13 landmark editions of Tamil Nadu's premier consumer hardware, IT infrastructure, and enterprise technology fair."
      />

      <div className="fair-overview-banner">
        <div>
          <h2 className="fair-banner-title">13 Years of Technology Excellence</h2>
          <p className="fair-banner-desc">
            Since 2014, FATIA Technology Fairs have united world-class hardware vendors, regional distributors, and district association leaders. Select any edition below to view official committee office bearers, event summaries, and member photo highlights.
          </p>
        </div>
        <div className="fair-banner-stats-badge">
          <div className="fair-banner-stats-number">13</div>
          <div className="fair-banner-stats-label">Annual Editions</div>
        </div>
      </div>

      <div className="fair-years-grid">
        {fairYears.map((year) => (
          <Link key={year} to={`/fair/${year}`} className="fair-year-card">
            <div className="fair-year-number">{year}</div>
            <div className="fair-year-label">FATIA Fair {year}</div>
            <div className="fair-year-subtitle">State Technology Expo</div>
            <span className="fair-year-action">View Edition Details →</span>
          </Link>
        ))}
      </div>
    </PageContainer>
  );
};

export default Fair;
