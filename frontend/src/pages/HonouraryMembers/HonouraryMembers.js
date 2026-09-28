import React, { useState } from 'react';
import PageContainer from '../../components/PageContainer/PageContainer';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import BoardMemberCard from '../../components/BoardMemberCard/BoardMemberCard';
import { honouraryMembers, silverJubileeHallMembers } from '../../data/honouraryMembers';
import './HonouraryMembers.css';

const HonouraryMembers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('all'); // 'all', 'honourary', 'silverJubilee'

  const filteredHonourary = honouraryMembers.filter(
    (m) =>
      m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredSilverJubilee = silverJubileeHallMembers.filter(
    (m) =>
      m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <PageContainer>
      <SectionTitle
        tag="Patrons & Benefactors"
        title="FATIA Honoury Members"
        subtitle="Honouring our distinguished industry patrons, benefactors, and historic Silver Jubilee Hall contributors."
      />

      {/* Top Search & Filter Bar */}
      <div className="honourary-page-controls">
        <div className="honourary-search-wrapper">
          <svg className="honourary-search-icon" fill="currentColor" viewBox="0 0 24 24">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
          </svg>
          <input
            type="text"
            className="honourary-search-input"
            placeholder="Search member by name or company..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="honourary-tabs">
          <button
            type="button"
            className={`honourary-tab-btn ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            All Members ({honouraryMembers.length + silverJubileeHallMembers.length})
          </button>
          <button
            type="button"
            className={`honourary-tab-btn ${activeTab === 'honourary' ? 'active' : ''}`}
            onClick={() => setActiveTab('honourary')}
          >
            1. Honoury Members ({honouraryMembers.length})
          </button>
          <button
            type="button"
            className={`honourary-tab-btn ${activeTab === 'silverJubilee' ? 'active' : ''}`}
            onClick={() => setActiveTab('silverJubilee')}
          >
            2. Silver Jubilee Members ({silverJubileeHallMembers.length})
          </button>
        </div>
      </div>

      {/* Section 1: FATIA Honoury Members */}
      {(activeTab === 'all' || activeTab === 'honourary') && (
        <section className="honourary-page-section" id="honourary-section">
          <div className="section-header-banner">
            <span className="section-badge">Section 1</span>
            <h2 className="section-main-heading">FATIA Honoury Members</h2>
            <p className="section-sub-heading">
              Distinguished industry patrons, prominent business leaders, and supporters who strengthen the Federation.
            </p>
          </div>

          <div className="honourary-cards-grid">
            {filteredHonourary.length > 0 ? (
              filteredHonourary.map((member, idx) => (
                <BoardMemberCard
                  key={idx}
                  hideImage={!member.image}
                  member={{
                    name: member.name,
                    position: member.company,
                    image: member.image
                  }}
                />
              ))
            ) : (
              <div className="no-members-msg">
                <p>No Honoury members matching "{searchTerm}".</p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Section 2: Silver Jubilee Members */}
      {(activeTab === 'all' || activeTab === 'silverJubilee') && (
        <section className="honourary-page-section" id="silver-jubilee-section">
          <div className="section-header-banner silver-jubilee-banner">
            <span className="section-badge gold">Section 2</span>
            <h2 className="section-main-heading">FATIA Silver Jubilee Hall Honourary Members</h2>
            <p className="section-sub-heading">
              Honourary patrons and visionaries who made invaluable contributions to the landmark FATIA Silver Jubilee Hall.
            </p>
          </div>

          <div className="honourary-cards-grid">
            {filteredSilverJubilee.length > 0 ? (
              filteredSilverJubilee.map((member, idx) => (
                <BoardMemberCard
                  key={idx}
                  hideImage={!member.image}
                  member={{
                    name: member.name,
                    position: member.company,
                    image: member.image
                  }}
                />
              ))
            ) : (
              <div className="no-members-msg">
                <p>No Silver Jubilee members matching "{searchTerm}".</p>
              </div>
            )}
          </div>
        </section>
      )}
    </PageContainer>
  );
};

export default HonouraryMembers;
