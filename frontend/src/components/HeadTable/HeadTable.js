import React from 'react';
import './HeadTable.css';

const HeadTable = ({ headTable }) => {
  if (!headTable) return null;

  const bearers = [
    {
      role: 'President',
      name: headTable.president,
      phone: headTable.presidentPhone,
      roleClass: 'role-president',
    },
    {
      role: 'Secretary',
      name: headTable.secretary,
      phone: headTable.secretaryPhone,
      roleClass: 'role-secretary',
    },
    {
      role: 'Treasurer',
      name: headTable.treasurer,
      phone: headTable.treasurerPhone,
      roleClass: 'role-treasurer',
    },
  ];

  return (
    <div className="head-table-container">
      <div className="head-table-header">
        <span>Head Table Office Bearers</span>
      </div>

      <div className="head-table-list">
        {bearers.map((bearer, idx) => (
          <div key={idx} className="head-table-row">
            <div className="head-table-role-tag">
              <span className={`role-indicator ${bearer.roleClass}`}></span>
              <span className="head-table-label">{bearer.role}</span>
            </div>

            <div className="head-table-details">
              <div className="head-table-name">{bearer.name || '—'}</div>
              {bearer.phone ? (
                <a
                  href={`tel:${bearer.phone.replace(/\s+/g, '')}`}
                  className="head-table-phone"
                  title={`Call ${bearer.name}`}
                >
                  <svg className="phone-icon" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                  <span>{bearer.phone}</span>
                </a>
              ) : (
                <span className="head-table-phone empty">—</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeadTable;
