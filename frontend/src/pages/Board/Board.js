import React, { useState } from 'react';
import PageContainer from '../../components/PageContainer/PageContainer';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import BoardSection from '../../components/BoardSection/BoardSection';
import BoardMemberCard from '../../components/BoardMemberCard/BoardMemberCard';
import { boardData } from '../../data/board';
import { honouraryMembers, silverJubileeHallMembers } from '../../data/honouraryMembers';
import './Board.css';

const Board = () => {
  const [honourarySearch, setHonourarySearch] = useState('');

  const filteredHonourary = honouraryMembers.filter(
    (m) =>
      m.name.toLowerCase().includes(honourarySearch.toLowerCase()) ||
      m.company.toLowerCase().includes(honourarySearch.toLowerCase())
  );

  const filteredSilverJubilee = silverJubileeHallMembers.filter(
    (m) =>
      m.name.toLowerCase().includes(honourarySearch.toLowerCase()) ||
      m.company.toLowerCase().includes(honourarySearch.toLowerCase())
  );

  return (
    <PageContainer>
      <SectionTitle
        tag="State Leadership"
        title="FATIA Board (2025 to 2028)"
        subtitle="Executive Core Office Bearers and Regional Vice Presidents leading the Federation across Tamil Nadu."
      />

      <BoardSection
        title="Executive Core Office Bearers"
        members={boardData.keyLeaders || boardData.core}
        highlight={true}
      />

      <BoardSection
        title="Vice Presidents"
        members={boardData.vicePresidents}
      />

      <BoardSection
        title="Joint Secretaries"
        members={boardData.jointSecretaries}
      />

      <BoardSection
        title="Assistant Treasurer & Coordinator"
        members={[...(boardData.assistantTreasurer || []), ...(boardData.coordinator || [])]}
      />

      <BoardSection
        title="Directors of the Board"
        members={boardData.directors}
      />

      <BoardSection
        title="Committee Chairmen"
        members={boardData.committeeChairmen}
      />

      {/* Past Terms Board Members Section */}
      {boardData.pastTerms && boardData.pastTerms.length > 0 && (
        <div className="past-terms-section">
          <SectionTitle
            tag="Legacy & History"
            title="FATIA Past Terms Board Leaders"
            subtitle="Honouring former Executive Presidents, General Secretaries, and Treasurers across past terms of FATIA."
          />

          <div className="past-terms-container">
            {boardData.pastTerms.map((termGroup, idx) => (
              <div key={idx} className="past-term-block">
                <div className="past-term-header">
                  <span className="past-term-badge">{termGroup.termTitle}</span>
                </div>
                <div className="past-term-members-grid">
                  {termGroup.members.map((member, mIdx) => (
                    <BoardMemberCard key={mIdx} member={member} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* FATIA Honourary Members Section */}
      <div className="honourary-section">
        <SectionTitle
          tag="Patrons & Benefactors"
          title="Our Valuable FATIA Honourary Members"
          subtitle="Distinguished industry patrons, business leaders, and supporters who strengthen the Federation."
        />

        <div className="honourary-search-box">
          <input
            type="text"
            className="honourary-search-input"
            placeholder="Search honourary member name or company..."
            value={honourarySearch}
            onChange={(e) => setHonourarySearch(e.target.value)}
          />
          <span className="honourary-count-badge">{filteredHonourary.length} Members</span>
        </div>

        <div className="honourary-grid">
          {filteredHonourary.map((m, idx) => (
            <BoardMemberCard
              key={idx}
              member={{
                name: m.name,
                position: m.company
              }}
            />
          ))}
        </div>
      </div>

      {/* FATIA Silver Jubilee Hall Honourary Members Section */}
      <div className="honourary-section">
        <SectionTitle
          tag="Silver Jubilee Legacy"
          title="Our Valuable FATIA Silver Jubilee Hall Honourary Members"
          subtitle="Honourary patrons who contributed to the historic FATIA Silver Jubilee Hall landmark."
        />

        <div className="honourary-grid">
          {filteredSilverJubilee.map((m, idx) => (
            <BoardMemberCard
              key={idx}
              member={{
                name: m.name,
                position: m.company
              }}
            />
          ))}
        </div>
      </div>
    </PageContainer>
  );
};

export default Board;
