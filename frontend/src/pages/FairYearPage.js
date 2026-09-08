import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import PageContainer from '../components/PageContainer';
import MemberGallery from '../components/MemberGallery';
import { getFairDataByYear, fairYears } from '../data/fair';
import '../styles/FairYearPage.css';

// Helper to parse "Member Name (Designation)" into name & role
const parseMember = (memberStr) => {
  const match = memberStr.match(/^(.*?)\s*\((.*?)\)$/);
  if (match) {
    return { name: match[1].trim(), role: match[2].trim() };
  }
  return { name: memberStr.trim(), role: 'Committee Member' };
};

const CommitteeMemberCard = ({ memberStr, idx, year }) => {
  const { name, role } = parseMember(memberStr);
  const [imgError, setImgError] = useState(false);
  const photoPath = `/assets/fair/${year}/committee-0${idx + 1}.jpg`;

  return (
    <div className="fair-committee-card">
      <div className="fair-committee-photo-box">
        {!imgError ? (
          <img
            src={photoPath}
            alt={name}
            className="fair-committee-photo-img"
            onError={() => setImgError(true)}
          />
        ) : (
          <svg className="fair-committee-icon-fallback" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
        )}
      </div>
      <h4 className="fair-committee-card-name">{name}</h4>
      <span className="fair-committee-card-role">{role}</span>
    </div>
  );
};

const FairYearPage = () => {
  const { year } = useParams();
  const fairData = getFairDataByYear(year);

  if (!fairData) {
    return (
      <PageContainer>
        <div style={{ textAlign: 'center', padding: '60px 20px' }}>
          <h2>Fair Edition Not Found</h2>
          <p style={{ color: 'var(--color-slate-gray)', margin: '16px 0 24px 0' }}>
            We could not locate data for the FATIA Fair year "{year}". Valid years are 2014 through 2026.
          </p>
          <Link to="/fair" className="btn-primary-gold">
            Return to Fair Overview
          </Link>
        </div>
      </PageContainer>
    );
  }

  const currentNumericYear = parseInt(fairData.year, 10);
  const prevYear = fairYears.includes(currentNumericYear - 1) ? currentNumericYear - 1 : null;
  const nextYear = fairYears.includes(currentNumericYear + 1) ? currentNumericYear + 1 : null;

  return (
    <PageContainer>
      {/* Header Banner */}
      <div className="fair-year-header-card">
        <span className="fair-year-badge-pill">Annual Expo Edition • {fairData.year}</span>
        <h1 className="fair-year-title">{fairData.title}</h1>
        <p className="fair-year-tagline">{fairData.tagline}</p>
      </div>

      {/* Full Width About Container */}
      <div className="fair-about-box-full">
        <h3 className="fair-section-heading">
          <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--color-soft-gold)' }}>
            <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
          </svg>
          About FATIA Fair {fairData.year}
        </h3>
        <p className="fair-about-text">{fairData.about}</p>
      </div>

      {/* Committee Members Section (3 images + names) */}
      <div className="fair-committee-section">
        <h3 className="fair-section-heading" style={{ marginBottom: '20px' }}>
          <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--color-soft-gold)' }}>
            <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
          </svg>
          Fair Committee Officers
        </h3>
        <div className="fair-committee-grid">
          {fairData.members.slice(0, 3).map((memberStr, idx) => (
            <CommitteeMemberCard
              key={idx}
              memberStr={memberStr}
              idx={idx}
              year={fairData.year}
            />
          ))}
        </div>
      </div>

      {/* 5 Member Photos Gallery */}
      <MemberGallery photos={fairData.photos} />

      {/* Pagination / Nav between year editions */}
      <div className="fair-navigation-actions">
        {prevYear ? (
          <Link to={`/fair/${prevYear}`} className="fair-nav-btn">
            ← {prevYear} Fair Edition
          </Link>
        ) : (
          <span />
        )}

        <Link to="/fair" className="fair-nav-btn">
          All Fair Years Overview
        </Link>

        {nextYear ? (
          <Link to={`/fair/${nextYear}`} className="fair-nav-btn">
            {nextYear} Fair Edition →
          </Link>
        ) : (
          <span />
        )}
      </div>
    </PageContainer>
  );
};

export default FairYearPage;
