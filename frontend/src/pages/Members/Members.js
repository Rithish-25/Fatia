import React, { useState } from 'react';
import PageContainer from '../../components/PageContainer/PageContainer';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import AssociationCard from '../../components/AssociationCard/AssociationCard';
import { membersData } from '../../data/members';
import './Members.css';

const Members = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredMembers = membersData.filter((member) => {
    const term = searchTerm.toLowerCase();
    return (
      member.name.toLowerCase().includes(term) ||
      member.headTable.president.toLowerCase().includes(term) ||
      member.headTable.secretary.toLowerCase().includes(term) ||
      member.headTable.treasurer.toLowerCase().includes(term)
    );
  });

  return (
    <PageContainer>
      <SectionTitle
        tag="State Registry"
        title="FATIA Member Associations"
        subtitle="Complete registry of all 76 member associations across Tamil Nadu districts with their respective Head Table office bearers."
      />

      <div className="members-controls">
        <div className="members-search-wrapper">
          <svg className="members-search-icon" fill="currentColor" viewBox="0 0 24 24">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
          </svg>
          <input
            type="text"
            className="members-search-input"
            placeholder="Search by association name or office bearer"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <span className="members-count-badge">
          Showing {filteredMembers.length} of {membersData.length} Associations
        </span>
      </div>

      <div className="members-grid">
        {filteredMembers.length > 0 ? (
          filteredMembers.map((member) => (
            <AssociationCard key={member.id} association={member} />
          ))
        ) : (
          <div className="no-members-found">
            <p>No member associations found matching "{searchTerm}".</p>
          </div>
        )}
      </div>
    </PageContainer>
  );
};

export default Members;
