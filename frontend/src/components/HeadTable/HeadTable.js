import React from 'react';
import './HeadTable.css';

const HeadTable = ({ headTable }) => {
  if (!headTable) return null;

  return (
    <div className="head-table-container">
      <div className="head-table-header">Head Table Bearers</div>

      <div className="head-table-list">
        <div className="head-table-row">
          <span className="head-table-label">President</span>
          <span className="head-table-value">{headTable.president || 'N/A'}</span>
        </div>

        <div className="head-table-row">
          <span className="head-table-label">Secretary</span>
          <span className="head-table-value">{headTable.secretary || 'N/A'}</span>
        </div>

        <div className="head-table-row">
          <span className="head-table-label">Treasurer</span>
          <span className="head-table-value">{headTable.treasurer || 'N/A'}</span>
        </div>
      </div>
    </div>
  );
};

export default HeadTable;
