import React, { useState } from 'react';
import PageContainer from '../../components/PageContainer/PageContainer';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import BoardMemberCard from '../../components/BoardMemberCard/BoardMemberCard';
import { boardData } from '../../data/board';
import './PastTermsBoard.css';

const PastTermsBoard = () => {
  const [selectedTerm, setSelectedTerm] = useState('all');

  const pastTerms = boardData.pastTerms || [];

  const displayedTerms = selectedTerm === 'all'
    ? pastTerms
    : pastTerms.filter((_, idx) => idx.toString() === selectedTerm);

  return (
    <PageContainer>
      <SectionTitle
        tag="Legacy & Leadership History"
        title="FATIA Past Term Board Members"
        subtitle="Honouring former Executive Presidents, General Secretaries, and Treasurers across past historic terms of FATIA."
      />

      {/* Term Filter Pills */}
      <div className="past-terms-filter-bar">
        <button
          type="button"
          className={`past-term-filter-btn ${selectedTerm === 'all' ? 'active' : ''}`}
          onClick={() => setSelectedTerm('all')}
        >
          All Terms ({pastTerms.length})
        </button>
        {pastTerms.map((term, idx) => (
          <button
            key={idx}
            type="button"
            className={`past-term-filter-btn ${selectedTerm === idx.toString() ? 'active' : ''}`}
            onClick={() => setSelectedTerm(idx.toString())}
          >
            {term.termTitle}
          </button>
        ))}
      </div>

      {/* Term-wise Sections */}
      <div className="past-terms-list">
        {displayedTerms.map((termGroup, idx) => (
          <section key={idx} className="past-term-card-section">
            <div className="past-term-banner">
              <span className="past-term-number-badge">Term {idx + 1}</span>
              <h2 className="past-term-banner-title">{termGroup.termTitle}</h2>
              <p className="past-term-banner-desc">
                Executive Leadership Table for {termGroup.termTitle} of FATIA Erode District.
              </p>
            </div>

            <div className="past-term-grid">
              {termGroup.members.map((member, mIdx) => (
                <BoardMemberCard
                  key={mIdx}
                  highlight={member.position.toLowerCase().includes('president')}
                  member={member}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </PageContainer>
  );
};

export default PastTermsBoard;
