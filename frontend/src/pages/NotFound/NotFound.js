import React from 'react';
import { Link } from 'react-router-dom';
import PageContainer from '../../components/PageContainer/PageContainer';
import './NotFound.css';

const NotFound = () => {
  return (
    <PageContainer>
      <div className="notfound-card">
        <h1 className="notfound-code">404</h1>
        <h2 className="notfound-title">Page Not Found</h2>
        <p className="notfound-desc">
          The requested page does not exist or has been moved.
        </p>
        <Link to="/" className="btn-primary-gold" style={{ display: 'inline-flex' }}>
          ← Return to Home Page
        </Link>
      </div>
    </PageContainer>
  );
};

export default NotFound;
