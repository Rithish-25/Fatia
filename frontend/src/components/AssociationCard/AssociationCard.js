import React from 'react';
import HeadTable from '../HeadTable/HeadTable';
import './AssociationCard.css';

const AssociationCard = ({ association }) => {
  return (
    <div className="association-card">
      <div className="association-card-top">
        <div className="association-card-logo-box">
          <img
            src="/assets/logo.png"
            alt={`${association.name} Logo`}
            className="association-card-logo-img"
          />
        </div>

        <div>
          <span className="association-card-badge">District Association</span>
          <h3 className="association-card-name">{association.name}</h3>
        </div>
      </div>

      <HeadTable headTable={association.headTable} />
    </div>
  );
};

export default AssociationCard;
