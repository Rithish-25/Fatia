import React from 'react';
import '../styles/HeadTable.css';

const HeadTable = ({ president, secretary, treasurer }) => {
  return (
    <div className="head-table-container">
      <div className="head-table-header">Head Table</div>
      <div className="head-table-list">
        <div className="head-table-row">
          <span className="head-table-label">President</span>
          <span className="head-table-value">{president}</span>
        </div>
        <div className="head-table-row">
          <span className="head-table-label">Secretary</span>
          <span className="head-table-value">{secretary}</span>
        </div>
        <div className="head-table-row">
          <span className="head-table-label">Treasurer</span>
          <span className="head-table-value">{treasurer}</span>
        </div>
      </div>
    </div>
  );
};

export default HeadTable;
