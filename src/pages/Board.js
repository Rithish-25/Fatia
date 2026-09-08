import React from 'react';
import PageContainer from '../components/PageContainer';
import SectionTitle from '../components/SectionTitle';
import BoardSection from '../components/BoardSection';
import { boardData } from '../data/board';
import '../styles/Board.css';

const Board = () => {
  return (
    <PageContainer>
      <SectionTitle
        tag="State Leadership"
        title="FATIA Board & Office Bearers"
        subtitle="Distinguished executive leaders and district delegates guiding the Federation of All Tamilnadu IT Associations."
      />

      <div className="board-highlight-container">
        <BoardSection
          title="Executive Core Office Bearers"
          members={boardData.keyLeaders}
          isFeatured={true}
        />
      </div>

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
        members={[...boardData.assistantTreasurer, ...boardData.coordinator]}
      />

      <BoardSection
        title="Directors of the Board"
        members={boardData.directors}
      />
    </PageContainer>
  );
};

export default Board;
