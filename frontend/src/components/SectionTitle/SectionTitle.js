import React from 'react';
import './SectionTitle.css';

const SectionTitle = ({ tag, title, subtitle, centered = false }) => {
  return (
    <div className={`section-title-root ${centered ? 'centered' : ''}`}>
      {tag && <span className="section-title-tag">{tag}</span>}
      {title && <h2 className="section-title-heading">{title}</h2>}
      {subtitle && <p className="section-title-subtitle">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
