import React from 'react';
import { Link } from 'react-router-dom';
import PageContainer from '../../components/PageContainer/PageContainer';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import './Home.css';

const Home = () => {
  return (
    <PageContainer>
      {/* Hero Section */}
      <section className="hero-section">
        <img
          src="/assets/logo.png"
          alt="FATIA Association Primary Branding Logo"
          className="hero-logo-img"
        />
        <span className="hero-tagline">APEX FEDERATION OF TRADE & INDUSTRY ASSOCIATIONS</span>
        <h1 className="hero-title">
          FEDERATION OF ALL TRADE & INDUSTRY ASSOCIATIONS OF ERODE DISTRICT
        </h1>
        <h2 className="hero-title-tamil">
          ஈரோடு மாவட்ட அனைத்து தொழில் வணிக சங்கங்களின் கூட்டமைப்பு
        </h2>
        <p className="hero-description">
          Unifying 76 regional trade and industry associations, representing thousands of business enterprises, manufacturers, dealers, and commercial partners across Erode District.
        </p>
        <div className="hero-cta-group">
          <Link to="/board" className="btn-primary-gold">
            Board Members
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
            </svg>
          </Link>
          <Link to="/members" className="btn-secondary-outline">
            Explore 76 Member Associations
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Key Association Statistics */}
      <section className="stats-grid">
        <div className="stat-card">
          <div className="stat-number">76</div>
          <div className="stat-label">Member Associations</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">6+</div>
          <div className="stat-label">FATIA Fair Editions</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">4000+</div>
          <div className="stat-label">Business Enterprises</div>
        </div>
      </section>

      {/* Quick Navigation Cards */}
      <section style={{ marginBottom: '40px' }}>
        <SectionTitle
          tag="Explore FATIA"
          title="Association Portals & Information"
          subtitle="Direct access to our state network, leadership hierarchy, industry gatherings, and historical annual tech fairs."
        />

        <div className="quick-nav-grid">
          <div className="quick-nav-card">
            <div className="quick-nav-icon-box">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
              </svg>
            </div>
            <h3 className="quick-nav-title">Member Associations</h3>
            <p className="quick-nav-text">
              Comprehensive registry of all 76 member associations with active Head Table office bearers across Tamil Nadu.
            </p>
            <Link to="/members" className="quick-nav-link-btn">
              View Members Registry →
            </Link>
          </div>

          <div className="quick-nav-card">
            <div className="quick-nav-icon-box">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
            <h3 className="quick-nav-title">Board of Directors</h3>
            <p className="quick-nav-text">
              Key state office bearers including President V.K. Rajamanickam, General Secretary P. Ravichandran, and Directors.
            </p>
            <Link to="/board" className="quick-nav-link-btn">
              View Board Members →
            </Link>
          </div>

          <div className="quick-nav-card">
            <div className="quick-nav-icon-box">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10z" />
              </svg>
            </div>
            <h3 className="quick-nav-title">Events & Conventions</h3>
            <p className="quick-nav-text">
              Stay updated with annual general meetings, trade summits, and executive leadership forums.
            </p>
            <Link to="/events" className="quick-nav-link-btn">
              Explore Events →
            </Link>
          </div>

          <div className="quick-nav-card">
            <div className="quick-nav-icon-box">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l-5.5 9h11zM12 22l5.5-9h-11z" />
              </svg>
            </div>
            <h3 className="quick-nav-title">Technology Fair</h3>
            <p className="quick-nav-text">
              Explore landmark state technology fair editions from 2014 to 2027 with photo galleries and committee details.
            </p>
            <Link to="/fair" className="quick-nav-link-btn">
              Explore Fair Archives →
            </Link>
          </div>
        </div>
      </section>
    </PageContainer>
  );
};

export default Home;
