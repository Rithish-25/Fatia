import React from 'react';
import '../styles/PageContainer.css';

const PageContainer = ({ children, className = '' }) => {
  return (
    <main className={`page-container ${className}`}>
      {children}
    </main>
  );
};

export default PageContainer;
