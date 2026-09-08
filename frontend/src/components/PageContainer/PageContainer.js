import React from 'react';
import './PageContainer.css';

const PageContainer = ({ children, className = '' }) => {
  return (
    <main className={`page-container-root ${className}`}>
      {children}
    </main>
  );
};

export default PageContainer;
