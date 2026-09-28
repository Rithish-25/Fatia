import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './PageContainer.css';

const PageContainer = ({ children, className = '' }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return (
    <main key={pathname} className={`page-container-root page-animate-in ${className}`}>
      {children}
    </main>
  );
};

export default PageContainer;
