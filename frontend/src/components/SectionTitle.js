import React from 'react';
import '../styles/SectionTitle.css';

const SectionTitle = ({ tag, title, subtitle, align = 'center' }) => {
  return (
    <div className={`section-title-wrapper align-${align}`}>
      {tag && <span className="section-tag">{tag}</span>}
      <h2 className="section-main-heading">{title}</h2>
      <div className="section-accent-line" />
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
