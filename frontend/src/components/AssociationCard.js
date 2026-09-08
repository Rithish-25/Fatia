import React from 'react';
import HeadTable from './HeadTable';
import '../styles/AssociationCard.css';

const AssociationCard = ({ association }) => {
  const { name, logo, headTable } = association;

  return (
    <div className="association-card">
      <div>
        <div className="association-card-top">
          <div className="association-card-logo-box">
            <img
              src={logo || "/assets/logo.png"}
              alt={`${name} Logo`}
              className="association-card-logo-img"
            />
          </div>
          <div>
            <h3 className="association-card-name">{name}</h3>
          </div>
        </div>
      </div>
      <HeadTable
        president={headTable.president}
        secretary={headTable.secretary}
        treasurer={headTable.treasurer}
      />
    </div>
  );
};

export default AssociationCard;
