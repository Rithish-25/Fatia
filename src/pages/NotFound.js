import React from 'react';
import { Link } from 'react-router-dom';
import PageContainer from '../components/PageContainer';
import '../styles/NotFound.css';

const NotFound = () => {
  return (
    <PageContainer>
      <div className="not-found-card">
        <div className="not-found-code">404</div>
        <h1 className="not-found-heading">Page Not Found</h1>
        <p className="not-found-text">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link to="/" className="btn-primary-gold">
          Return to Homepage
        </Link>
      </div>
    </PageContainer>
  );
};

export default NotFound;
