import React from 'react';
import HeadTable from '../HeadTable/HeadTable';
import './AssociationCard.css';

const AssociationCard = ({ association }) => {
  return (
    <div className="association-card">
      <div className="association-card-top">
        <span className="association-card-badge">District Association</span>
        <h3 className="association-card-name">{association.name}</h3>
      </div>

      <HeadTable headTable={association.headTable} />
    </div>
  );
};

export default AssociationCard;
