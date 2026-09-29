import React, { useState } from 'react';
import PageContainer from '../../components/PageContainer/PageContainer';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import BoardSection from '../../components/BoardSection/BoardSection';
import { boardData } from '../../data/board';
import './Board.css';

const Board = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filterList = (list = []) => {
    if (!searchTerm.trim()) return list;
    const term = searchTerm.toLowerCase();
    return list.filter((m) => {
      const nameMatch = m.name && m.name.toLowerCase().includes(term);
      const nameTamilMatch = m.nameTamil && m.nameTamil.toLowerCase().includes(term);
      const posMatch = m.position && m.position.toLowerCase().includes(term);
      const posTamilMatch = m.positionTamil && m.positionTamil.toLowerCase().includes(term);
      const phoneMatch = m.phone && m.phone.toLowerCase().includes(term);
      return nameMatch || nameTamilMatch || posMatch || posTamilMatch || phoneMatch;
    });
  };

  const keyLeaders = filterList(boardData.keyLeaders || boardData.core);
  const vicePresidents = filterList(boardData.vicePresidents);
  const jointSecretaries = filterList(boardData.jointSecretaries);
  const assistantTreasurerAndCoordinator = filterList([
    ...(boardData.assistantTreasurer || []),
    ...(boardData.coordinator || [])
  ]);
  const directors = filterList(boardData.directors);
  const committeeChairmen = filterList(boardData.committeeChairmen);

  const totalMatches =
    keyLeaders.length +
    vicePresidents.length +
    jointSecretaries.length +
    assistantTreasurerAndCoordinator.length +
    directors.length +
    committeeChairmen.length;

  return (
    <PageContainer>
      <SectionTitle
        tag="Current Term (2025 - 2028)"
        title="Current Board & Committee Chairman"
        subtitle="Executive Core Office Bearers, Vice Presidents, Directors, and Committee Chairman leading the Federation."
      />

      {/* Search & Filter Controls */}
      <div className="board-search-controls">
        <div className="board-search-wrapper">
          <svg className="board-search-icon" fill="currentColor" viewBox="0 0 24 24">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
          </svg>
          <input
            type="text"
            className="board-search-input"
            placeholder="Search board member by name, position, or phone..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <button
              type="button"
              className="board-search-clear-btn"
              onClick={() => setSearchTerm('')}
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
        </div>

        <span className="board-count-badge">
          Showing {totalMatches} Board Members
        </span>
      </div>

      {/* Board Sections */}
      {totalMatches > 0 ? (
        <>
          {keyLeaders.length > 0 && (
            <BoardSection
              title="Executive Core Office Bearers"
              members={keyLeaders}
              highlight={true}
            />
          )}

          {vicePresidents.length > 0 && (
            <BoardSection
              title="Vice Presidents"
              members={vicePresidents}
            />
          )}

          {jointSecretaries.length > 0 && (
            <BoardSection
              title="Joint Secretaries"
              members={jointSecretaries}
            />
          )}

          {assistantTreasurerAndCoordinator.length > 0 && (
            <BoardSection
              title="Assistant Treasurer & Coordinator"
              members={assistantTreasurerAndCoordinator}
            />
          )}

          {directors.length > 0 && (
            <BoardSection
              title="Directors of the Board"
              members={directors}
            />
          )}

          {committeeChairmen.length > 0 && (
            <BoardSection
              title="Committee Chairman"
              members={committeeChairmen}
            />
          )}
        </>
      ) : (
        <div className="no-board-members-found">
          <p>No board members found matching "{searchTerm}".</p>
        </div>
      )}

      {/* Link Banner to Past Terms Board Page */}
      <div className="past-terms-link-banner">
        <h3 className="banner-heading">
          FATIA Leadership Legacy & Past Terms
        </h3>
        <p className="banner-subtext">
          Explore the term-wise history of former Executive Presidents, General Secretaries, and Treasurers across all past terms of FATIA.
        </p>
        <a href="/board/past-terms" className="btn-primary-gold banner-cta-btn">
          View Past Term Board Members (Term-wise) →
        </a>
      </div>
    </PageContainer>
  );
};

export default Board;
