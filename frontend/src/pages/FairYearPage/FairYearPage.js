import React from 'react';
import { useParams, Link } from 'react-router-dom';
import PageContainer from '../../components/PageContainer/PageContainer';
import BoardMemberCard from '../../components/BoardMemberCard/BoardMemberCard';
import MemberGallery from '../../components/MemberGallery/MemberGallery';
import { getFairDataByYear } from '../../data/fair';
import './FairYearPage.css';

const FairYearPage = () => {
  const { year } = useParams();
  const fairData = getFairDataByYear(year);

  if (!fairData) {
    return (
      <PageContainer>
        <div style={{ textAlign: 'center', padding: '60px 20px' }}>
          <h2>Fair Edition Not Found</h2>
          <p style={{ color: 'var(--color-slate-gray)', marginTop: '8px' }}>
            No records found for the FATIA Fair year "{year}".
          </p>
          <Link to="/fair" className="btn-primary-gold" style={{ marginTop: '20px', display: 'inline-block' }}>
            ← Back to All Fair Editions
          </Link>
        </div>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      {/* Fair Edition Header Banner */}
      <div className="fair-year-header-card">
        <span className="fair-year-badge-pill">Trade & Industry Expo</span>
        <h1 className="fair-year-title">{fairData.title}</h1>
        <p className="fair-year-tagline">{fairData.summary}</p>
      </div>

      {/* About Box */}
      <div className="fair-about-box-full">
        <h2 className="fair-section-heading">About FATIA Fair {fairData.year}</h2>
        <p className="fair-about-text">{fairData.aboutText}</p>
      </div>

      {/* Board Members Section */}
      {fairData.boardMembers && fairData.boardMembers.length > 0 && (
        <div className="fair-committee-section">
          <h2 className="fair-section-heading" style={{ marginBottom: '20px' }}>
            Board Members ({fairData.year})
          </h2>
          <div className="fair-committee-grid">
            {fairData.boardMembers.map((member, idx) => (
              <BoardMemberCard key={idx} member={member} />
            ))}
          </div>
        </div>
      )}

      {/* Committee Members Section */}
      {fairData.additionalCommittee && fairData.additionalCommittee.length > 0 && (
        <div className="fair-committee-section" style={{ marginTop: '48px' }}>
          <h2 className="fair-section-heading" style={{ marginBottom: '20px' }}>
            Committee Members ({fairData.year})
          </h2>
          <div className="fair-committee-grid">
            {fairData.additionalCommittee.map((member, idx) => (
              <BoardMemberCard key={idx} member={member} />
            ))}
          </div>
        </div>
      )}

      {/* Photo Highlights Gallery */}
      <MemberGallery
        photos={fairData.gallery}
        title={`FATIA Fair ${fairData.year} Photo Highlights`}
      />
    </PageContainer>
  );
};

export default FairYearPage;
