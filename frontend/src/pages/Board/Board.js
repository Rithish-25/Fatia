import React from 'react';
import PageContainer from '../../components/PageContainer/PageContainer';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import BoardSection from '../../components/BoardSection/BoardSection';
import { boardData } from '../../data/board';
import './Board.css';

const Board = () => {
  return (
    <PageContainer>
      <SectionTitle
        tag="State Leadership"
        title="FATIA Board"
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
    </PageContainer>
  );
};

export default Board;
